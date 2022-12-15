import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  Input,
  useDisclosure,
  FormControl,
  FormLabel,
  Image,
  useToast,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import CardProduct from "../../components/CardProduct";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { addProduct, getListProductsByBoothId } from "../../api";
import axios from "axios";

export default function ProductManage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const inputRef = useRef("");
  const toast = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [menu_id, setMenuId] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [dsc, setDsc] = useState("");
  const [img, setImg] = useState("");
  const [imgPre, setImgPre] = useState("/slide/mon9.jpg");

  const handleClick = () => {
    inputRef.current.click();
  };
  const [Items, setItems] = useState([]);
  const fechItems = async () => {
    try {
      await getListProductsByBoothId(
        JSON.parse(localStorage.getItem("user")).booth.id
      ).then((res) => {
        setItems(
          res.items.map((item) => {
            return {
              id: item.id,
              name: item.name,
              price: item.price,
              dsc: item.description,
              img: item.images[0].link,
            };
          })
        );
        setMenuId(res.menu.id);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fechItems();
  }, []);

  const AddProduct = async () => {
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("description", dsc);
    formdata.append("menu_id", menu_id);
    formdata.append("image", img);
    try {
      await addProduct(formdata).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error.message);
    }
    setName("");
    setDsc("");
    setPrice("");
    getListProductsByBoothId(
      JSON.parse(localStorage.getItem("user")).booth.id
    ).then((res) => {
      setItems(
        res.items.map((item) => {
          return {
            id: item.id,
            name: item.name,
            price: item.price,
            dsc: item.description,
            img: item.images[0].link,
          };
        })
      );
      setMenuId(res.menu.id);
    });
    toast({
      title: "Successfully!",
      description: "新商品を追加しました.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handlecreateBase64 = useCallback(async (e) => {
    const file = e.target.files[0];
    setImg(file);
    const base64 = await convertToBase64(file);
    setImgPre(base64);
    e.target.value = "";
  }, []);
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (!file) {
        alert("Please select an image");
      } else {
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
      }
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSearch = (searchTerm) => {
    try {
      setSearchTerm(searchTerm);
      if (searchTerm !== "") {
        const newData = Items.filter((item) => {
          return Object.values(item)
            .join("")
            .toLowerCase("")
            .includes(searchTerm.toLowerCase());
        });
        setSearchResult(newData);
      } else {
        setSearchResult(Items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSearch = () => {
    handleSearch(inputRef.current.value);
  };

  return (
    <Box bg="rgba(0,0,0,0.05)" p={5}>
      <Flex flexDirection={"row"} justifyContent={"space-between"} px={10}>
        <Text py={3} fontSize="4xl" fontWeight={700}>
          ブースの製品リスト
        </Text>
        <Flex>
          <Input
            placeholder="Search"
            size="md"
            mt={5}
            maxWidth={"300px"}
            mr={5}
            borderColor={"blue.500"}
            ref={inputRef}
            value={searchTerm}
            onChange={getSearch}
          />
          <Button
            colorScheme="teal"
            onClick={onOpen}
            size="md"
            mt={5}
            variant={"solid"}
            width={"200px"}
            marginLeft={5}
          >
            商品を追加
          </Button>
        </Flex>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} px={10} py={3}>
        {searchTerm.length < 1
          ? Items?.map((item, index) => {
              return <CardProduct data={item} key={index} />;
            })
          : searchResult?.map((item, index) => {
              return <CardProduct data={item} key={index} />;
            })}
      </Grid>

      <Modal
        initialFocusRef={initialRef}
        isCentered={true}
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> 商品を追加</ModalHeader>
          <ModalBody>
            <Flex flexDirection={"row"} justifyContent={"space-between"}>
              <Image
                boxSize="170px"
                objectFit="cover"
                src={imgPre}
                alt="food"
              />
              <Flex display={"block"}>
                <Flex>
                  <FormControl ml={5} width={"45%"}>
                    <FormLabel>名前</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="名前"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl ml={5} width={"45%"}>
                    <FormLabel> 価格 </FormLabel>
                    <Input
                      placeholder="価格"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </FormControl>
                </Flex>

                <FormControl ml={5} mt={5} width={"95%"}>
                  <FormLabel> 紹介 </FormLabel>
                  <Input
                    placeholder="紹介"
                    value={dsc}
                    onChange={(e) => setDsc(e.target.value)}
                  />
                </FormControl>
              </Flex>
            </Flex>
            <Flex>
              <Input
                type={"file"}
                size="xs"
                display={"none"}
                ref={inputRef}
                onChange={handlecreateBase64}
              ></Input>
              <Button
                colorScheme="teal"
                onClick={handleClick}
                size="xs"
                width={170}
                mt={3}
              >
                写真をアップロード
              </Button>
            </Flex>
          </ModalBody>
          <ModalFooter pt={-6}>
            <Button colorScheme="teal" mr={3} onClick={AddProduct}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

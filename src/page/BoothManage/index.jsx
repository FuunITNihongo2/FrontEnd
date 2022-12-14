import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
  useToast,
  Center,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { VscLayersActive } from "react-icons/vsc";
import { AiFillCheckCircle, AiFillMinusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import { editBoothManage, getBooth, getListProductsByBoothId } from "../../api";

export default function BoothManage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const cancelRef = React.useRef();
  const inputRef = React.useRef();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [active, setActive] = useState("");
  const [img, setImg] = useState("");
  const [imgPrev, setImgPrev] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const navigateProduct = () => {
    navigate(`/product-manage`);
  };
  const [bDetail, setBDetail] = useState({});
  const [Items, setItems] = useState([]);
  const fectBooth = async () => {
    try {
      await getBooth(JSON.parse(localStorage.getItem("user")).booth.id).then(
        (res) => {
          setBDetail({
            id: res.booth.id,
            name: res.booth.name,
            owner: res.owner.nickname,
            address: res.booth.address,
            active: res.booth.active_state,
            img: res.booth.images[0].link,
          });
          setName(res.booth.name);
          setActive(res.booth.active_state);
          setAddress(res.booth.address);
          setImgPrev(res.booth.images[0].link);
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fectBooth();
  }, []);

  const fechItems = async () => {
    try {
      await getListProductsByBoothId(user.booth.id).then((res) => {
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
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fechItems();
  }, []);
  const handlecreateBase64 = useCallback(async (e) => {
    const file = e.target.files[0];
    setImg(file);
    const base64 = await convertToBase64(file);
    setImgPrev(base64);
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
  const handleEdit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("_method", "PUT");
    formdata.append("name", name);
    formdata.append("address", address);
    if (img !== "") {
      formdata.append("image", img);
    }
    try {
      await editBoothManage(
        JSON.parse(localStorage.getItem("user")).booth.id,
        formdata
      ).then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
    getBooth(JSON.parse(localStorage.getItem("user")).booth.id).then((res) => {
      setBDetail({
        id: res.booth.id,
        name: res.booth.name,
        owner: res.owner.nickname,
        address: res.booth.address,
        active: res.booth.active_state,
        img: res.booth.images[0].link,
      });
      setName(res.booth.name);
      setActive(res.booth.active_state);
      setAddress(res.booth.address);
      setImgPrev(res.booth.images[0].link);
    });
    toast({
      title: "Successfully!",
      description: "????????????????????????????????????.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <Stack minH="100vh" p={6} bg="rgba(0,0,0,0.05)" spacing={6}>
      <Flex bg="white" boxShadow="2xl" borderRadius={8}>
        <Box flex={1} p={4} alignItems={"center"} display="flex">
          <Image
            src={bDetail.img}
            alt="booth-image"
            w="100%"
            h="350px"
            objectFit={"cover"}
          />
        </Box>
        <Box flex={1} p={4}>
          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            <Heading mb={1}>{bDetail.name}</Heading>
          </Flex>
          <Divider bg="black" h={1} mb={4} />
          <Flex fontSize={"19px"} mb={5}>
            <Flex alignItems={"center"}>
              <FaUser />
              <Text ml={1} fontWeight="bold">
                ?????????????????????:
              </Text>
            </Flex>
            <Text ml={3}>{bDetail.owner}</Text>
          </Flex>

          <Flex fontSize={"19px"} mb={5}>
            <Flex alignItems={"center"}>
              <ImLocation />
              <Text ml={1} fontWeight="bold">
                ??????????????????:
              </Text>
            </Flex>
            <Text ml={3}>{bDetail.address}</Text>
          </Flex>

          <Flex fontSize={"19px"} mb={5} alignItems={"center"}>
            <Flex alignItems={"center"}>
              <VscLayersActive />
              <Text ml={1} mr={3} fontWeight="bold">
                ????????????????????????:
              </Text>
            </Flex>
            {bDetail.active === 1 ? (
              <>
                <Box color="green.500">
                  <AiFillCheckCircle />
                </Box>
                <Text color="green.500">???????????????</Text>
              </>
            ) : (
              <>
                <Box color="red">
                  <AiFillMinusCircle />
                </Box>
                <Text color="red">???????????????</Text>
              </>
            )}
          </Flex>
          <Button
            colorScheme="teal"
            onClick={onOpen}
            size="md"
            variant={"solid"}
            width={"200px"}
          >
            ????????????????????????
          </Button>
        </Box>
      </Flex>
      <Box bg="white" boxShadow="2xl" borderRadius={8} py={3}>
        <Text px={10} py={3} fontSize="4xl" fontWeight={700}>
          ???????????????????????????
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={6} px={10} py={3}>
          {Items?.map((item, index) => {
            if (index < 4) return <CardProduct data={item} />;
          })}
        </Grid>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            onClick={navigateProduct}
          >
            ???????????????
          </Button>
        </Flex>
      </Box>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size="2xl"
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <form onSubmit={handleEdit}>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                ????????????????????????
              </AlertDialogHeader>

              <AlertDialogBody>
                <Flex w="100%">
                  <Box flex={5.5} p={2}>
                    <Image
                      src={imgPrev}
                      alt="booth-image"
                      w="100%"
                      h="250px"
                      objectFit={"cover"}
                    />
                    <Center>
                      <Input
                        type={"file"}
                        size="xs"
                        display={"none"}
                        ref={inputRef}
                        onChange={handlecreateBase64}
                      />
                      <Button
                        colorScheme="teal"
                        onClick={() => {
                          inputRef.current.click();
                        }}
                        size="xs"
                        mt={3}
                      >
                        ???????????????????????????
                      </Button>
                    </Center>
                  </Box>
                  <Box flex={4.5} p={2}>
                    <FormControl w="100%">
                      <FormLabel>????????????</FormLabel>
                      <Input
                        type="text"
                        placeholder="????????????"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormControl>

                    <FormControl w="100%" mt={3}>
                      <FormLabel>??????????????????</FormLabel>
                      <Input
                        type="text"
                        placeholder="??????????????????"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                </Flex>
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button onClick={onClose} type="submit" colorScheme="teal">
                  Save
                </Button>
                <Button onClick={onClose} ml={3}>
                  Cancel
                </Button>
              </AlertDialogFooter>
            </form>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Stack>
  );
}

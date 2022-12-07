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
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import CardProduct from "../../components/CardProduct";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { getListProducts } from "../../api";

export default function ProductManage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const inputRef = useRef("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleClick = () => {
    inputRef.current.click();
  };
  const [Items, setItems] = useState([]);
  const fechItems = async () => {
    try {
      await getListProducts(
        JSON.parse(localStorage.getItem("user")).booth
      ).then((res) => {
        setItems(
          res.listOfItems.map((item) => {
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
    </Box>
  );
}

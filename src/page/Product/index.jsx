import { Box, Button, Flex, Grid, Text, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct";
import { getListProducts } from "../../api";
import { useParams } from "react-router-dom";

export default function Product() {
  const params = useParams();
  const [Items, setItems] = useState([]);
  const fechItems = async () => {
    try {
      await getListProducts(Number(params.id)).then((res) => {
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
          />
          <Button
            colorScheme="teal"
            size="md"
            mt={5}
            variant={"solid"}
            width={"200px"}
          >
            製品を検索
          </Button>
        </Flex>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} px={10} py={3}>
        {Items?.map((item) => {
          return <CardProduct data={item} />;
        })}
      </Grid>
    </Box>
  );
}

import { Box, Grid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct";
import { getListProducts } from "../../api";

export default function ListProduct() {
  const [products, setProducts] = useState([]);
  const fechData = async () => {
    try {
      await getListProducts(
        JSON.parse(localStorage.getItem("user")).booth
      ).then((res) => {
        setProducts(
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
    fechData();
  }, []);
  return (
    <Box bg="rgba(0,0,0,0.05)" p={5} minH="100vh">
      <Text py={3} fontSize="4xl" fontWeight={700} color="black" ml={5}>
        リストブース
      </Text>
      <Grid templateColumns="repeat(5, 1fr)">
        {products?.map((item, index) => {
          return <CardProduct data={item} />;
        })}
      </Grid>
    </Box>
  );
}

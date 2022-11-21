import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import CardProduct from "../../components/CardProduct";

export default function Product() {
  return (
    <Box bg="rgba(0,0,0,0.05)" p={5} borderRadius={8}>
      <Text px={10} py={3} fontSize="4xl" fontWeight={700}>
        ブースの製品リスト
      </Text>
      <Grid templateColumns="repeat(4, 2fr)" gap={6} px={10} py={3}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Grid>
      <Flex alignItems={"center"} justifyContent={"center"} mt={5}>
        <Button colorScheme="teal" variant="solid" size="lg">
          もっと見る
        </Button>
      </Flex>
    </Box>
  );
}

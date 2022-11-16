import React from "react";
import Layout from "../../layout";
import Slide from "../../components/Slide";
import CardItem from "../../components/CardItem"
import BoothCard from "../../components/BoothCard"
import { Text, Button, Flex } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
function Home() {
  return (
    <Layout>
      <Slide />
      <Text px={10} py={5} mt={10} fontSize="4xl" fontWeight={700}>
        傑出したブース
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} px={10}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </Grid>
      <Flex alignItems={"center"} justifyContent={"center"} mt={5}>
        <Button colorScheme="teal" variant="solid" size="lg">
          もっと見る
        </Button>
      </Flex>

      <Text px={10} py={5} mt={10} fontSize="4xl" fontWeight={700}>
        ブース
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} px={10}>
        <BoothCard />
        <BoothCard />
        <BoothCard />
        <BoothCard />
      </Grid>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Button colorScheme="teal" variant="solid" size="lg">
          もっと見る
        </Button>
      </Flex>
    </Layout>
  );
}

export default Home;

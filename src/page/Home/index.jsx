import React, { useEffect, useState } from "react";
import Slide from "../../components/Slide";
import BoothCard from "../../components/BoothCard";
import { Text, Button, Flex, Box } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { getHome } from "../../api";
import CardProduct from "../../components/CardProduct";

function Home() {
  const [listBooths, setListBooths] = useState([]);
  const [Items, setItems] = useState([]);
  const fechData = async () => {
    try {
      await getHome().then((res) => {
        setListBooths(
          res.mostPopularBooths.map((booth) => {
            return {
              id: booth.id,
              name: booth.name,
              img: booth.images[0].link,
            };
          })
        );

        setItems(
          res.mostPopularItems.map((item) => {
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
    <>
      <Slide />
      <Box p={5}>
        <Box bg="rgba(0,0,0,0.05)" p={5} borderRadius={8}>
          <Text px={10} py={3} fontSize="4xl" fontWeight={700}>
            傑出したブース
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" gap={6} px={10} py={3}>
            {listBooths?.map((booth, index) => {
              if (index < 8) return <BoothCard data={booth} />;
            })}
          </Grid>
          <Flex alignItems={"center"} justifyContent={"center"} mt={5}>
            <Button
              colorScheme="blue"
              variant="solid"
              size="lg"
              as="a"
              href="/booths"
            >
              もっと見る
            </Button>
          </Flex>
        </Box>

        <Box bg="rgba(0,0,0,0.05)" p={5} borderRadius={8} mt={5}>
          <Text px={10} py={3} fontSize="4xl" fontWeight={700}>
            優れた食品
          </Text>
          <Grid templateColumns="repeat(5, 1fr)">
            {Items?.map((item, index) => {
              if (index < 10) return <CardProduct data={item} />;
            })}
          </Grid>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Button
              colorScheme="blue"
              variant="solid"
              size="lg"
              as="a"
              href="/products"
            >
              もっと見る
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Home;

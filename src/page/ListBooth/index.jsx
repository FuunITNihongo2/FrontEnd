import { Box, Grid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BoothCard from "../../components/BoothCard";
import { getListBooth } from "../../api";

export default function ListBooth() {
  const [listBooths, setListBooths] = useState([]);
  const fechData = async () => {
    try {
      await getListBooth().then((res) => {
        setListBooths(
          res.booths.map((booth) => {
            return {
              id: booth.id,
              name: booth.name,
              img: booth.images[0].link,
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
      <Grid templateColumns="repeat(2, 1fr)" gap={6} px={10} py={3}>
        {listBooths?.map((booth, index) => {
          return <BoothCard data={booth} />;
        })}
      </Grid>
    </Box>
  );
}

import { Box, Grid, Text, Flex, Input } from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import BoothCard from "../../components/BoothCard";
import { getListBooth } from "../../api";

export default function ListBooth() {
  const [listBooths, setListBooths] = useState([]);
  const inputRef = useRef("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
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

  const handleSearch = (searchTerm) => {
    try {
      setSearchTerm(searchTerm);
      if (searchTerm !== "") {
        const newData = listBooths.filter((booth) => {
          return Object.values(booth)
            .join("")
            .toLowerCase("")
            .includes(searchTerm.toLowerCase());
        });
        setSearchResult(newData);
      } else {
        setSearchResult(listBooths);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSearch = () => {
    handleSearch(inputRef.current.value);
  };
  return (
    <Box bg="rgba(0,0,0,0.05)" p={5} minH="100vh">
      <Flex flexDirection={"row"} justifyContent={"space-between"} px={10}>
        <Text py={3} fontSize="4xl" fontWeight={700} color="black" ml={5}>
          リストブース
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
        </Flex>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap={2} px={10} py={3}>
        {searchTerm.length < 1
          ? listBooths?.map((item, index) => {
              return <BoothCard data={item} key={index} />;
            })
          : searchResult?.map((item, index) => {
              return <BoothCard data={item} key={index} />;
            })}
      </Grid>
    </Box>
  );
}

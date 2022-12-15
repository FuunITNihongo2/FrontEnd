import {
  Stack,
  Text,
  Image,
  Heading,
  Avatar,
  Center,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BoothCard({ data }) {
  const navigate = useNavigate();
  const Navigate = () => {
    navigate(`/booth-detail/${data.id}`);
  };

  return (
    <Center py={6}>
      <Box
        w={"300px"}
        bg={'useColorModeValue("white", "gray.900")'}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        cursor="pointer"
        _hover={{
          opacity: "0.8",
        }}
        onClick={Navigate}
      >
        <Box h={"210px"} bg={"red"} mt={-6} mx={-6} mb={6} pos={"relative"}>
          <Image
            src={data.img}
            // layout={"fill"}
            width="100%"
            h="100%"
            objectFit={"cover"}
          />
        </Box>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"25px"}
          fontFamily={"body"}
          maxH="30px"
          overflow={"hidden"}
        >
          {data.name}
        </Heading>
      </Box>
    </Center>
  );
}

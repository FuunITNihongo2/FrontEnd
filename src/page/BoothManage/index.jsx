import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { VscLayersActive } from "react-icons/vsc";
import { AiFillCheckCircle } from "react-icons/ai";
import { SiVirustotal } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import EditBooth from "../EditBooth";

export default function BoothManage() {
  const navigate = useNavigate();
  const navigateProduct = () => {
    navigate("/product");
  };
  return (
    <Stack minH="100vh" p={6} bg="rgba(0,0,0,0.05)" spacing={6}>
      <Flex bg="white" boxShadow="2xl" borderRadius={8}>
        <Box flex={1} p={4} alignItems={"center"} display="flex">
          <Image
            src="/slide/du-lich-ba-na-hill-48.jpg"
            alt="booth-image"
            w="100%"
            h="350px"
            objectFit={"cover"}
          />
        </Box>
        <Box flex={1} p={4}>
          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            <Heading mb={1}>ブース名</Heading>
          </Flex>
          <Divider bg="black" h={1} mb={4} />
          <Flex fontSize={"19px"} mb={5}>
            <Flex alignItems={"center"}>
              <FaUser />
              <Text ml={1} fontWeight="bold">
                ブースオーナー:
              </Text>
            </Flex>
            <Text ml={3}>Nguyen Van A</Text>
          </Flex>

          <Flex fontSize={"19px"} mb={5}>
            <Flex alignItems={"center"}>
              <ImLocation />
              <Text ml={1} fontWeight="bold">
                ブースの場所:
              </Text>
            </Flex>
            <Text ml={3}>
              54 Nguyễn Lương Bằng, Hoà Khánh Bắc, Liên Chiểu, Đà Nẵng
            </Text>
          </Flex>

          <Flex fontSize={"19px"} mb={5}>
            <Flex alignItems={"center"}>
              <SiVirustotal />
              <Text ml={1} fontWeight="bold">
                注文合計:
              </Text>
            </Flex>
            <Text ml={4}>250</Text>
          </Flex>

          <Flex fontSize={"19px"} mb={5} alignItems={"center"}>
            <Flex alignItems={"center"}>
              <VscLayersActive />
              <Text ml={1} mr={3} fontWeight="bold">
                状態:
              </Text>
            </Flex>
            <Box color="green.500">
              <AiFillCheckCircle />
            </Box>
            <Text color="green.500">アクティブ</Text>
          </Flex>
          <EditBooth />
        </Box>
      </Flex>
      <Box bg="white" boxShadow="2xl" borderRadius={8} py={3}>
        <Text px={10} py={3} fontSize="4xl" fontWeight={700}>
          製品ポートフォリオ
        </Text>
        <Grid templateColumns="repeat(1, 1fr)" gap={6} px={10} py={3}>
          <CardProduct idCard="1" />
        </Grid>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            onClick={navigateProduct}
          >
            もっと見る
          </Button>
        </Flex>
      </Box>
    </Stack>
  );
}

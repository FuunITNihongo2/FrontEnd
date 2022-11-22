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
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CardProduct from "../../components/CardProduct";


export default function BoothDetail() {

  const navigate = useNavigate();
   const navigateProduct = () => {
     navigate('/product');
  };
  return (
    <Stack minH="100vh" p={6} bg="rgba(0,0,0,0.05)" spacing={6}>
      <Flex bg="white" boxShadow="2xl" borderRadius={8}>
        <Box flex={1} p={5}>
          <Image
            src="/slide/du-lich-ba-na-hill-48.jpg"
            alt="booth-image"
            w="800px"
            h="500px"
            objectFit={"cover"}
          />
        </Box>
        <Box flex={1} p={5}>
          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            <Heading mb={1}>ブース名</Heading>
          </Flex>
          <Divider bg="black" h={1} mb={4} />
          <Flex fontSize={"19px"} mb={2}>
            <Flex alignItems={"center"}>
              <FaUser />
              <Text ml={1} fontWeight="bold">
                ブースオーナー:
              </Text>
            </Flex>
            <Text ml={2}>Nguyen Van A</Text>
          </Flex>

          <Flex fontSize={"19px"} mb={2}>
            <Flex alignItems={"center"}>
              <ImLocation />
              <Text ml={1} fontWeight="bold">
                ブースの場所:
              </Text>
            </Flex>
            <Text ml={6}>
              54 Nguyễn Lương Bằng, Hoà Khánh Bắc, Liên Chiểu, Đà Nẵng
            </Text>
          </Flex>

          <Flex fontSize={"19px"} mb={2}>
            <Flex alignItems={"center"}>
              <AiFillMail />
              <Text ml={1} fontWeight="bold">
                メールアドレス:
              </Text>
            </Flex>
            <Text ml={2}>nguyenvana@gmail.com</Text>
          </Flex>

          <Flex fontSize={"19px"} mb={10}>
            <Flex alignItems={"center"}>
              <AiFillPhone />
              <Text ml={1} fontWeight="bold">
                電話番号:
              </Text>
            </Flex>
            <Text ml={14}>093518596</Text>
          </Flex>

          <Heading fontSize={"2xl"}>ブース詳細</Heading>
          <Divider bg="black" h={1} mb={4} />
          <Text>
            Island booths provide maximum visibility and are entitled to use
            hanging signs. Island booths are available in standard and custom
            sizes. A limited amount of space is available for island booths.
          </Text>
        </Box>
      </Flex>
      <Box bg="white" boxShadow="2xl" borderRadius={8} py={3}>
        <Text px={10} py={3} fontSize="4xl" fontWeight={700}>
          製品ポートフォリオ
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={6} px={10}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
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

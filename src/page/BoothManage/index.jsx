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
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { VscLayersActive } from "react-icons/vsc";
import { AiFillCheckCircle, AiFillMinusCircle } from "react-icons/ai";
import { SiVirustotal } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import EditBooth from "../EditBooth";
import { getBooth } from "../../api";
import { getListItem } from "../../api";

export default function BoothManage() {
  const navigate = useNavigate();
  const navigateProduct = () => {
    navigate(`/product-manage`);
  };
  const [bDetail, setBDetail] = useState({});
  const [Items, setItems] = useState([]);
  const fectBooth = async () => {
    try {
      await getBooth(JSON.parse(localStorage.getItem("user")).booth).then(
        (res) => {
          setBDetail({
            id: res.booth.id,
            name: res.booth.name,
            address: res.booth.address,
            orders: res.booth.total_orders,
            active: res.booth.active_state,
            img: res.booth.images[0].link,
          });
          console.log(res.booth.images[0].link);
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fectBooth();
  }, []);

  const fechItems = async () => {
    try {
      await getListItem(JSON.parse(localStorage.getItem("user")).booth).then(
        (res) => {
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
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fechItems();
  }, []);
  return (
    <Stack minH="100vh" p={6} bg="rgba(0,0,0,0.05)" spacing={6}>
      <Flex bg="white" boxShadow="2xl" borderRadius={8}>
        <Box flex={1} p={4} alignItems={"center"} display="flex">
          <Image
            src={bDetail.img}
            alt="booth-image"
            w="100%"
            h="350px"
            objectFit={"cover"}
          />
        </Box>
        <Box flex={1} p={4}>
          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            <Heading mb={1}>{bDetail.name}</Heading>
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
            <Text ml={3}>{bDetail.address}</Text>
          </Flex>

          <Flex fontSize={"19px"} mb={5}>
            <Flex alignItems={"center"}>
              <SiVirustotal />
              <Text ml={1} fontWeight="bold">
                注文合計:
              </Text>
            </Flex>
            <Text ml={4}>{bDetail.orders}</Text>
          </Flex>

          <Flex fontSize={"19px"} mb={5} alignItems={"center"}>
            <Flex alignItems={"center"}>
              <VscLayersActive />
              <Text ml={1} mr={3} fontWeight="bold">
                状態:
              </Text>
            </Flex>
            {bDetail.active === 1 ? (
              <>
                <Box color="green.500">
                  <AiFillCheckCircle />
                </Box>
                <Text color="green.500">アクティブ</Text>
              </>
            ) : (
              <>
                <Box color="red">
                  <AiFillMinusCircle />
                </Box>
                <Text color="red">非活性</Text>
              </>
            )}
          </Flex>
          <EditBooth />
        </Box>
      </Flex>
      <Box bg="white" boxShadow="2xl" borderRadius={8} py={3}>
        <Text px={10} py={3} fontSize="4xl" fontWeight={700}>
          製品ポートフォリオ
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={6} px={10} py={3}>
          {Items?.map((item, index) => {
            if (index < 4) return <CardProduct data={item} />;
          })}
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

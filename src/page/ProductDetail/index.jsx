import {
  Box,
  Grid,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import CardProduct from "../../components/CardProduct";
import { useParams } from "react-router-dom";
import { getListProduct, getListProducts } from "../../api";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const params = useParams();

  const [product, setProduct] = useState();
  const [products, setProducts] = useState([]);

  const fechData = () => {
    Promise.all([getListProduct(Number(params.id)), getListProducts()]).then(
      function (values) {
        console.log(values);
        setProduct(values[0]?.item);
        setProducts(values[1]?.listOfItems.map((item) => {
          return {
            id: item.id,
            name: item.name,
            price: item.price,
            dsc: item.description,
            img: item.images[0].link,
          };
        }));
      }
    );
  };

  useEffect(() => {
    fechData();
  }, []);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product?.images[0]?.link}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product?.name}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {product?.price} 円
            </Text>
            <Text mt={5} fontSize={"2xl"}>
              販売商品数: {product?.orders} 製品
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {product?.description}
              </Text>
            </VStack>
          </Stack>
        </Stack>
      </SimpleGrid>
      <Text py={3} fontSize="4xl" fontWeight={700} color="black" ml={5}>
        関連製品
      </Text>
      <Grid templateColumns="repeat(5, 1fr)">
        {products?.slice(0, 10).map((item, index) => {
          return <CardProduct data={item} />;
        })}
      </Grid>
    </Container>
  );
}

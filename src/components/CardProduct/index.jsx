import { Box, Center, Text, Stack, Image, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function CardProduct({ data }) {
  const navigate = useNavigate();
  const Navigate = () => {
    navigate(`/product-detail/${data.id}`);
  };

  return (
    <Center py={3} flexWrap={"wrap"} display={"flex"}>
      <Box
        onClick={Navigate}
        maxW={"300px"}
        w={"full"}
        bg={"white"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        key={data.id}
        margin={"10px"}
        cursor="pointer"
        _hover={{
          opacity: "0.8",
        }}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            src={data.img}
            layout={"fill"}
            width={"100%"}
            height={"210px"}
          />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {data.name}
          </Text>
          <Text color={"gray.500"} fontSize={"90%"}>
            {data.dsc}
          </Text>
        </Stack>
        <Flex mt={6} spacing={4} align={"center"} justifyContent="flex-end">
          <Flex spacing={0} fontSize={"sm"} alignItems="center">
            <Text mr={3} fontWeight={600}>価格</Text>
            <Text color={"gray.500"} fontSize="lg">{data.price} VND</Text>
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
}

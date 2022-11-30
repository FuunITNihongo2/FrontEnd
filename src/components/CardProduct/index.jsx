import { Box, Center, Text, Stack, Image } from "@chakra-ui/react";
import { getListItem } from "../../api";
import { useState, useEffect } from "react";

export default function CardProduct({ idCard }) {
  const [items, setItems] = useState([]);

  const fechItems = async () => {
    try {
      await getListItem(idCard).then((res) => {
        setItems(res.items);
        console.log(res.items);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fechItems();
  }, []);
  return (
    <Center py={3} flexWrap={"wrap"} display={"flex"}>
      {items?.map((item, index) => (
        <Box
          maxW={"300px"}
          w={"full"}
          bg={"white"}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
          key={index}
          margin={"10px"}
        >
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            {item?.images.map((item) => (
              <Image
                src={item.link}
                layout={"fill"}
                width={"100%"}
                height={"210px"}
              />
            ))}
          </Box>
          <Stack>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              {item.name}
            </Text>
            <Text color={"gray.500"} fontSize={"90%"}>
              {item.description}
            </Text>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>価格</Text>
              <Text color={"gray.500"}>{item.price} VND</Text>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Center>
  );
}

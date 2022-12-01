import { Box, Center, Text, Stack, Image } from "@chakra-ui/react";

export default function CardProduct(props) {
  return (
    <Center py={3} flexWrap={"wrap"} display={"flex"}>
      <Box
        maxW={"300px"}
        w={"full"}
        bg={"white"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        key={props.data.id}
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
          <Image
            src={props.data.img}
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
            {props.data.name}
          </Text>
          <Text color={"gray.500"} fontSize={"90%"}>
            {props.data.dsc}
          </Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>価格</Text>
            <Text color={"gray.500"}>{props.data.price} VND</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

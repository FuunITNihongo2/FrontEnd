import { Stack, Text, Image, Heading, Avatar, Center,Box, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BoothCard({data}) {
 
  const navigate = useNavigate();
  const Navigate = () => {
    navigate(`/booth-detail/${data.id}`);
  };

  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        cursor='pointer'
        _hover={{
          opacity: '0.8',
        }}
        onClick={Navigate}
        h={310}
        >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={data.img}
            layout={'fill'}
            height={210}
            width="100%"
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
           {data.name}
          </Heading>
       
        </Stack>
       
      </Box>
    </Center>
  );
}

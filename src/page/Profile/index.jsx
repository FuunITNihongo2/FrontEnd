import { Box, Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaUserAlt, FaPersonBooth } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import EditProfile from "../EditProfile";

export default function Profile() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const updateProfile = (childData) => {
    setUser(childData);
  };
  return (
    <Box minH="100vh" p={6} bg="rgba(0,0,0,0.05)" w="100%">
      <Flex
        bg="white"
        borderRadius={10}
        w="100%"
        h="100%"
        py={3}
        boxShadow="2xl"
      >
        <Box flex={1} h="100%">
          <Center w="100%">
            <Box w="80%">
              <Image src={user.avatar.link} w="100%" />
              <Text
                textAlign={"center"}
                fontSize="30px"
                fontWeight={"bold"}
                py={2}
              >
                {user.nickname}
              </Text>
            </Box>
          </Center>
        </Box>
        <Flex
          flex={1}
          minH="100%"
          alignItems={"center"}
          justifyContent="center"
          align={"center"}
          py={3}
        >
          <Box>
            <Stack spacing={6} fontSize={"40px"}>
              <Flex alignItems="center">
                <FaUserAlt />
                <Text fontWeight={"bold"} ml={2} mr={4}>
                  フルネーム:
                </Text>
                {user.fullname}
              </Flex>

              <Flex alignItems="center">
                <AiFillPhone />
                <Text fontWeight={"bold"} ml={2} mr={4}>
                  電話番号:
                </Text>
                {user.phone_number}
              </Flex>

              <Flex alignItems="center">
                <FaPersonBooth />
                <Text fontWeight={"bold"} ml={2} mr={4}>
                  ブース:
                </Text>
                <Link to="/booth-manage">
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    color="blue.400"
                  >
                    {user.booth.name}
                  </Text>
                </Link>
              </Flex>
            </Stack>
            <EditProfile updateProfile={updateProfile} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

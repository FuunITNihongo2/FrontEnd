import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useState } from "react";
import Footer from "../../layout/Footer";
import { AiFillEye, AiFillEyeInvisible, AiFillLock } from "react-icons/ai";
export default function Login() {
    const [password, setPassword] = useState("");
    const [newpassword1, setNewPassword1] = useState("");
    const [newpassword2, setNewPassword2] = useState("");
  const [typeP, setTypeP] = useState("password");
  const [iconP, setIconP] = useState(<AiFillEyeInvisible />);
  const showPass = () => {
    if (typeP === "password") {
      setTypeP("text");
      setIconP(<AiFillEye />);
    } else {
      setTypeP("password");
      setIconP(<AiFillEyeInvisible />);
    }
  };

  return (
    <Box>
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        bg="rgba(0,0,0,0.05)"
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            bg="white"
            p={8}
            borderRadius={8}
            boxShadow={"2xl"}
          >
            <Heading fontSize={"2xl"}>パスワードを変更</Heading>
            <FormControl id="password">
              <FormLabel fontWeight={"normal"}>Old Password</FormLabel>
              {password !== "" ? (
                <Flex
                  pos="absolute"
                  // left="440px"
                  right={2}
                  top="52px"
                  cursor={"pointer"}
                  zIndex={10}
                  borderRadius={50}
                  align="center"
                  justifyContent={"center"}
                  onClick={showPass}
                  w="27px"
                  h="27px"
                  _hover={{ bg: "rgba(0,0,0,0.09)" }}
                >
                  {iconP}
                </Flex>
              ) : null}
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<AiFillLock />}
                />
                <Input
                  placeholder="Password"
                  type={typeP}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  pr={10}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="newpassword1">
              <FormLabel fontWeight={"normal"}>New Password</FormLabel>
              {password !== "" ? (
                <Flex
                  pos="absolute"
                  // left="440px"
                  right={2}
                  top="52px"
                  cursor={"pointer"}
                  zIndex={10}
                  borderRadius={50}
                  align="center"
                  justifyContent={"center"}
                  onClick={showPass}
                  w="27px"
                  h="27px"
                  _hover={{ bg: "rgba(0,0,0,0.09)" }}
                >
                  {iconP}
                </Flex>
              ) : null}
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<AiFillLock />}
                />
                <Input
                  placeholder="Password"
                  type={typeP}
                  onChange={(e) => {
                    setNewPassword1(e.target.value);
                  }}
                  value={newpassword1}
                  pr={10}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="newpassword2">
              <FormLabel fontWeight={"normal"}>Retype New Password</FormLabel>
              {password !== "" ? (
                <Flex
                  pos="absolute"
                  // left="440px"
                  right={2}
                  top="52px"
                  cursor={"pointer"}
                  zIndex={10}
                  borderRadius={50}
                  align="center"
                  justifyContent={"center"}
                  onClick={showPass}
                  w="27px"
                  h="27px"
                  _hover={{ bg: "rgba(0,0,0,0.09)" }}
                >
                  {iconP}
                </Flex>
              ) : null}
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<AiFillLock />}
                />
                <Input
                  placeholder="Password"
                  type={typeP}
                  onChange={(e) => {
                    setNewPassword2(e.target.value);
                  }}
                  value={newpassword2}
                  pr={10}
                />
              </InputGroup>
            </FormControl>
            <Stack spacing={6}>
              <Button as={"a"} colorScheme={"blue"} variant={"solid"} href="/">
                変更
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src="/cau-vang-ba-na-hills.jpg"
            w="100%"
          />
        </Flex>
      </Stack>
      <Footer />
    </Box>
  );
}

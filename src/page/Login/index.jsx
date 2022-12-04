import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Box,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useState } from "react";
import Footer from "../../layout/Footer";
import { AiFillEye, AiFillEyeInvisible, AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { login } from "../../api";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmal] = useState("");
  const [password, setPassword] = useState("");
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

  const handleLogin = async () => {
    const user = {
      email: email,
      password: password,
    };
    try {
      await login(user).then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
        console.log(res.data);
      });
    } catch (error) {
      console.log(error.message);
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
            <Heading fontSize={"2xl"}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel fontWeight={"normal"}>Email address</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<MdEmail />} />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => {
                    setEmal(e.target.value);
                  }}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <FormLabel fontWeight={"normal"}>Password</FormLabel>
              {password !== "" ? (
                <Flex
                  pos="absolute"
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
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button
                colorScheme={"blue"}
                variant={"solid"}
                type="submit"
                onClick={handleLogin}
              >
                Sign in
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

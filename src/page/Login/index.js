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
  Center,
  Text,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Layout from "../../layout";

export default function SplitScreen() {
  return (
    <Layout>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
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
              <Button colorScheme={"blue"} variant={"solid"}>
                Sign in
              </Button>
              <Button
                w={"full"}
                maxW={"md"}
                colorScheme={"facebook"}
                leftIcon={<FaFacebook />}
              >
                <Center>
                  <Text>Continue with Facebook</Text>
                </Center>
              </Button>

              <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />} colorScheme={"blue"}>
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src="/cau-vang-ba-na-hills.jpg"
          />
        </Flex>
      </Stack>
    </Layout>
  );
}

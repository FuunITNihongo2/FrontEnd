import {
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { invite } from "../../api";
import { useToast } from "@chakra-ui/react";

export default function InviteUser() {
  const toast = useToast();

  const handleInvite = async (values) => {
    try {
      await invite(values).then((res) => {
        toast({
          position: "top-right",
          title: "Invite user",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
    },
    onSubmit: (values) => {
      handleInvite(values);
    },
  });
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          ユーザーを招待
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("gray.800", "gray.400")}
        >
          リセット リンクが記載されたメールが届きます
        </Text>

        <form onSubmit={formik.handleSubmit}>
          <Input
            fullWidth
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="user@gmail.com"
            mb={5}
          />
          <Input
            fullWidth
            id="name"
            name="name"
            type="name"
            placeholder="Nguyen Van A"
            value={formik.values.name}
            onChange={formik.handleChange}
            mb={5}
          />
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Stack>
    </Flex>
  );
}

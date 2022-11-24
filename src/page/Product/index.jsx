import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  Input,
  useDisclosure,
  FormControl,
  FormLabel,
  Image
} from "@chakra-ui/react";
import React from "react";
import CardProduct from "../../components/CardProduct";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";

export default function Product() {
   const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };
  return (
    <Box bg="rgba(0,0,0,0.05)" p={5} borderRadius={8}>
      <Flex flexDirection={"row"} justifyContent={"space-between"} px={10}>
        <Text py={3} fontSize="4xl" fontWeight={700}>
          ブースの製品リスト
        </Text>
        <Flex>
          <Input
            placeholder="Search"
            size="md"
            mt={5}
            maxWidth={"300px"}
            mr={5}
            borderColor={"blue.500"}
          />
          <Button
            colorScheme="teal"
            size="md"
            mt={5}
            variant={"solid"}
            width={"200px"}
          >
            製品を検索
          </Button>
          <Button
            colorScheme="teal"
            onClick={onOpen}
            size="md"
            mt={5}
            variant={"solid"}
            width={"200px"}
            marginLeft={5}
          >
            製品情報を編集
          </Button>
        </Flex>
      </Flex>
      <Grid templateColumns="repeat(4, 2fr)" gap={6} px={10} py={3}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Grid>
      <Flex alignItems={"center"} justifyContent={"center"} mt={5}>
        <Button colorScheme="teal" variant="solid" size="lg">
          もっと見る
        </Button>
      </Flex>

      <Modal
        initialFocusRef={initialRef}
        isCentered={true}
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> 製品情報を編集</ModalHeader>
          <ModalBody >
            <Flex flexDirection={"row"} justifyContent={"space-between"}>
              <Image
                boxSize="170px"
                objectFit="cover"
                src="/slide/mon9.jpg"
                alt="food"
              />
              <Flex display={"block"}>
                <Flex>
                  <FormControl ml={5} width={"45%"}>
                    <FormLabel>名前</FormLabel>
                    <Input ref={initialRef} placeholder="名前"/>
                  </FormControl>
                  <FormControl ml={5} width={"45%"}>
                    <FormLabel> 価格 </FormLabel>
                    <Input placeholder="価格" />
                  </FormControl>
                </Flex>

                <FormControl ml={5} mt={5} width={"95%"}>
                  <FormLabel> 紹介 </FormLabel>
                  <Input placeholder="紹介" />
                </FormControl>
              </Flex>
            </Flex>
            <Flex>
              <Input
                type={"file"}
                size="xs"
                display={"none"}
                ref={inputRef}
              ></Input>
              <Button colorScheme="teal" onClick={handleClick} size="xs" width={170} mt={3}>
                写真をアップロード
              </Button>
            </Flex>
          </ModalBody>
          <ModalFooter pt={-6}>
            <Button colorScheme="teal" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

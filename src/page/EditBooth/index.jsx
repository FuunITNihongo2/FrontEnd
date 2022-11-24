import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Image,
  Input,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus, AiFillCheckCircle } from "react-icons/ai";

export default function EditBooth() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const inputRef = React.useRef();
  const [total, setTotal] = useState(0);
  return (
    <>
      <Button
        colorScheme="teal"
        onClick={onOpen}
        size="md"
        variant={"solid"}
        width={"200px"}
      >
        ブース情報の編集
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size="2xl"
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              ブース情報の編集
            </AlertDialogHeader>

            <AlertDialogBody>
              <Flex w="100%">
                <Box flex={5.5} p={2}>
                  <Image
                    src="/slide/du-lich-ba-na-hill-48.jpg"
                    alt="booth-image"
                    w="100%"
                    h="250px"
                    objectFit={"cover"}
                  />
                  <Center>
                    <Input
                      type={"file"}
                      size="xs"
                      display={"none"}
                      ref={inputRef}
                    />
                    <Button
                      colorScheme="teal"
                      onClick={() => {
                        inputRef.current.click();
                      }}
                      size="xs"
                      mt={3}
                    >
                      写真をアップロード
                    </Button>
                  </Center>
                </Box>
                <Box flex={4.5} p={2}>
                  <FormControl w="100%">
                    <FormLabel>ブースオーナー</FormLabel>
                    <Input type="text" placeholder="ブースオーナー" />
                  </FormControl>
                  <FormControl w="100%" mt={3}>
                    <FormLabel>ブースの場所</FormLabel>
                    <Input type="text" placeholder="ブースの場所" />
                  </FormControl>
                  <Flex alignItems={"center"} mt={3} userSelect="none">
                    <Text mr={3}>注文合計: </Text>
                    <IconButton
                      icon={<AiOutlineMinus />}
                      size="xs"
                      mr={3}
                      onClick={() => {
                        if (total > 0) setTotal((prevstate) => prevstate - 1);
                      }}
                    />
                    <Input
                      value={total}
                      textAlign="center"
                      type="number"
                      size="xs"
                      w="25%"
                      onChange={(e) => {
                        setTotal(Number(e.target.value));
                      }}
                    />
                    <IconButton
                      icon={<GrAdd />}
                      size="xs"
                      ml={3}
                      onClick={() => {
                        setTotal((prevstate) => prevstate + 1);
                      }}
                    />
                  </Flex>
                  <Flex alignItems="center" mt={3}>
                    <Text mr={3}>状態:</Text>
                    <Select size="xs" w="50%">
                      <option value="active">アクティブ</option>
                      <option value="inactive">非活性</option>
                    </Select>
                  </Flex>
                </Box>
              </Flex>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose} colorScheme="teal">
                Save
              </Button>
              <Button ref={cancelRef} onClick={onClose} ml={3}>
                Cancel
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

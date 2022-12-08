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
  Image,
  Input,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useCallback } from "react";
import { editBooth } from "../../api";

export default function EditBooth(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const inputRef = React.useRef();
  const [name, setName] = useState(props.booth.name);
  const [address, setAddress] = useState(props.booth.address);
  const [active, setActive] = useState(props.booth.active);
  const [img, setImg] = useState("");
  const [imgPrev, setImgPrev] = useState(props.booth.img);
  const handleEdit = async () => {
    const formdata = new FormData();
    formdata.append("_method", "PUT");
    formdata.append("name", name);
    formdata.append("address", address);
    formdata.append("active_state", active);
    formdata.append("image", img);
    try {
      await editBooth(
        JSON.parse(localStorage.getItem("user")).booth,
        formdata
      ).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handlecreateBase64 = useCallback(async (e) => {
    const file = e.target.files[0];
    setImg(file);
    const base64 = await convertToBase64(file);
    setImgPrev(base64);
    e.target.value = "";
  }, []);
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (!file) {
        alert("Please select an image");
      } else {
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
      }
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
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
                    src={imgPrev}
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
                      onChange={handlecreateBase64}
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
                    <FormLabel>ブース名</FormLabel>
                    <Input
                      type="text"
                      placeholder="ブース名"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>

                  <FormControl w="100%" mt={3}>
                    <FormLabel>ブースの場所</FormLabel>
                    <Input
                      type="text"
                      placeholder="ブースの場所"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </FormControl>

                  <Flex alignItems="center" mt={3}>
                    <Text mr={3}>状態:</Text>
                    <Select
                      size="xs"
                      w="50%"
                      defaultValue={active === 1 ? "active" : "inactive"}
                      onChange={(e) => {
                        if (e.target.value === "active") setActive(1);
                        else setActive(0);
                      }}
                    >
                      <option value="active">アクティブ</option>
                      <option value="inactive">非活性</option>
                    </Select>
                  </Flex>
                </Box>
              </Flex>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={handleEdit} colorScheme="teal">
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

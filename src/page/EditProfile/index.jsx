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
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useCallback, useEffect } from "react";

export default function EditProfile(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const cancelRef = React.useRef();
  const inputRef = React.useRef();
  const user = JSON.parse(localStorage.getItem("user"));
  const [fullname, setFullName] = useState(user.fullname);
  const [nickname, setNickName] = useState(user.nickname);
  const [phone, setPhone] = useState(user.phone_number);
  const [img, setImg] = useState("");
  const [imgPrev, setImgPrev] = useState(user.avatar.link);
  const handleEdit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("_method", "PUT");
    formdata.append("fullname", fullname);
    formdata.append("nickname", nickname);
    formdata.append("phone_number", phone);
    formdata.append("avatar", img);
    try {
      await axios
        .post("https://backend-et52mqssfq-as.a.run.app/api/profile", formdata, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          const new_user = {
            fullname: res.data.data.fullname,
            nickname: res.data.data.nickname,
            booth: user.booth,
            id: user.id,
            phone_number: res.data.data.phone_number,
            role: user.role,
            token: user.token,
            avatar: {
              id: res.data.data.images[0].id,
              name: res.data.data.images[0].name,
              link: res.data.data.images[0].link,
            },
          };
          localStorage.setItem("user", JSON.stringify(new_user));
          props.updateProfile(new_user);
        });
    } catch (error) {
      console.log(error);
    }
    toast({
      title: "Successfully!",
      description: "プロフィールが正常に編集されました.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
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
        size="lg"
        variant={"solid"}
        mt={16}
      >
        プロファイル編集
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size="2xl"
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <form onSubmit={handleEdit}>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                ブース情報の編集
              </AlertDialogHeader>

              <AlertDialogBody>
                <Flex w="100%">
                  <Box flex={5.5} p={2}>
                    <Image
                      src={imgPrev}
                      alt="user-image"
                      w="100%"
                      h="300px"
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
                      <FormLabel>フルネーム</FormLabel>
                      <Input
                        type="text"
                        placeholder="フルネーム"
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormControl>

                    <FormControl w="100%" mt={3}>
                      <FormLabel>ニックネーム</FormLabel>
                      <Input
                        type="text"
                        placeholder="ブースの場所"
                        value={nickname}
                        onChange={(e) => setNickName(e.target.value)}
                      />
                    </FormControl>

                    <FormControl w="100%" mt={3}>
                      <FormLabel>電話番号</FormLabel>
                      <Input
                        type="text"
                        placeholder="電話番号"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                </Flex>
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button
                  ref={cancelRef}
                  onClick={onClose}
                  colorScheme="teal"
                  type="submit"
                >
                  Save
                </Button>
                <Button ref={cancelRef} onClick={onClose} ml={3}>
                  Cancel
                </Button>
              </AlertDialogFooter>
            </form>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

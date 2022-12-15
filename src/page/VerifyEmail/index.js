import { Box, Center, Flex, Heading, Spinner } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function VerifyEmail() {
  const params = useParams();
  const [verify, setVerify] = useState("Verifying Email...");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post(
        "https://backend-et52mqssfq-as.a.run.app/api/accepted",
        {
          token: params.token,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setVerify("Page redirecting...");
        navigate("/login");
      });
  }, []);
  return (
    <Flex w="100%" h="100vh" align="center" justifyContent="center">
      <Box>
        <Heading>{verify}</Heading>
        <Center mt={5}>
          <Spinner size="lg" />
        </Center>
      </Box>
    </Flex>
  );
}

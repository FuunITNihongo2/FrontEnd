import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function CardItem() {
  
  const navigate = useNavigate();
   const navigateBooth = () => {
    navigate('/booth-details');
  };

    return (
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="/slide/hinh4.jpg"
          alt="Caffe Latte"
        />

        <Stack bg="white">
          <CardBody>
            <Heading size="md">ブース名</Heading>

            <Text py="2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ornare, dolor ut suscipit maximus, enim ipsum vulputate turpis, eu
              convallis mauris quam sit amet nunc. Nunc dictum porta nulla,
              accumsan tincidunt dui pretium a. Sed consequat neque enim, vel
              tempus augue lobortis et.
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue" onClick={navigateBooth}>
              見る
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    );
}

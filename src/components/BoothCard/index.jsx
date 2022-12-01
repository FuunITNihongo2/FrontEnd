import { Box, Center, Image, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BoothCard(props) {
  const [style1, setStyle1] = useState(1);
  const [style2, setStyle2] = useState(0);
  const navigate = useNavigate();
  const Navigate = () => {
    navigate(`/booth-details/${props.data.id}`);
  };
  return (
    <Center key={props.data.id}>
      <Box
        overflow={"hidden"}
        onMouseEnter={() => {
          setStyle1(0.8);
          setStyle2(1);
        }}
        onMouseLeave={() => {
          setStyle1(1);
          setStyle2(0);
        }}
      >
        <Box
          w={"600px"}
          h="350px"
          rounded={"md"}
          cursor="pointer"
          opacity={style1}
        >
          <Image
            src={props.data.img}
            layout={"fill"}
            w="100%"
            h="100%"
            objectFit="cover"
            rounded={"md"}
          />
          <Heading color="white" pos="relative" bottom="350px" left="20px">
            {props.data.name}
          </Heading>
        </Box>
        <Button
          variant="solid"
          colorScheme="blue"
          zIndex={10}
          opacity={style2}
          left="500px"
          bottom="60px"
          pos={"relative"}
          onClick={Navigate}
        >
          見る
        </Button>
      </Box>
    </Center>
  );
}

import {
  Center, HStack, Image, Flex, Radio, RadioGroup, Link
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const SliderShow = (props) => {
    const [id, setId] = useState(0);
    console.log(props.data)
    function autoCount() {
        if(id>=8) {
            setId(0)
        }
        else {
            setId(id + 1)
        }
    }
    function handleClickRight() {
        if(id<8){
            setId(id+1)
        }
        else{
            setId(0)
        }
    }
    function handleClickLeft() {
        if(id!==0){
            setId(id-1)
        }
        else {
            setId(8)
        }
    }
    useEffect(
        () => {
            let time = setInterval(autoCount, 5000)
            return () => clearInterval(time)
        },
    );
    return(
        <Center bgColor='#8c7851'>
            <Flex w='900px' h='400px' overflow='hidden'>
                {props.data.map(img=>(
                    <Link>
                     <Image
                    src= {require('../../imgs/'+img.name)}
                    ml = {id===1 ? '-100%'
                                : id===2 ?
                                '-200%': id===3 ? '-300%':
                                id===4 ? '-400%':
                                id===5 ? '-500%':
                                id===6 ? '-600%':
                                id===7 ? '-700%': 
                                id===8 ? '-800%': '0%'}
                    minW='900px'
                    objectFit='cover'
                    h='400px'
                    transition='2s'
                    id={img.id}
                />
                    </Link>
                ))}
            </Flex>
            <RadioGroup mt='328px' pos='absolute' value={id}>
                <HStack>
                    <Radio value={0} onClick={(e)=> {setId(0)}} colorScheme='orange'></Radio>
                    <Radio value={1} onClick={(e)=> {setId(1)}} colorScheme='orange'></Radio>
                    <Radio value={2} onClick={(e)=> {setId(2)}} colorScheme='orange'></Radio>
                    <Radio value={3} onClick={(e)=> {setId(3)}} colorScheme='orange'></Radio>
                    <Radio value={4} onClick={(e)=> {setId(4)}} colorScheme='orange'></Radio>
                    <Radio value={5} onClick={(e)=> {setId(5)}} colorScheme='orange'></Radio>
                    <Radio value={6} onClick={(e)=> {setId(6)}} colorScheme='orange'></Radio>
                    <Radio value={7} onClick={(e)=> {setId(7)}} colorScheme='orange'></Radio>
                    <Radio value={8} onClick={(e)=> {setId(8)}} colorScheme='orange'></Radio>
                </HStack>
            </RadioGroup>
            <HStack spacing={950} pos='absolute' color='white'>
                <IoIosArrowBack
                    onClick={handleClickLeft}
                    cursor='pointer'
                    fontSize='60px'
                />
                <IoIosArrowForward
                    onClick={handleClickRight}
                    cursor='pointer' 
                    fontSize='60px'
                />
            </HStack>
        </Center>
    )
}

export default SliderShow
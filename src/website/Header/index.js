import React from 'react'
import { Box,  Button,  Flex, HStack, Icon, Image, Input, Spacer, Text } from '@chakra-ui/react'
import {BiSearch} from 'react-icons/bi'
import {FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <HStack w='100%' h='60px' bg='#eaddcf' pl='30px' pr='30px'>
          <Flex alignItems='center' h='100%'>
            <Image src={require('../../imgs/shop.png')} w='55px'/>
            <Text ml='10px' color='#716040' fontWeight='bold' fontSize='30px'>販売ブース</Text>
          </Flex>

          <Spacer/>
          <Box color='#716040'>  
           <Input w='450px' h='45px' type='text' fontWeight='bold'  border='4px' borderColor={'#8c7851'} focusBorderColor='#020826' placeholder='検検...'/>
           <Icon as={BiSearch} fontSize='35px' pos='relative' right='40px' top='10px'/>
          </Box>
        
          <Spacer/>
            <Flex alignItems={'center'} color='#716040'>
            <Link to='/login'><Icon as={FaUser} mr='5px' fontSize={'17px'}/></Link>
             <Button variant={'link'} color='#716040' fontSize={'17px'}>
                <Link to='/login'> ログイン </Link>
              </Button>
              <Text fontSize={'17px'} ml='5px' mr='5px' userSelect={'none'}> / </Text>
              <Button variant={'link'} color='#716040' fontSize={'17px'}>
                <Link to='/sign-up'>サインアップ</Link>
              </Button>
            </Flex>
       </HStack>
    </>
  )
}

export default Header

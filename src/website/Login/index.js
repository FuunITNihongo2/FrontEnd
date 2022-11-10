import { Box, Button, Center,  Checkbox,  Flex, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {
  const [typeP,setTypeP]=useState("password");
    const handleToggle=()=>{
        if(typeP==='password'){
          setTypeP('text');
        }
        else{
          setTypeP('password');
        }
      }
  return (
    <Flex w='100%' h='100%' alignItems={'center'}>
         <Box w='50%' h='100vh' bg='white' pt='100px'>
         <Center>
         <Box>
          <Image src={require('../../imgs/shop.png')} w='400px'/>
          <Heading color='#716040' textAlign='center' mt='10px'>販売ブース</Heading>
         </Box>
         </Center>
         </Box>
        
         <Box w='50%' h='100vh' pt='100px'>
             <Center>
                 <Box w='550px' h='500px' bg='#fffffe' borderRadius='8px' boxShadow=' 8px 8px #C0C0C0' color='#716040' pt='25px'>
                 <Center>
                  <Box>
                     <Text mb='20px' textAlign='center' fontWeight='bold' fontSize='40px'>ログイン</Text>
                     
                     <Box mb='20px'>  <Text mb='10px'> メールアドレス</Text>
                     <Input w='400px' type='email' fontWeight='bold'  border='4px' borderColor={'#8c7851'} focusBorderColor='#020826' placeholder='メールアドレスを入力する'/></Box>
                   
                    <Box mb='20px'>
                    <Text mb='10px'> パスワード</Text>
                     <Input w='400px' type={typeP} fontWeight='bold'  border='4px' borderColor={'#8c7851'} focusBorderColor='#020826' placeholder='パスワードを入力する'/>
                    </Box>
                     
                    <Box mb='20px'><Checkbox fontWeight='normal' size='sm' onChange={handleToggle} 
                colorScheme='orange' borderColor={'#716040'} color='#716040'>パスワードを表示</Checkbox></Box>   
                     <Button bg='#8c7851' color={'#fffffe'} _hover={{bg:'#020826'}} w='400px' fontWeight='bold' mb='15px'> ログイン</Button><br/>
                    <Text fontSize='15px' textAlign='center'>アカウントをお持ちでない? <span><Link to='sign-up'><Button   color='#f25042' variant='link' fontSize={'15px'}>サインアップ</Button></Link></span></Text>
                  </Box>
                 </Center>
                    
                 </Box>
             </Center>
         </Box>
    </Flex>
  )
}

export default Login

import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Header from '../Header'
import SliderShow from '../SliderShow'
function Home() {
  const imgs = [{'id':1,'name':'mon1.jpg'},{'id':2,'name':'mon2.jpg'},
                {'id':3,'name':'mon3.jpg'},{'id':4,'name':'mon4.jpg'},
                {'id':5,'name':'mon5.jpg'},{'id':6,'name':'mon6.jpg'},
                {'id':7,'name':'mon7.jpg'},{'id':8,'name':'mon8.jpg'},
                {'id':9,'name':'mon9.jpg'}]
  return (
    <Box w='100%' h='100%'>
      <Header/>
      <SliderShow data={imgs}/>
    </Box>
  )
}

export default Home

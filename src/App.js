import './App.css';
import {Box} from '@chakra-ui/react'
import { Routes, Route} from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Login from './website/Login';
import Home from './website/Home';
function App() {
  return (
    <Box minH={'100vh'} w='100vw' bg='#f9f4ef' >
      <ScrollToTop/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/login" element={<Login/>}/>
        </Routes>
    </Box>
  );
}

export default App;

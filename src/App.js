import './App.css';
import {Box} from '@chakra-ui/react'
import { Routes, Route} from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Login from './page/Login';
import Signup from './page/Signup'
import Home from './page/Home';
import BoothDetail from './page/BoothDetail'
import "swiper/css/bundle";

function App() {
  return (
    <Box minH={'100vh'} w='100vw' bg='#ffffff' >
      <ScrollToTop/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/boothdetail' element={ <BoothDetail/>} />
           <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        </Routes>
    </Box>
  );
}

export default App;

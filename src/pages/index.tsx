import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Heading, Button, Image } from '@chakra-ui/react';
import imgFace from '../../assets/skin-face.jpg';
import imgBody from '../../assets/body.jpg'; 
import imgHair from '../../assets/hair.jpg'; 
import littleBottle from '../../assets/little-bottle.jpg';
import Initial from './Initial/Initial';
import About from './About/About';
import Products from './Products/Products';


const Home = () => {

  return (
    <Box bg='background'>
      <Initial/>
      <About />
      <Products />
    </Box>
  );
}

export default Home;

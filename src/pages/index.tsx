import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Heading, Button, Image } from '@chakra-ui/react';
import imgFace from '../../assets/skin-face.jpg';
import imgBody from '../../assets/body.jpg'; 
import imgHair from '../../assets/hair.jpg'; 
import littleBottle from '../../assets/little-bottle.jpg';

interface HomeProps {
  setBackgroundStyle: (style: { type: string; value: string }) => void;
}

const Home: React.FC<HomeProps> = ({ setBackgroundStyle }) => {
  const [selectedProduct, setSelectedProduct] = useState<'face' | 'body' | 'hair'>('face');

  const products = {
    face: {
      description: 'A highly concentrated regenerating cream with a powerful antioxidant effect. It is rich in vitamins A, C, E.',
      image: littleBottle.src,
      name: 'Moisturizing',
      price: '$150',
      details: 'Skincare Vital C hydrating Repair Creme',
      background: imgFace.src
    },
    body: {
      description: 'An intense body cream that nourishes and revitalizes the skin, giving it a healthy glow.',
      image: littleBottle.src,
      name: 'Nourishing Body Cream',
      price: '$120',
      details: 'Vital nutrients and antioxidants for your body',
      background: imgBody.src
    },
    hair: {
      description: 'A rejuvenating hair mask that restores shine and strength to your hair.',
      image: littleBottle.src,
      name: 'Hair Repair Mask',
      price: '$90',
      details: 'Revitalizing treatment for all hair types',
      background: imgHair.src
    }
  };

  const buttonStyle = {
    width: "140px",
    fontSize: "sm",
    variant: "outline",
    color: "white",
    borderColor: "white",
    mx: "2",
    borderRadius: "16",
    fontWeight: "300",
    _hover: {
      bg: "none",
      borderWidth: "2px",
    }
  };

  useEffect(() => {
    setBackgroundStyle({ type: 'image', value: products[selectedProduct].background });
  }, [selectedProduct, setBackgroundStyle]);

  const handleButtonClick = (product: 'face' | 'body' | 'hair') => {
    setSelectedProduct(product);
  };

  return (
    <Box>
      <Flex position="absolute" py="8" px="10" minWidth="100%" bottom="5%">
        <Flex justifyContent="space-between" w="100%" alignItems="center">
          <Flex direction="column" gap="4">
            <Flex alignContent="start" justifyContent="start" direction="column">
              <Heading fontSize="7xl" color="white" mb="4" fontWeight="300" letterSpacing="0.35rem">Find your</Heading>
              <Heading fontSize="7xl" color="white" mb="4" fontWeight="300" letterSpacing="0.35rem" width="800px">perfect Foundation!</Heading>
            </Flex>
            <Flex mb="4">
              <Button {...buttonStyle} onClick={() => handleButtonClick('face')}>Face</Button>
              <Button {...buttonStyle} onClick={() => handleButtonClick('body')}>Body</Button>
              <Button {...buttonStyle} onClick={() => handleButtonClick('hair')}>Hair</Button>
            </Flex>
            <Flex width="32rem">
              <Text color="white" fontSize="sm" bg="rgba(150, 150, 150, 0.3)" p="3" borderRadius="18" backdropFilter="blur(10px)">
                {products[selectedProduct].description}
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column" minWidth="300px" maxWidth="300px" bg="rgba(150, 150, 150, 0.3)" backdropFilter="blur(10px)" borderRadius="18" py="5" px="8" alignItems="center" gap="3" height="100%">
            <Flex alignContent="center">
              <Image 
                borderRadius="full"
                boxSize="200px"
                objectFit="cover"
                src={products[selectedProduct].image}
              />
            </Flex>
            <Flex direction="column" alignItems="center">
              <Text fontSize="12">{products[selectedProduct].name}</Text>
              <Text fontSize="24" fontWeight="600">{products[selectedProduct].price}</Text>
              <Text fontSize="16" align="center">{products[selectedProduct].details}</Text>
            </Flex>
            <Flex mb="4">
              <Button borderRadius="18" px="8" fontWeight="500">Shop now</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Home;

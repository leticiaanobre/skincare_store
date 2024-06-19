import React from 'react';
import { Box, Flex, Text, Spacer, Container, Heading, Button, Image } from '@chakra-ui/react';
import img from '../../assets/skin-face.jpg';
import littleBottle from '../../assets/little-bottle.jpg';
import Link from "next/link"

const Home: React.FC = () => {

    const buttonStyle = {
        width:"140px",
        fontSize:"sm",
        variant:"outline",
        color:"white",
        borderColor:"white",
        mx:"2",
        borderRadius:"16",
        fontWeight:"300",
        _hover: {
            bg:"none",
            borderWidth:"2px",
        }
    }
    const buttonHeader = {
        color:"white",
        variant:"outline",
        border:"none",
        fontWeight:"300",
        _hover: {
            bg:"none",
            color:"gray.700"
        }
    }
  return (
    <Box 
        bgImage={`url(${img.src})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        minHeight="100vh"
        color="white"
        position="relative"
        bgColor="gray.600"
        >
      <Flex as="header" py="2" px="8" alignItems="center">
        <Text fontSize="xl" fontWeight="300" color="white">SKIN</Text>
        <Spacer />
        <Flex py="1" px="8" bg="rgba(150, 150, 150, 0.3)" borderRadius="12" backdropFilter="blur(10px)">
          <Button {...buttonHeader}>Shop All</Button>
          <Button {...buttonHeader}>
            <Link href="/About" passHref>
              About Us
            </Link>
          </Button>
          <Button {...buttonHeader}>New</Button>
        </Flex>
      </Flex>
      <Flex position="absolute" py="8" px="10" minWidth="100%" mt="9%">
        <Flex justifyContent="space-between" w="100%" alignItems="center" >
            <Flex direction="column" gap="4">
                <Flex alignContent="start" justifyContent="start" direction="column">
                    <Heading fontSize="7xl" color="white" mb="4" fontWeight="300" letterSpacing="0.35rem" >Find your</Heading>
                    <Heading fontSize="7xl" color="white" mb="4" fontWeight="300" letterSpacing="0.35rem" width="800px">perfect Foundation!</Heading>
                </Flex>
                <Flex mb="4">
                    <Button {...buttonStyle}>Face</Button>
                    <Button {...buttonStyle}>Body</Button>
                    <Button {...buttonStyle}>Hair</Button>
                </Flex>
                <Flex width="32rem">
                    <Text color="white" fontSize="sm" bg="rgba(150, 150, 150, 0.3)" p="3" borderRadius="18" backdropFilter="blur(10px)">
                    A highly concentrated regenerating cream with a powerful antioxidant effect. It is rich in vitamins A, C, E.
                    </Text>
                </Flex>
            </Flex>
            <Flex direction="column" minWidth="300px" maxWidth="300px" bg="rgba(150, 150, 150, 0.3)" backdropFilter="blur(10px)" borderRadius="18" py="5" px="8" alignItems="center" gap="3" height="100%">
                <Flex alignContent="center">
                    <Image 
                        borderRadius="full"
                        boxSize="200px"
                        objectFit="cover"
                        src={littleBottle.src}/>
                </Flex>
                <Flex direction="column" alignItems="center">
                    <Text fontSize="12">Moisturizing</Text>
                    <Text fontSize="24" fontWeight="600">$150</Text>
                    <Text fontSize="16" align="center">Skincare Vital C hydrating Repair Creme</Text>
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

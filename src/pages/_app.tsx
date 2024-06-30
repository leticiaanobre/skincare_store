import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Box } from '@chakra-ui/react';
import Navbar from "./navbar";
import { useState } from 'react';
import img from '../../assets/skin-face.jpg';

export default function App({ Component, pageProps }: AppProps) {
  const [backgroundImage, setBackgroundImage] = useState(img.src);

  return (
    <ChakraProvider>
      <Box 
        bgImage={`url(${backgroundImage})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        minHeight="100vh"
        color="white"
        position="relative"
        bgColor="gray.600"
      >
        <Navbar />
        <Component {...pageProps} setBackgroundImage={setBackgroundImage} />
      </Box>
    </ChakraProvider>
  );
}

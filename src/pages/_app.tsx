import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Box } from '@chakra-ui/react';
import Navbar from "./navbar";
import { useState } from 'react';
import img from '../../assets/skin-face.jpg';

// Define a type for the custom props
interface CustomAppProps extends AppProps {
  setBackgroundStyle: (style: { type: string; value: string }) => void;
}

export default function App({ Component, pageProps }: AppProps) {
  const [backgroundStyle, setBackgroundStyle] = useState({
    type: 'image',
    value: img.src,
  });

  return (
    <ChakraProvider>
      <Box 
        bgImage={backgroundStyle.type === 'image' ? `url(${backgroundStyle.value})` : 'none'}
        bgColor={backgroundStyle.type === 'color' ? backgroundStyle.value : 'gray.600'}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        minHeight="100vh"
        color="white"
        position="relative"
      >
        <Navbar setBackgroundStyle={setBackgroundStyle} />
        <Component {...pageProps} setBackgroundStyle={setBackgroundStyle} />
      </Box>
    </ChakraProvider>
  );
}

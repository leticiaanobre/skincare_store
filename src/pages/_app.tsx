import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box
        bg="gray.600"
        color="white"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
      >
        {/* <Navbar /> */}
        <Box as="main" flex="1">
          <Component {...pageProps} />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

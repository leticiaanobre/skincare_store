import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
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

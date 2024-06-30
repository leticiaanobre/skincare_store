import { Box, Flex, Text, Spacer, Container, Heading, Button, Image, Menu, MenuButton, MenuList, MenuItem, background } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from "next/link"

export default function Navbar() {
    const router = useRouter();
    const buttonHeader = {
        color:"white",
        variant:"ghost",
        fontWeight:"300",
        _hover: {
            bg:"none",
            color:"gray.700"
        },
    }
    return(
      <Flex as="header" py="2" px="8" alignItems="center" bg='none' position='relative' id="home">
        <Text fontSize="xl" fontWeight="300" color="white">SKIN</Text>
        <Spacer />
        <Flex py="1" px="8" bg="rgba(150, 150, 150, 0.3)" borderRadius="12" backdropFilter="blur(10px)" >
          <Link href="/" passHref >
            <Button {...buttonHeader} isActive={router.pathname === '/'}>
              Home
            </Button>
          </Link>
          <Button {...buttonHeader}>Shop All</Button>
          <Button {...buttonHeader}>
            <Link href="/About" passHref>
              About Us
            </Link>
          </Button>
          <Button {...buttonHeader}>New</Button>
          <Menu isLazy>
            <MenuButton {...buttonHeader} px='16px'>More</MenuButton>
            <MenuList bg="rgba(150, 150, 150, 0.3)" borderRadius="12" border='none' backdropFilter="blur(10px)">
              {/* MenuItems are not rendered unless Menu is open */}
              <MenuItem bg='none'>New Window</MenuItem>
              <MenuItem bg='none'>Open Closed Tab</MenuItem>
              <MenuItem bg='none'>Open File</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    )
}
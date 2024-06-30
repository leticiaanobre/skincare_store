import { Flex, Text, Spacer, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from "next/link";

interface NavbarProps {
  setBackgroundStyle: (style: { type: string; value: string }) => void;
}

export default function Navbar({ setBackgroundStyle }: NavbarProps) {
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

    const handleBackgroundChange = (type: string, value: string) => {
        setBackgroundStyle({ type, value });
    }

    return(
      <Flex as="header" py="2" px="8" alignItems="center" bg='none' position='relative' id="home">
        <Text fontSize="xl" fontWeight="300" color="white">SKIN</Text>
        <Spacer />
        <Flex py="1" px="8" bg="rgba(150, 150, 150, 0.3)" borderRadius="12" backdropFilter="blur(10px)" >
          <Link href="/" passHref>
            <Button {...buttonHeader} isActive={router.pathname === '/'} >
              Home
            </Button>
          </Link>
          <Button {...buttonHeader} >Shop All</Button>
          <Link href="/About" passHref>
            <Button {...buttonHeader} >
              About Us
            </Button>
          </Link>
          <Button {...buttonHeader}>New</Button>
          <Menu isLazy>
            <MenuButton {...buttonHeader} px='16px'>More</MenuButton>
            <MenuList bg="rgba(150, 150, 150, 0.3)" borderRadius="12" border='none' backdropFilter="blur(10px)">
              <MenuItem bg='none' onClick={() => handleBackgroundChange('color', 'yellow.500')}>New Window</MenuItem>
              <MenuItem bg='none' onClick={() => handleBackgroundChange('color', 'pink.500')}>Open Closed Tab</MenuItem>
              <MenuItem bg='none' onClick={() => handleBackgroundChange('color', 'red.500')}>Open File</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    )
}

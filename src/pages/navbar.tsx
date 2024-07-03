import { Flex, Text, Spacer, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from "next/link";

interface NavbarProps {
  setBackgroundStyle: (style: { type: string; value: string }) => void;
}

export default function Navbar({ setBackgroundStyle }: NavbarProps) {
  const router = useRouter();
  const buttonHeader = {
    color: "white",
    variant: "ghost",
    fontWeight: "300",
    _hover: {
      bg: "none",
      color: "gray.700"
    },
  };

  const handleBackgroundChange = (type: string, value: string) => {
    setBackgroundStyle({ type, value });
  }

  return (
    <Flex p="2" w='full' height="60px">
      <Flex as="header" px="8" alignItems="center" w='full' bg="var(--color-secondary)" borderRadius='12'>
        <Text fontSize="xl" fontWeight="300" color="var(--color-primary)">SKIN</Text>
        <Spacer />
        <Flex py="1" px="8">
          <Link href="/" passHref>
            <Button {...buttonHeader} color="var(--color-primary)" isActive={router.pathname === '/'}>
              Home
            </Button>
          </Link>
          <Button {...buttonHeader} color="var(--color-primary)">Shop All</Button>
          <Link href="/About" passHref>
            <Button {...buttonHeader} color="var(--color-primary)">
              About Us
            </Button>
          </Link>
          <Menu isLazy>
            <MenuButton {...buttonHeader} px='16px' color="var(--color-primary)">More</MenuButton>
            <MenuList bg="rgba(150, 150, 150, 0.3)" borderRadius="12" border='none' backdropFilter="blur(10px)">
              <MenuItem bg='none' onClick={() => handleBackgroundChange('color', 'yellow.500')}>New Window</MenuItem>
              <MenuItem bg='none' onClick={() => handleBackgroundChange('color', 'pink.500')}>Open Closed Tab</MenuItem>
              <MenuItem bg='none' onClick={() => handleBackgroundChange('color', 'red.500')}>Open File</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
}

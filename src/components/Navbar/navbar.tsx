import { Flex, Text, Spacer, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

export default function Navbar() {

  const buttonHeader = {
    color: "white",
    variant: "ghost",
    fontWeight: "300",
    _hover: {
      bg: "none",
      color: "gray.700"
    },
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Flex p="2" w='full' height="60px" position='relative'>
      <Flex as="header" px="8" alignItems="center" w='full' bg="var(--color-secondary)" borderRadius='12'>
        <Text fontSize="xl" fontWeight="300" color="var(--color-navbarText)">SKIN</Text>
        <Spacer />
        <Flex py="1" px="8">
          <Button {...buttonHeader} color="var(--color-navbarText)" onClick={() => scrollToSection('home')}>
            Home
          </Button>
          <Button {...buttonHeader} color="var(--color-navbarText)" onClick={() => scrollToSection('about')}>
            About Us
          </Button>
          <Button {...buttonHeader} color="var(--color-navbarText)">Shop All</Button>
          <Menu isLazy>
            <MenuButton {...buttonHeader} px='16px' color="var(--color-navbarText)">More</MenuButton>
            <MenuList bg="rgba(150, 150, 150, 0.3)" borderRadius="12" border='none' backdropFilter="blur(10px)">
              <MenuItem bg='none'>New Window</MenuItem>
              <MenuItem bg='none'>Open Closed Tab</MenuItem>
              <MenuItem bg='none'>Open File</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
}

import { useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface AboutProps {
  setBackgroundStyle: (style: { type: string; value: string }) => void;
}

export default function About({ setBackgroundStyle }: AboutProps) {
  useEffect(() => {
    setBackgroundStyle({ type: 'color', value: 'orange.100' });
  }, [setBackgroundStyle]);

  return (
    <Box >
      <Flex direction="column" alignItems="center">
        <Text as="h1" fontSize="4xl" fontWeight="bold" color="black">
          About Us
        </Text>
      </Flex>
    </Box>
  );
}

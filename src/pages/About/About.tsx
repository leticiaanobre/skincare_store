import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import img from '../../../assets/model2.jpg';

export default function About() {
  return (
    <Box height="100vh" id="about" overflowY="auto" display="flex" alignItems="center" justifyContent="center" pt='0' bgColor='background'>
      <Flex direction="row" alignItems="center" justifyContent='space-around' p='3' height="100%" w='full'>
        <Box
          position="relative"
          width="30%"
          height="90%"
          color="white"
          alignItems='center'
          p="3"
          borderRadius="18"
        >
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: '18px' }}
            alt="Model Image"
          />
        </Box>
        <Flex direction='column' p='6' w='40%' align='center' gap='3'>     
          <Text as="h1" fontSize="4xl" fontWeight="semibold" color="var(--color-primary)">
            ABOUT
          </Text>
          <Text color="var(--color-primary)">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus voluptates similique, voluptatibus error fuga vero excepturi quasi exercitationem porro obcaecati, fugiat corporis.
          </Text>
          <Text color="var(--color-primary)">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eius quidem magni soluta recusandae eaque, pariatur, provident esse tempora blanditiis dolor beatae fugiat quisquam labore quaerat repudiandae atque? Modi aut ea mollitia consequatur dolore repudiandae maiores architecto laboriosam? Accusamus minus soluta, placeat, aut tenetur laudantium eligendi iure magnam ex eum ratione sunt doloribus temporibus earum?
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

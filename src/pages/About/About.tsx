import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import img from '../../../assets/model2.jpg';

export default function About() {
  return (
    <Box height="100vh" id="about" overflowY="auto" display="flex" alignItems="center" justifyContent="center" p={12} bgColor='background'>
      <Flex direction="row" alignItems="center" justifyContent='space-between' height="100%" w='full' bgColor="var(--color-tertiary)" borderRadius={12}>
        <Box
          position="relative"
          width="40%"
          height="100%"
          color="white"
          alignItems='center'
          p="3"
          // borderRadius="18"
        >
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            style={{ borderTopLeftRadius: '18px', borderBottomLeftRadius: '18px' }}
            alt="Model Image"
          />
        </Box>
        <Flex direction='column' p={12} w='50%' align='center' gap={5} h='90%' justifyContent='center' alignItems='start'>     
          <Heading size="2xl"color="var(--color-primary)">
            About
          </Heading>
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

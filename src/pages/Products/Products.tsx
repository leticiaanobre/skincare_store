import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from 'next/image';
import img from '../../../assets/model2.jpg';

export default function Products() {
    return (
        <Box height="100vh" id="about" overflowY="auto" display="flex" alignItems="center" justifyContent="center" p={12}>
            <Flex direction="column" alignItems="center" justifyContent="space-between" height="100%" w="full" bgColor="tertiary" borderRadius={12}>
                <Flex direction="row" alignItems="center" justifyContent="space-between" p={10} w='full'>
                    <Heading size='2xl' color="primary">Title about the page</Heading>
                    <Text color='primary' fontSize='lg'>Title about the page</Text>
                </Flex>
                <Flex direction='row' justifyContent='space-between' h='full' alignItems='center'>
                    <Flex direction='column' alignItems='center' h='100%' gap={5} w='20rem' pb={4}>
                        <Box
                            position="relative"
                            width="100%"
                            height="70%"
                            color="white"
                            alignItems='center'
                            p="3"
                        >
                            <Image
                                src={img}
                                layout="fill"
                                objectFit="cover"
                                style={{ borderRadius: '18px' }}
                                alt="Model Image"
                            />
                        </Box>
                        <Flex direction='column' justifyContent='space-between' alignItems='flex-start' w='full' gap={4}>
                            <Heading size='md' color='primary'>PEPITYDES</Heading>
                            <Text color='primary'>Your skin more moisturizer than ever</Text>
                            <Flex direction='row' alignItems='center' justifyContent='space-between' w='full'>
                                <Button variant='outline' borderColor='primary' color='primary' size='sm'>Buy product</Button>
                                <Text color='primary' fontWeight='bold'> $24.00</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
}

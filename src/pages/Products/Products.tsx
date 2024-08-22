import { Box, Button, Flex, Heading, Text, IconButton, AspectRatio } from "@chakra-ui/react";
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { css } from "@emotion/react";
import img1 from '../../../assets/cocooil.jpg';
import img2 from '../../../assets/dark-serum.jpg';
import img3 from '../../../assets/moisturizer.jpg';
import img4 from '../../../assets/refresh-cream.jpg';
import img5 from '../../../assets/serum-application.jpg';

export default function Products() {
    const scrollLeft = () => {
        const carousel = document.getElementById('carousel');
        if (carousel) {
            carousel.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        const carousel = document.getElementById('carousel');
        if (carousel) {
            carousel.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };
    const products = [
        {
            id: 1,
            name: 'Tônico Facial',
            description: 'Limpeza profunda e tonificação',
            price: '$24.00',
            image: img1,
        },
        {
            id: 2,
            name: 'Sérum Anti-Idade',
            description: 'Reduza rugas e linhas finas',
            price: '$45.00',
            image: img2,
        },
        {
            id: 3,
            name: 'Creme Facial',
            description: 'Nutrição intensa para sua pele',
            price: '$30.00',
            image: img3,
        },
        {
            id: 4,
            name: 'Máscara de Argila',
            description: 'Purificação e renovação celular',
            price: '$18.00',
            image: img4,
        },
        {
            id: 5,
            name: 'Peptídeos',
            description: 'LSua pele mais hidratada e fortificada',
            price: '$22.00',
            image: img5,
        },
    ];

    return (
        <Box minHeight="100vh" id="about" overflowY="auto" display="flex" alignItems="center" justifyContent="center" p={12}>
            <Flex direction="column" alignItems="center" height="100%" w="full" bgColor="tertiary" borderRadius={12}>
                <Flex direction="row" alignItems="center" justifyContent="space-between" px={10} py={8} w='full'>
                    <Heading size='2xl' color="primary">Title about the page</Heading>
                    <Text color='primary' fontSize='lg'>Title about the page</Text>
                </Flex>
                
                {/* Carrossel */}
                <Box position="relative" width="full" overflow="hidden" px={10} py={6} pt={0} h='full'>
                    <IconButton
                        icon={<ChevronLeftIcon />}
                        aria-label="Scroll Left"
                        position="absolute"
                        left="0"
                        top="50%"
                        transform="translateY(-50%)"
                        zIndex={1}
                        variant="ghost"
                        onClick={scrollLeft}
                        ml={2}
                        borderRadius={40}
                    />
                    <IconButton
                        icon={<ChevronRightIcon />}
                        aria-label="Scroll Right"
                        position="absolute"
                        right="0"
                        top="50%"
                        transform="translateY(-50%)"
                        zIndex={1}
                        variant="ghost"
                        onClick={scrollRight}
                        borderRadius={40}
                    />
                    <Flex
                        id="carousel"
                        direction="row"
                        overflowX="auto"
                        scrollBehavior="smooth"
                        gap={6}
                        p={4}
                        width="full"
                        whiteSpace="nowrap"
                        h='full'
                        css={css({
                            '&::-webkit-scrollbar': {
                                height: '8px', 
                            },
                            '&::-webkit-scrollbar-track': {
                                background: '#f1f1f1',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: '#888',
                                borderRadius: '24px',
                            },
                            '&::-webkit-scrollbar-thumb:hover': {
                                background: '#555',
                            },
                        })}
                    >
                        {/* Mapeando produtos para criar os itens do carrossel */}
                        {products.map((product) => (
                            <Flex
                                key={product.id}
                                direction="column"
                                alignItems="center"
                                h="100%"
                                gap={5}
                                w="20rem"
                                pb={4}
                                flex="0 0 auto" // Não permitir que o item encolha ou cresça fora do seu espaço
                                borderRadius="12px"
                            >
                                {/* Usando AspectRatio para garantir proporção quadrada */}
                                <AspectRatio ratio={1} width="100%">
                                    <Box position="relative" color="white" alignItems="center" p="3">
                                        <Image
                                            src={product.image}
                                            layout="fill"
                                            objectFit="cover"
                                            style={{ borderRadius: '12px' }}
                                            alt={product.name}
                                        />
                                    </Box>
                                </AspectRatio>
                                <Flex direction="column" justifyContent="space-between" alignItems="flex-start" w="full" gap={4} p={4}>
                                    <Heading size="md" color="primary">{product.name}</Heading>
                                    <Text color="primary">{product.description}</Text>
                                    <Flex direction="row" alignItems="center" justifyContent="space-between" w="full">
                                        <Button variant="outline" borderColor="primary" color="primary" size="sm">Buy product</Button>
                                        <Text color="primary" fontWeight="bold">{product.price}</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}

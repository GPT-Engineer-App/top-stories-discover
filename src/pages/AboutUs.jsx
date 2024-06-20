import React from 'react';
import { Box, Text, Image, VStack, Heading } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box p={4} display="flex" flexDirection="column" alignItems="center">
      <VStack spacing={4} width="100%" maxW="container.md">
        <Heading as="h1" size="xl">About Us</Heading>
        <Image 
          borderRadius="full"
          boxSize="150px"
          src="https://placekitten.com/300/300"
          alt="Developer who likes cats"
        />
        <Text fontSize="lg" textAlign="center">
          Hello! I'm a passionate developer who loves creating web applications. In my free time, I enjoy spending time with my cats. They are a constant source of inspiration and joy in my life.
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutUs;
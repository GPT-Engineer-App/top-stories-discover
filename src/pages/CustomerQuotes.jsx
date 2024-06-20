import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const CustomerQuotes = () => {
  return (
    <Box p={4} display="flex" flexDirection="column" alignItems="center">
      <VStack spacing={4} width="100%" maxW="container.md">
        <Heading as="h1" size="xl">Customer Quotes</Heading>
        <Text fontSize="lg" textAlign="center">
          Placeholder for customer quotes. This section will feature testimonials from our valued customers.
        </Text>
      </VStack>
    </Box>
  );
};

export default CustomerQuotes;
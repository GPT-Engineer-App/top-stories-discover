import React from 'react';
import { Box, Heading, Text, VStack, SimpleGrid, Button } from '@chakra-ui/react';

const Pricing = () => {
  const tiers = [
    {
      title: 'Basic',
      price: '$10/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Standard',
      price: '$20/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      title: 'Premium',
      price: '$30/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    },
  ];

  return (
    <Box p={4} display="flex" flexDirection="column" alignItems="center">
      <Heading as="h1" size="xl" mb={6}>Pricing</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} width="100%" maxW="container.md">
        {tiers.map((tier, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h2" size="lg" mb={4}>{tier.title}</Heading>
            <Text fontSize="2xl" mb={4}>{tier.price}</Text>
            <VStack spacing={3} alignItems="flex-start">
              {tier.features.map((feature, idx) => (
                <Text key={idx}>{feature}</Text>
              ))}
            </VStack>
            <Button mt={6} colorScheme="teal">Choose {tier.title}</Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Pricing;
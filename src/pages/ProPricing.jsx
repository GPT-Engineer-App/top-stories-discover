import React from 'react';
import { Box, Heading, Text, VStack, SimpleGrid, Button } from '@chakra-ui/react';

const ProPricing = () => {
  const tiers = [
    {
      title: 'Pro Basic',
      price: '$50/month',
      features: ['Pro Feature 1', 'Pro Feature 2', 'Pro Feature 3'],
    },
    {
      title: 'Pro Standard',
      price: '$100/month',
      features: ['Pro Feature 1', 'Pro Feature 2', 'Pro Feature 3', 'Pro Feature 4'],
    },
    {
      title: 'Pro Premium',
      price: '$150/month',
      features: ['Pro Feature 1', 'Pro Feature 2', 'Pro Feature 3', 'Pro Feature 4', 'Pro Feature 5'],
    },
  ];

  return (
    <Box p={4} display="flex" flexDirection="column" alignItems="center">
      <Heading as="h1" size="xl" mb={6}>Pro Pricing</Heading>
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

export default ProPricing;
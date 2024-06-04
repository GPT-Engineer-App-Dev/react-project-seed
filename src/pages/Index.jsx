import { Box, Container, Flex, Heading, Link, Spacer, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="blue.500" color="white" padding={4}>
        <Heading size="md">MyApp</Heading>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" marginRight={4} color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/about" marginRight={4} color="white">
            About
          </Link>
          <Link as={RouterLink} to="/contact" color="white">
            Contact
          </Link>
        </Flex>
      </Flex>
      <Container centerContent maxW="container.md" height="calc(100vh - 64px)" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Heading>Welcome to MyApp</Heading>
          <Box>Start building your application by editing this page.</Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
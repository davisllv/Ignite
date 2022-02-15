import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Davi da Silva dos Santos</Text>
        <Text color="gray.300" fontSize="small">
          davisllvsnt57@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Davi da Silva dos Santos" />
    </Flex>
  );
}

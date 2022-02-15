import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface IProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: IProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Davi da Silva dos Santos</Text>
          <Text color="gray.300" fontSize="small">
            davisllvsnt57@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Davi da Silva dos Santos" />
    </Flex>
  );
}

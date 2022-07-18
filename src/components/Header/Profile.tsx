import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (    
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jairo Koning</Text>
          <Text color="gray.300" fontSize="small">jairo.koning@gmail.com</Text>            
        </Box>
      )}
      <Avatar size="md" name="Jairo Koning" src="https://github.com/jairokoning.png" />
    </Flex>
  )
}
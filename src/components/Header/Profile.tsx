import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Jairo Koning</Text>
        <Text color="gray.300" fontSize="small">jairo.koning@gmail.com</Text>            
      </Box>
      <Avatar size="md" name="Jairo Koning" src="https://github.com/jairokoning.png" />
    </Flex>
  )
}
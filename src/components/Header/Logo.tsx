import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize="3xl"
      letterSpacing="wide"
      w="64"
      color="pink.500"
    >
      chakra
      <Text
        as="span"
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
        ml="2"
        color="gray.50"
      >
        dashboard
        <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>
    </Text> 
  )
}
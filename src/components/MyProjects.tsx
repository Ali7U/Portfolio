import { Box, Center, Heading,  ListItem, SimpleGrid, UnorderedList } from '@chakra-ui/react'


function MyProjects() {
  return (
    <>
      <Box m={25}>
        
      <Center >
        <Heading size="lg">My Projects:</Heading>
      </Center>
      <Center>
        <UnorderedList>
          <SimpleGrid padding={15} columns={2} spacing={5}>
            <ListItem>Pizza Resturant Full-Stack</ListItem>
            <ListItem>ToDo List</ListItem>
            <ListItem>E-commerance Food</ListItem>
            <ListItem>Shopping Cart Phones</ListItem>
            <ListItem>Coffee App</ListItem>
            <ListItem>Hospital Doctors Appoinmetns</ListItem>
            <ListItem>Weather App</ListItem>
            <ListItem>Meme Generator</ListItem>
            <ListItem>Music Player App</ListItem>
            <ListItem>Quiz App</ListItem>
            <ListItem>Books Store</ListItem>
            <ListItem>Foodera</ListItem>
            <ListItem>Calculatur</ListItem>
            
          </SimpleGrid>
        </UnorderedList>
      </Center>
      </Box>
    </>
  );
}

export default MyProjects

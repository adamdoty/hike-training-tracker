import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
const GoalTracker = () => {
  return (
    <Card align="center" width="400px">
      <CardHeader>
        <Heading size="md">Hiking Goal Title</Heading>
      </CardHeader>
      <CardBody>
        <Text>Hiking Goal Distance</Text>
        <Text>Hiking Goal Challenge Rating</Text>
        <Text>Hiking Goal Time</Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue">Setup Training Plan</Button>
      </CardFooter>
    </Card>
  );
};

export default GoalTracker;

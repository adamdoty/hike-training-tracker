import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

interface Props {
  hike: Hike;
  time: { date: Date; daysLeft: number };
}

interface Hike {
  name: string;
  distance: number;
  difficulty: string;
  location: string;
  climb: number;
}

const GoalTracker = ({ hike, time }: Props) => {
  return (
    <Card align="center" width="400px">
      <CardHeader>
        <Heading size="md">{hike.name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{hike.distance} mi</Text>
        <Text>{hike.difficulty}</Text>
        <Text>{hike.location}</Text>
        <Text>{hike.climb}</Text>
        <Text>
          {time.daysLeft} days until {time.date.toDateString()}
        </Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue">Setup Training Plan</Button>
      </CardFooter>
    </Card>
  );
};

export default GoalTracker;

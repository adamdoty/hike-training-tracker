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
  hasTrainingPlan: boolean;
}

export interface Hike {
  name: string;
  distance: number;
  difficulty: string;
  location: string;
  climb: number;
}

const GoalTracker = ({ hike, time, hasTrainingPlan }: Props) => {
  return (
    <div>
      <Heading fontSize="2xl">Goal Tracker</Heading>
      <Card align="center" width="400px">
        <CardHeader>
          <Heading size="md">{hike.name}</Heading>
        </CardHeader>

        <CardBody>
          <Text>{hike.distance} mi</Text>
          <Text>{hike.difficulty}</Text>
          <Text>{hike.location}</Text>
          <Text>{hike.climb}</Text>
        </CardBody>

        <CardFooter>
          {hasTrainingPlan ? (
            <Text>
              {time.daysLeft} days until {time.date.toDateString()}
            </Text>
          ) : (
            <Button colorScheme="blue">Setup Training Plan</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default GoalTracker;

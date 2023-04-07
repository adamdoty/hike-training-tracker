import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import GoalMetricCard, { Metric } from "./GoalMetricCard";

export interface Hike {
  name: string;
  metrics: Metric[];
  location: string;
}

interface Props {
  goal: Hike;
  hikes: Hike[];
}

const GoalMetricGrid = ({ goal, hikes }: Props) => (
  <SimpleGrid
    spacing={4}
    columns={{
      sm: 1,
      md: 2,
      lg: 4,
    }}
  >
    {goal.metrics.map((metric) => (
      <GoalMetricCard
        key={metric.id}
        metric={metric}
        highestValues={hikes[0].metrics}
      />
    ))}
  </SimpleGrid>
);

export default GoalMetricGrid;

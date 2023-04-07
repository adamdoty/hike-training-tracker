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
  hike: Hike;
}

const GoalMetricGrid = ({ hike }: Props) => (
  <SimpleGrid
    spacing={4}
    columns={{
      sm: 1,
      md: 2,
      lg: 4,
    }}
  >
    {hike.metrics.map((metric) => (
      <GoalMetricCard key={metric.id} metric={metric} />
    ))}
  </SimpleGrid>
);

export default GoalMetricGrid;

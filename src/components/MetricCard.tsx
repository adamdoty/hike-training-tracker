import {
  Card,
  CardBody,
  CardHeader,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";

import { Metric } from "./MetricGrid";

interface Props {
  metric: Metric;
  highestValue: number;
}

const difficultyMap = ["Easy", "Moderate", "Hard", "Very Hard"];

const GoalMetricCard = ({ metric, highestValue }: Props) => {
  const progress = (highestValue / metric.value) * 100;

  return (
    <Card>
      <CardHeader flexDirection="row">
        <HStack>
          <Heading size="md">{metric.name}</Heading>
          <Icon as={metric.icon} />
        </HStack>
      </CardHeader>
      <CardBody display="flex" flexDirection="column" alignItems="center">
        <CircularProgress value={progress} size="80px" thickness="4px">
          <CircularProgressLabel>{progress.toFixed(0)}%</CircularProgressLabel>
        </CircularProgress>
        {metric.name === "Difficulty" ? (
          <Text>
            {difficultyMap[highestValue]} {">"} {difficultyMap[metric.value]}{" "}
            {metric.unit}
          </Text>
        ) : (
          <Text>
            {highestValue} of {metric.value} {metric.unit}
          </Text>
        )}
      </CardBody>
    </Card>
  );
};

export default GoalMetricCard;

import {
  Card,
  CardBody,
  CardHeader,
  CircularProgress,
  HStack,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";

import { Metric } from "../App";

interface Props {
  metric: Metric;
  highestValues: Metric[];
}

const GoalMetricCard = ({ metric, highestValues }: Props) => {
  return (
    <Card>
      <CardHeader flexDirection="row">
        <HStack>
          <Heading size="md">{metric.name}</Heading>
          <Icon as={metric.icon} />
        </HStack>
      </CardHeader>
      <CardBody display="flex" flexDirection="column" alignItems="center">
        <CircularProgress value={59} size="80px" thickness="4px" />
        <Text>
          xx of {metric.value} {metric.unit}
        </Text>
      </CardBody>
    </Card>
  );
};

export default GoalMetricCard;

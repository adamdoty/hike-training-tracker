import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CircularProgress,
  HStack,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface Props {
  metric: Metric;
}

export interface Metric {
  id: number;
  name: string;
  value: string | number;
  icon: IconType;
  unit: string;
}

const GoalMetricCard = ({ metric }: Props) => {
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

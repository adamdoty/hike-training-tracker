import { SimpleGrid } from "@chakra-ui/react";
import { IconType } from "react-icons";

import MetricCard from "./MetricCard";

export interface Hike {
  id: number;
  name: string;
  location: string;
  metrics: Metric[];
}

export interface Metric {
  id: number;
  name: string;
  value: number;
  icon?: IconType;
  unit: string;
}

interface Props {
  goal: Hike;
  hikes: Hike[];
}

const MetricGrid = ({ goal, hikes }: Props) => {
  const hikeMetricsValues = hikes.map((hike) =>
    hike.metrics.map((metric) => metric.value)
  );
  const valuesByMetric = hikeMetricsValues[0].map((metric, index) =>
    hikeMetricsValues.map((hike) => hike[index])
  );
  const highestValues = valuesByMetric.map((metric) => Math.max(...metric));

  return (
    <SimpleGrid
      mb={4}
      spacing={4}
      columns={{
        sm: 1,
        md: 2,
        lg: 4,
      }}
    >
      {goal.metrics.map((metric, index) => (
        <MetricCard
          key={metric.id}
          metric={metric}
          highestValue={highestValues[index]}
        />
      ))}
    </SimpleGrid>
  );
};

export default MetricGrid;

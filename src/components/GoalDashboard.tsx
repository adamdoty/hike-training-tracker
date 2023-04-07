import { useState } from "react";
import { Button, Grid, GridItem, HStack, Heading } from "@chakra-ui/react";

import GoalMetricGrid from "./MetricGrid";

import startingHikes from "../data/startingHikes";
import startingGoalHike from "../data/startingGoalHike";

const GoalDashboard = () => {
  const [goal, setGoal] = useState(startingGoalHike);
  const [hikes, setHikes] = useState(startingHikes);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
      }}
      templateRows={{
        base: `"50px" "1fr"`,
      }}
    >
      <GridItem area="nav">
        {/* <HStack justifyContent="space-between">
          <Text>Goal</Text>
          <Text>|</Text>
          <Text>Hikes</Text>
        </HStack> */}
      </GridItem>
      <GridItem area="main" display="flex" flexDirection="column">
        <HStack mb={2}>
          <Heading>{goal.name}</Heading>
        </HStack>
        <GoalMetricGrid goal={goal} hikes={hikes} />
        <HStack display="flex" justifyContent="center">
          <Button>Log Hike</Button>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default GoalDashboard;

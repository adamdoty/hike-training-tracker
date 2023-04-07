import { useState } from "react";
import { Button, Grid, GridItem, Text } from "@chakra-ui/react";
import GoalMetricGrid from "./components/MetricGrid";

import "./App.css";

import startingHikes from "./data/startingHikes";
import startingGoalHike from "./data/startingGoalHike";

function App() {
  const [goal, setGoal] = useState(startingGoalHike);
  const [hikes, setHikes] = useState(startingHikes);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
      }}
    >
      <GridItem area="nav">{/* navbar: Goal | Hikes */}</GridItem>
      <GridItem area="main">
        <GoalMetricGrid goal={goal} hikes={hikes} />
        <Button>Log Hike</Button>
      </GridItem>
    </Grid>
  );
}

export default App;

import { useState } from "react";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import { IconType } from "react-icons";
import GoalMetricGrid from "./components/GoalMetricGrid";

import "./App.css";

import startingHikes from "./data/startingHikes";
import startingGoalHike from "./data/startingGoalHike";

export interface Hike {
  id: number;
  name: string;
  location: string;
  difficulty: string; //this property is represented as a metric, however the value remains in this property
  metrics: Metric[];
}

export interface Metric {
  id: number;
  name: string;
  value: number;
  icon?: IconType;
  unit: string;
}

function App() {
  const [goal, setGoal] = useState(startingGoalHike);
  const [hikes, setHikes] = useState(startingHikes);

  // compares metrics between hikes
  const highestValues = hikes.map((hike) => hike.metrics);

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

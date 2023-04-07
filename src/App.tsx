import { useState } from "react";
import "./App.css";
import GoalTracker from "./components/v1/GoalTracker";
import GoalTrackerForm from "./components/v1/GoalTrackerForm";
import GoalMetricCard from "./components/GoalMetricCard";
import GoalMetricGrid, { Hike } from "./components/GoalMetricGrid";
import {
  MdAccessTime,
  MdArrowUpward,
  MdNordicWalking,
  MdSignalCellularAlt,
} from "react-icons/md";
import { Button, Grid, GridItem } from "@chakra-ui/react";

const time = {
  date: new Date("2023-08-16"),
  daysLeft: 7,
};

const startingGoal = {
  name: "Half Dome",
  metrics: [
    { id: 1, name: "Distance", value: 17, icon: MdNordicWalking, unit: "mi" },
    { id: 2, name: "Ascent", value: 5200, icon: MdArrowUpward, unit: "ft" },
    {
      id: 3,
      name: "Difficulty",
      value: "Very Hard",
      icon: MdSignalCellularAlt,
      unit: "",
    },
    { id: 4, name: "Time", value: 12, icon: MdAccessTime, unit: "hrs" },
  ],
  location: "Yosemite",
};

const startingHikes = [
  {
    name: "Peter's Canyon",
    metrics: [
      {
        id: 1,
        name: "Distance",
        value: 5.9,
        icon: MdNordicWalking,
        unit: "mi",
      },
      { id: 2, name: "Ascent", value: 650, icon: MdArrowUpward, unit: "ft" },
      {
        id: 3,
        name: "Difficulty",
        value: "Moderate",
        icon: MdSignalCellularAlt,
        unit: "",
      },
      { id: 4, name: "Time", value: 2.5, icon: MdAccessTime, unit: "hrs" },
    ],
    location: "Yosemite",
  },
  {
    name: "Bolsa Chica Ecological Reserve",
    metrics: [
      {
        id: 1,
        name: "Distance",
        value: 4.5,
        icon: MdNordicWalking,
        unit: "mi",
      },
      { id: 2, name: "Ascent", value: 20, icon: MdArrowUpward, unit: "ft" },
      {
        id: 3,
        name: "Difficulty",
        value: "Easy",
        icon: MdSignalCellularAlt,
        unit: "",
      },
      { id: 4, name: "Time", value: 1.5, icon: MdAccessTime, unit: "hrs" },
    ],
    location: "Yosemite",
  },
];

function App() {
  const [goal, setGoal] = useState(startingGoal);
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

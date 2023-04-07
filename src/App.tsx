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
import { Button } from "@chakra-ui/react";

const time = {
  date: new Date("2023-08-16"),
  daysLeft: 7,
};

const startingHike = {
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

function App() {
  const [hike, setHike] = useState(startingHike);

  return (
    <div>
      <GoalMetricGrid hike={hike} />
      <Button>Log Hike</Button>
    </div>
  );
}

export default App;

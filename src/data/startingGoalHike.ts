import {
  MdAccessTime,
  MdArrowUpward,
  MdNordicWalking,
  MdSignalCellularAlt,
} from "react-icons/md";
import { Hike } from "../App";

const startingGoalHike: Hike = {
  id: 1,
  name: "Half Dome",
  location: "Yosemite",
  difficulty: "Very Hard",
  metrics: [
    {
      id: 1,
      name: "Distance",
      value: 17,
      icon: MdNordicWalking,
      unit: "mi",
    },
    {
      id: 2,
      name: "Ascent",
      value: 5200,
      icon: MdArrowUpward,
      unit: "ft",
    },
    {
      id: 3,
      name: "Difficulty",
      value: 0,
      icon: MdSignalCellularAlt,
      unit: "",
    },
    {
      id: 4,
      name: "Time",
      value: 12,
      icon: MdAccessTime,
      unit: "hrs",
    },
  ],
};

export default startingGoalHike;

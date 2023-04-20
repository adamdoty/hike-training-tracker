import {
  MdAccessTime,
  MdArrowUpward,
  MdNordicWalking,
  MdSignalCellularAlt,
} from "react-icons/md";
import { Hike } from "../components/MetricGrid";

const startingGoalHike: Hike[] = [
  {
    id: 1,
    name: "Half Dome",
    location: "Yosemite",
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
        value: 3,
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
  },
  {
    id: 2,
    name: "Mist Trail to Vernal Falls and Nevada Falls",
    location: "Yosemite",
    metrics: [
      {
        id: 1,
        name: "Distance",
        value: 6,
        icon: MdNordicWalking,
        unit: "mi",
      },
      {
        id: 2,
        name: "Ascent",
        value: 2600,
        icon: MdArrowUpward,
        unit: "ft",
      },
      {
        id: 3,
        name: "Difficulty",
        value: 2,
        icon: MdSignalCellularAlt,
        unit: "",
      },
      {
        id: 4,
        name: "Time",
        value: 4,
        icon: MdAccessTime,
        unit: "hrs",
      },
    ],
  },
  {
    id: 3,
    name: "Upper Yosemite Falls",
    location: "Yosemite",
    metrics: [
      {
        id: 1,
        name: "Distance",
        value: 7.2,
        icon: MdNordicWalking,
        unit: "mi",
      },
      {
        id: 2,
        name: "Ascent",
        value: 3900,
        icon: MdArrowUpward,
        unit: "ft",
      },
      {
        id: 3,
        name: "Difficulty",
        value: 2,
        icon: MdSignalCellularAlt,
        unit: "",
      },
      {
        id: 4,
        name: "Time",
        value: 6,
        icon: MdAccessTime,
        unit: "hrs",
      },
    ],
  },
  {
    id: 4,
    name: "Chilnualna Falls Trail",
    location: "Yosemite",
    metrics: [
      {
        id: 1,
        name: "Distance",
        value: 8.4,
        icon: MdNordicWalking,
        unit: "mi",
      },
      {
        id: 2,
        name: "Ascent",
        value: 2500,
        icon: MdArrowUpward,
        unit: "ft",
      },
      {
        id: 3,
        name: "Difficulty",
        value: 2,
        icon: MdSignalCellularAlt,
        unit: "",
      },
      {
        id: 4,
        name: "Time",
        value: 4,
        icon: MdAccessTime,
        unit: "hrs",
      },
    ],
  },
  {
    id: 5,
    name: "Four Mile Trail",
    location: "Yosemite",
    metrics: [
      {
        id: 1,
        name: "Distance",
        value: 10,
        icon: MdNordicWalking,
        unit: "mi",
      },
      {
        id: 2,
        name: "Ascent",
        value: 4570,
        icon: MdArrowUpward,
        unit: "ft",
      },
      {
        id: 3,
        name: "Difficulty",
        value: 2,
        icon: MdSignalCellularAlt,
        unit: "",
      },
      {
        id: 4,
        name: "Time",
        value: 6.5,
        icon: MdAccessTime,
        unit: "hrs",
      },
    ],
  },
  {
    id: 6,
    name: "Clouds Rest",
    location: "Yosemite",
    metrics: [
      {
        id: 1,
        name: "Distance",
        value: 12.5,
        icon: MdNordicWalking,
        unit: "mi",
      },
      {
        id: 2,
        name: "Ascent",
        value: 3200,
        icon: MdArrowUpward,
        unit: "ft",
      },
      {
        id: 3,
        name: "Difficulty",
        value: 2,
        icon: MdSignalCellularAlt,
        unit: "",
      },
      {
        id: 4,
        name: "Time",
        value: 7,
        icon: MdAccessTime,
        unit: "hrs",
      },
    ],
  },
];

export default startingGoalHike;

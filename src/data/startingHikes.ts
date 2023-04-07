import { Hike } from "../App";

const startingHikes: Hike[] = [
  {
    id: 1,
    name: "Peter's Canyon",
    location: "Orange",
    difficulty: "Moderate",
    metrics: [
      {
        id: 1,
        name: "Distance",
        value: 5.9,
        unit: "mi",
      },
      {
        id: 2,
        name: "Ascent",
        value: 650,
        unit: "ft",
      },
      {
        id: 3,
        name: "Difficulty",
        value: 0,
        unit: "",
      },
      {
        id: 4,
        name: "Time",
        value: 2.5,
        unit: "hrs",
      },
    ],
  },
  {
    id: 2,
    name: "Bolsa Chica Ecological Reserve",
    location: "Huntington Beach",
    difficulty: "Easy",
    metrics: [
      {
        id: 1,
        name: "Distance",
        value: 4.5,
        unit: "mi",
      },
      {
        id: 2,
        name: "Ascent",
        value: 20,
        unit: "ft",
      },
      {
        id: 3,
        name: "Difficulty",
        value: 0,
        unit: "",
      },
      {
        id: 4,
        name: "Time",
        value: 1.5,
        unit: "hrs",
      },
    ],
  },
];

export default startingHikes;

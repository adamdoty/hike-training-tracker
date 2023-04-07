import { Hike } from "../components/MetricGrid";

const startingHikes: Hike[] = [
  {
    id: 1,
    name: "Peter's Canyon",
    location: "Orange",
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
        value: 1,
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
  {
    id: 3,
    name: "Weir Canyon Loop Trail",
    location: "Anaheim",
    metrics: [
      {
        id: 1,
        name: "Distance",
        value: 3.8,
        unit: "mi",
      },
      {
        id: 2,
        name: "Ascent",
        value: 830,
        unit: "ft",
      },
      {
        id: 3,
        name: "Difficulty",
        value: 1,
        unit: "",
      },
      {
        id: 4,
        name: "Time",
        value: 2.0,
        unit: "hrs",
      },
    ],
  },
  {
    id: 4,
    name: "El Dorado Nature Center - 2 Mile Loop * 4",
    location: "Long Beach",
    metrics: [
      {
        id: 1,
        name: "Distance",
        value: 8.4,
        unit: "mi",
      },
      {
        id: 2,
        name: "Ascent",
        value: 80,
        unit: "ft",
      },
      {
        id: 3,
        name: "Difficulty",
        value: 1,
        unit: "",
      },
      {
        id: 4,
        name: "Time",
        value: 3.0,
        unit: "hrs",
      },
    ],
  },
  {
    id: 5,
    name: "Top of the World",
    location: "Laguna Beach",
    metrics: [
      {
        id: 1,
        name: "Distance",
        value: 2.4,
        unit: "mi",
      },
      {
        id: 2,
        name: "Ascent",
        value: 890,
        unit: "ft",
      },
      {
        id: 3,
        name: "Difficulty",
        value: 2,
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

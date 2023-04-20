import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import GoalDashboard from "./components/GoalDashboard";
import GoalForm from "./components/GoalForm";
import { Hike } from "./components/MetricGrid";

import "./App.css";

import goalHikes from "./data/goalHikes";

function App() {
  const [goal, setGoal] = useState<Hike>(goalHikes[1]);

  return (
    <Routes>
      <Route
        path="/"
        element={goal.id ? <GoalDashboard goal={goal} /> : <GoalForm />}
      />
    </Routes>
  );
}

export default App;

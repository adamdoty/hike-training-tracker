import "./App.css";

import { Route, Routes } from "react-router-dom";
import GoalDashboard from "./components/GoalDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GoalDashboard />} />
    </Routes>
  );
}

export default App;

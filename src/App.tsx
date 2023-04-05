import { useState } from "react";
import "./App.css";
import GoalTracker, { Hike } from "./components/GoalTracker";
import GoalTrackerForm from "./components/GoalTrackerForm";

const hike = {
  name: "Half Dome",
  distance: 17,
  difficulty: "Very Hard",
  location: "Yosemite National Park, CA",
  climb: 5200,
};

const time = {
  date: new Date("2023-08-16"),
  daysLeft: 7,
};

function App() {
  const [hike, setHike] = useState<Hike>({} as Hike);

  return (
    <div>
      {/* if detect data in local storage -> GoalTracker : GoalTrackerForm */}
      {Object.keys(hike).length > 0 ? (
        <GoalTracker hike={hike} time={time} hasTrainingPlan={false} />
      ) : (
        <GoalTrackerForm onSubmit={(data) => setHike({ ...hike, ...data })} />
      )}
    </div>
  );
}

export default App;

import "./App.css";
import GoalTracker from "./components/GoalTracker";

const hike = {
  name: "Half Dome",
  distance: 17,
  difficulty: "Very Hard",
  location: "Yosemite National Park, CA",
  climb: 5200,
};

const time = {
  date: new Date("2023-08-14"),
  daysLeft: 7,
};

function App() {
  return (
    <div>
      <GoalTracker hike={hike} time={time} />
    </div>
  );
}

export default App;

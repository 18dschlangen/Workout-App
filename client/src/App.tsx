import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateWorkout from "./pages/CreateWorkout";
import Stats from "./pages/Stats";
import Workouts from "./pages/Workouts";
import WorkoutHistory from "./pages/WorkoutHistory";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="workout" element={<Workouts />} />
        <Route path="stats" element={<Stats />} />
        <Route path="create-workout" element={<CreateWorkout />} />
        <Route path="workout-history/:id" element={<WorkoutHistory />} />
      </Routes>
    </div>
  );
}

export default App;

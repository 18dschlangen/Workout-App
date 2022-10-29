import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex align-middle justify-between px-10 py-6 border-b-2 border-b-secondary">
      <div className="flex align-middle">
        <Link to="/workouts" className="mr-5">
          Workout 1
        </Link>
        <Link to="/create-workout" className="mr-5">
          Create Workout
        </Link>
        <Link to="/stats" className="mr-5">
          Stats
        </Link>
      </div>
      <Link to="/" className="mr-5">
        Home
      </Link>
    </div>
  );
};

export default Home;

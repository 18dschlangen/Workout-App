const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//midleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("server has started");
});

//Posting, Getting, and Deleting different workouts

app.post("/workouts", async (req, res) => {
  try {
    const { title } = req.body;
    const newWorkout = await pool.query(
      "INSERT INTO workout (title) VALUES ($1) RETURNING *",
      [title]
    );
    res.json(newWorkout.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/workouts", async (req, res) => {
  try {
    const allWorkouts = await pool.query("SELECT * FROM workout");
    res.json(allWorkouts.rows);
  } catch (err) {
    console.err(err.message);
  }
});

app.get("/workouts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await pool.query(
      "SELECT * FROM workout WHERE workout_id = $1",
      [id]
    );
    res.json(workout.rows[0]);
  } catch (err) {
    console.err(err.message);
  }
});

app.delete("/workouts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteWorkout = await pool.query(
      "DELETE FROM workout WHERE workout_id = $1",
      [id]
    );
    res.json("todo was deleted");
  } catch (err) {
    console.err(err.message);
  }
});

//Posting, Getting, and Deleting different lifts

app.post("/lift", async (req, res) => {
  try {
    const { lift_name, lift_sets, target_reps } = req.body;
    const newLift = await pool.query(
      "INSERT INTO lift (lift_name, lift_sets, target_reps) VALUES ($1, $2, $3) RETURNING *",
      [lift_name, lift_sets, target_reps]
    );
    res.json(newLift.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/lift", async (req, res) => {
  try {
    const allLifts = await pool.query("SELECT * FROM lift");
    res.json(allLifts.rows);
  } catch (err) {
    console.err(err.message);
  }
});

app.get("/lift/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const lift = await pool.query("SELECT * FROM lift WHERE lift_id = $1", [
      id,
    ]);
    res.json(lift.rows[0]);
  } catch (err) {
    console.err(err.message);
  }
});

app.delete("/lift/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteLift = await pool.query("DELETE FROM lift WHERE lift_id = $1", [
      id,
    ]);
    res.json("lift was deleted");
  } catch (err) {
    console.err(err.message);
  }
});

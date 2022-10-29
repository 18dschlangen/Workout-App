CREATE DATABASE workoutapp;

CREATE TABLE workout(
    workout_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    create_date TIMESTAMPTZ DEFAULT(NOW())
);
CREATE TABLE lift(
    lift_id SERIAL PRIMARY KEY,
    workout_id INT, 
    lift_name VARCHAR(255) NOT NULL,
    lift_sets INT,
    target_reps INT
);

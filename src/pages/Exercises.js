import React from 'react';
import ExerciseList from "../components/ExerciseList";
import Welcome from "../components/Welcome";
import AddButtom from "../components/AddButton";

const Exercises = ({ data }) => (
    <React.Fragment>
        <Welcome username="Robert" />
        <ExerciseList exercises={data} />
        <AddButtom />
  </React.Fragment>
);


export default Exercises;
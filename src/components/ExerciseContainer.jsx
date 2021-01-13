import React from 'react';
import fitnessData from "../fitnessData.js";
import Exercise from './Exercise';


const ExerciseContainer = (props) => {
 
 
 const {checkboxes} = props


 // Create workout list 

 let workout = [];

 const addExerciseHandler = (exercise) => {
  workout.push(exercise)
  console.log(workout);
  return workout 
 }


// get ExerciseList

  const activeExercises = fitnessData.filter((item)=> 
      (checkboxes.Legs && item.category.Legs) ||
      (checkboxes.Booty && item.category.Booty) ||
      (checkboxes.AbsAndBack && item.category.AbsAndBack) ||
      (checkboxes.ArmAndShoulder && item.category.ArmAndShoulder)
  )  

  const exerciseList = activeExercises.map(
  (item) => 
    <Exercise 
    key={item.id}
    name={item.name} 
    img={item.img} 
    repeats={item.repeats} 
    category={item.category} 
    addExerciseHandler={addExerciseHandler}
  />)

 
 
  //==============================
 //==============================

  return (
    <section>
      <h3>Found {exerciseList.length} Exercises</h3>
      {exerciseList}
    </section>
  );
};

export default ExerciseContainer;

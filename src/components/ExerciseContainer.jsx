import React from 'react';
import fitnessData from "../fitnessData.js";
import Exercise from './Exercise';
import ExerciseModal from "./ExerciseModal";


const ExerciseContainer = (props) => {
 
 // Destructure props
 const {checkboxes, subtractExercise, addExercise, exercises} = props



 // Create workout list 
 // creates a Array of Objects with Data to Use and show in the Modal

 let workout = [];

 const addExerciseHandler = (exercise) => {
  workout.push(exercise)
  console.log(workout);
  return workout 
 }


// get ExerciseList with category selection 

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
    subtractExercise={subtractExercise}
          addExercise={addExercise}
            exercises={exercises}
  />)

 
   
//==============================
// Return Statement 
//==============================

  return (
    <>
    <div className="found-amount">
      <p>Found {exerciseList.length} Exercises</p>  
    </div>

    <section className="exercises-main">
      
      <section className="exercise-list">
      <div className="intensity">
        <p>Add the intensity via Click on the '+' Button.</p>
        </div>
        <div className="individual-exercise-container">
          {exerciseList}
        </div>
      </section>
      <section className="exercise-modal">
        <ExerciseModal exercises={exercises}/>
      </section>
    </section>
    </>
  );
};

export default ExerciseContainer;

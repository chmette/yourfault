import React from "react";

const ExerciseModal = ({exercises})=>{
    
    //convert object into array 
    const exercisesArray = Object.entries(exercises)

    //Check if we have exercises
    const exercisesCheck = exercisesArray.reduce((acc,num)=>acc+=num[1],0);

    //if there are exercises display the particular exercise
    const exerciseList = 
    exercisesArray.map((exercise,index)=>
        exercise[1]>0&&(
            <li className="exercises-li" key={index}>
                <span className="span">
                     {exercise[1]}
                </span>
                {exercise[0]} 
            </li>
        )
    );

    //Count how many exercises we added
    const amountOfExercises = exercisesArray.reduce((acc, exercise)=>{
        if(exercise[1]>0){
            acc++
        }
        return acc
    },0)


//==============================
// Return Statement 
//==============================


    return (
       <div className="exercise-modal-container" style={{display: exercisesCheck === 0 && 'none' }}  >
         <div className="exercise-modal-container-info">
                {/* show if we have more than 5 ex */}
               <h3 style={{display: amountOfExercises<5 && "none" }} >There you go - your workout is ready</h3>

                {/* Show if we have less then 5 ex */}
                <h3 style={{display: amountOfExercises>=5 && "none" }}>Choose at least 5 exercises</h3>

               <h4>Do it for 3 Rounds </h4>
                <ul className="exercises-ul">
                    {exerciseList}
                </ul>
                {/* show if we have more than 5 ex */}
                <p style={{display: amountOfExercises<5 && "none" }}>Don't forget - its your fault!</p>
                <p style={{display: amountOfExercises<5 && "none" }}>Share your workout <i className="fas fa-share-alt-square"></i></p>
         </div>
         
       </div>
        )
};


































export default ExerciseModal;

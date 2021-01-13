import React from "react";




const ExerciseModal = ({exercises})=>{
    
    //convert object into array 
    const exercisesArray = Object.entries(exercises)

    //Check if we have exercises
    const exercisesCheck = exercisesArray.reduce((acc,num)=>acc+=num[1],0);

    //if there are exercises display the particular exercise
    const exerciseList = 
    exercisesArray.map((order,index)=>
        order[1]>0&&(
            <li className="exercises-li" key={index}>
                {order[0]} 
                <span className="span">
                     {order[1]}
                </span>
            </li>
        )
    );

    //If there are no exercises we show this
    exercisesCheck === 0 &&
        exerciseList.push(
            <li className="exercises-li" key={0}>
                You have no exercises yet!
            </li>
        );
        
//==============================
// Return Statement 
//==============================


    return (
       <div>
           <h3>There you go - your workout is ready</h3>
           <h5>Do it for 3 Rounds : </h5>
            <ul className="exercises-ul">
                {exerciseList}
            </ul>
            <p>Share your workout <i class="fas fa-share-alt-square"></i></p>
       </div>
        
        )
        
};


























export default ExerciseModal;

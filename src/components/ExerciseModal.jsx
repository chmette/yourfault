import React from "react";


//this modal will only be shown if the header is clicked

//Here we determine wether the modal should be shown or not.

//Our exercises are inside an object and we need to convert this object into array with the Object.entries command. This gives an array of two elements the key and the value

const ExerciseModal = ({exercises})=>{
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
        
    //-------------------------------
    //-------------------------------

    return <ul className="exercises-ul">
        {exerciseList}
        </ul>;
};

export default ExerciseModal;

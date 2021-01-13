import React from 'react';





const Exercise = (props) => {

  const {name, img, repeats, addExerciseHandler} = props


  const localAddExerciseHandler = (e) => {
  addExerciseHandler({name, img, repeats})
  }


 
 //==============================
 //==============================

  return(
    
    <div className="exercise-display"
        // style={{ display: checkboxes.legs ? "block" : "none" }}
        >
          <h3>{name}</h3>
          <img src={img} alt='exercise'/>
          <p>{repeats}</p>
          
          <button onClick={localAddExerciseHandler}>Add to Workout</button>
    </div>   

    
  );
}

export default Exercise;

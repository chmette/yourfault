import React from 'react';





const Exercise = (props) => {

  const {name, img, repeats, addExerciseHandler,subtractExercise, addExercise,} = props


  // const localAddExerciseHandler = (e) => {
  // addExerciseHandler({name, img, repeats})
  // }


 
 //==============================
 //==============================

  return(
    
    <div className="individual-exercise-container">
       
          <h3>{name}</h3>
          <img src={img} alt='exercise'/>
          <div className="buttons">
                    <button name={name} onClick={(e)=>subtractExercise(e)}>
                        - 
                    </button>
                    
                    <button name={name} onClick={(e)=>addExercise(e)}>
                        +
                    </button>
                </div>
          
          
          {/* <p>{repeats}</p>
          
          <button onClick={localAddExerciseHandler}>Add to Workout</button> */}
    </div>   

    
  );
}

export default Exercise;

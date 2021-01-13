import React from 'react';





const Exercise = (props) => {

  // Destructure props
  // props currently not used { addExerciseHandler}
  const {name, img, subtractExercise,repeats, addExercise,} = props

   
  //Handler Exercises with workout (object with data name img repeats)
  // const localAddExerciseHandler = (e) => {
  // addExerciseHandler({name, img, repeats})
  // }


   
  
  

 
 //==============================
// Return Statement 
//==============================

  return(
    
    <div className="individual-exercise">
       
          <h3>{name}</h3>
          <img src={img} alt='exercise'/>
          <div className='repeats'>
          <h4> Duration or Repeats</h4>
            <p> easy : {repeats[0]}</p>
            <p> medium : {repeats[1]}</p>
            <p> hard : {repeats[2]}</p>
  
            
          </div>
          <div className="buttons">
            
              <button name={name} onClick={(e)=>subtractExercise(e)}>
              - 
              </button>
                    
              <button name={name} onClick={(e)=>addExercise(e)}>
                  +
              </button>
          </div>
          
          {/* Add Workout object via Button */}
          {/* <p>{repeats}</p>
          <button onClick={localAddExerciseHandler}>Add to Workout</button> */}
    </div>   
    
  );
}

export default Exercise;

// import React, {useState} from 'react';
import React from 'react';


const CategoryCheckbox = ({checkboxHandler, checkboxes})=>{

//==============================
 //==============================


return(
    <section className='multiple-checkboxes'>
   
        <label>Legs</label>
        <input
            type='checkbox'
            name='Legs'
            checked={checkboxes.Legs}
            onChange={checkboxHandler}
        />

        <label>Booty</label>
        <input
            type='checkbox'
            name='Booty'
            checked={checkboxes.Booty}
            onChange={checkboxHandler}
        />

        <label>Abs and Back</label>
        <input
            type='checkbox'
            name='AbsAndBack'
            checked={checkboxes.AbsAndBack}
            onChange={checkboxHandler}
        />
        <label>Arms and Shoulder</label>

        <input
            type='checkbox'
            name='ArmAndShoulder'
            checked={checkboxes.ArmAndShoulder}
            onChange={checkboxHandler}
        />
    </section>
)}

export default CategoryCheckbox
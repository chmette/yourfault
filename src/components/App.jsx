import React, {useState} from 'react';
import Header from  './Header';
import CategoryCheckbox from './CategoryCheckbox';
import ExerciseContainer from './ExerciseContainer';
import Footer from './Footer';
import '../App.css';





const App = () => {

const [checkboxes, setCheckboxes] = useState({
    Legs: true,
    Booty: true,
    AbsAndBack: true,
    ArmAndShoulder: true,
   });
  

const checkboxHandler = (e) => {
    setCheckboxes({ ...checkboxes, [e.target.name]: e.target.checked });
  };

 //==============================
 //==============================


  return (
    <main>
      <Header />
       < CategoryCheckbox checkboxHandler={checkboxHandler} checkboxes={checkboxes}/>
       < ExerciseContainer checkboxes={checkboxes}/>
            
      <Footer />
    </main>
    
  );
  }

export default App;

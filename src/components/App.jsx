
import css from './App.module.css'
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from './Notification/Notification';
import { useState, useEffect } from 'react';

function App() { 
 
  const [stateFeedback, setStateFeedback] = useState(() => {
    const savedObject = localStorage.getItem("saved-feedback");
    if (savedObject !== null) {
          return JSON.parse(savedObject);
        }
   else {
    return {
      good: 0,
      neutral: 0,
      bad: 0
      }
}});
  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(stateFeedback));
    console.log(stateFeedback);
  }, [stateFeedback]);
  
  const updateFeedback = (feedbackType) => {
    setStateFeedback({
      ...stateFeedback,
      [feedbackType]: stateFeedback[feedbackType] + 1,
           
    });
  };

  const handleReset =() => {
    setStateFeedback({   
        good: 0,
        neutral: 0,
        bad: 0
    });
  }
    
  const totalFeedback = stateFeedback.good + stateFeedback.neutral + stateFeedback.bad;
  const positive = Math.round((stateFeedback.good+stateFeedback.neutral)*100/totalFeedback);

  return ( 

    <div className={css.fonts}>
     <Description/>
     <Options updateFeedback={updateFeedback} reset={handleReset} total={totalFeedback}></Options>
     { totalFeedback > 0 ? <Feedback stateFeedback={stateFeedback} total={totalFeedback} positive={positive}/> : <Notification/> }     
    </div>

  );
}
export default App;

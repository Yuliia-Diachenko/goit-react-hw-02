
import css from './App.module.css'
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from './Notification/Notification';
import { useState } from 'react';

function App() { 
  const [stateFeedback, setStateFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

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
    });}
  const totalFeedback = stateFeedback.good + stateFeedback.neutral + stateFeedback.bad;
  
  return ( 

    <div className={css.fonts}>
     <Description/>
     <Options updateFeedback={updateFeedback} reset={handleReset} total={totalFeedback}></Options>
     { totalFeedback > 0 ? <Feedback stateFeedback={stateFeedback} total={totalFeedback}/> : <Notification/> }     
    </div>

  );
}
export default App;

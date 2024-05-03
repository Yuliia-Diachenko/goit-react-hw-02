import css from './Option.module.css'  
   
function Options({updateFeedback, reset, total}) {
    console.log(total);   
return (
   
    <div className={css.container}>
        <button onClick={()=> updateFeedback("good")}>Good</button>
        <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        <button onClick={() => updateFeedback("bad")}>Bad</button>
        { total > 0 ? <button onClick={reset}>Reset</button> : <button className={css.hidden}></button> }  
        
    </div>
);
}
export default Options;

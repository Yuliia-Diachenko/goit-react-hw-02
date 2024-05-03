function Feedback({stateFeedback:{good, neutral, bad}, total}) {  
    
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {Math.round((good+neutral)*100/(total))}%</p>

        </>
    )
    }
    export default Feedback;
    
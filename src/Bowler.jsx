import { useState } from "react"

export default function Bowler(){
    let [balls, setBalls] = useState(0)
    let [overs, setOvers] = useState(0)
    let [wideBalls, setWideBalls] = useState(0)

    let handleBalls = () => {
        let totalBall = balls + 1;
        if(totalBall == 7){
            let totalOver = overs + 1;
            setOvers(totalOver)
            totalBall = 0
        }
        setBalls(totalBall)
    }

    let handleWideBalls = () => {
        let totalWideBalls = wideBalls + 1;
        setWideBalls(totalWideBalls)
    }
    return (
        <div>
            <h3>Player: Bangla Bowler</h3>
            <p>Over: {overs}</p>
            <p>Balls: {balls}</p>
            <p>wide Balls: {wideBalls}</p>
            <br />
            {balls >= 6 && <p>{overs+1} over done</p>}
            <button onClick={handleBalls}>ball</button>
            <button onClick={handleWideBalls}>wideBall</button>
        </div>
    )
}
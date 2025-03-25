import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0)

    const handleAdd = () => {
        // console.log('Add nutton clicked')

        const newCount = count + 1;
       setCount(newCount);

        // return increase;
    }

    const counterStyle ={
        border: '2px solid yellow'
    }

    return(
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}
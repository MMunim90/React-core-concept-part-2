import Counter from './Counter'
import './App.css'
import Batsman from './Batsman'
import Bowler from './Bowler'

function App() {
  
  function handleClick(){
    alert('I am clicked.')
  }

  const handleClick3 = () => {
    alert('u ar clicked me now')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }
  return (
    <>
      
      <h3>Vite + React</h3>

      <Batsman></Batsman>
      <Bowler></Bowler>
      <br /><br />
      <Counter></Counter>

      {/* <button onclick="handleClick()">Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={function handleClick2(){
        alert('i am also clicked')
      }}>Click me too</button>

      <button onClick={handleClick3}>Also click me</button>
      <button onClick={() => alert('u clicked number 4 button')}>Also click me now</button>

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  )
}

export default App

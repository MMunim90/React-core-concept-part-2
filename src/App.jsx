import Counter from "./Counter";
import "./App.css";
import Batsman from "./Batsman";
import Bowler from "./Bowler";
import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";
import Posts from "./Posts";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())

// const fetchFriends = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

const fetchPosts = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {
  // const friendsPromise = fetchFriends();

  const postsPromise = fetchPosts();
  function handleClick() {
    alert("I am clicked.");
  }

  const handleClick3 = () => {
    alert("u ar clicked me now");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h3>Vite + React</h3>

      <Suspense fallback={<h4>Posts are coming......</h4>}>
      <Posts postsPromise={postsPromise}>

      </Posts>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
      <Users fetchUsers = {fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      <Batsman></Batsman>
      <Bowler></Bowler>
      <br />
      <br />
      <Counter></Counter>

      {/* <button onclick="handleClick()">Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={function handleClick2() {
          alert("i am also clicked");
        }}
      >
        Click me too
      </button>

      <button onClick={handleClick3}>Also click me</button>
      <button onClick={() => alert("u clicked number 4 button")}>
        Also click me now
      </button>

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  );
}

export default App;

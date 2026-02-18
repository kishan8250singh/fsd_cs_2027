import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

  async function getdata(){
  // alert("!!!!!");
  const serverdata = await fetch("http://localhost:4004/data")
  const jsondata = await serverdata.json();

  setData(jsondata.msg.products);
  }
  function cartitem(ele){
    alert("Added to cart: " + ele.title);
  }
  return (
    <>
     <h2>fetch data from node server </h2>
     {
      data.map((ele) => (
        <div style = {{border:"1px solid black", margin:"10px", padding:"10px"}}>
          <h3>id:{ele.id}</h3>
          <h3>price:{ele.price}</h3>
          <h3>title:{ele.title}</h3>
          <h3>rating:{ele.rating}</h3>
          <p>description:{ele.description}</p>
          <button onClick={() => cartitem(ele)}>Add to Cart</button>
        </div>
      ))
    }
    _
      <pre>{JSON.stringify(data.msg)}</pre>
     <button onClick={getdata}>Fetch Data</button>
    </>
  )
}

export default App

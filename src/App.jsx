import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('every day is a very day')
  const [writer,setwriter] = useState("author")
  const array =[
    {qoute:"its really a good day",auhtor:"Asif Ashraf",category:"wisdom"},
    {qoute:"every master was once a fool",auhtor:"MHD Sameeh",category:"wisdom"},
    {qoute:"discipline is the key to success",auhtor:"MHD Salah",category:"wisdom"},
    {qoute:"your greatest enemy is you",auhtor:"Shibu Shibili",category:"wisdom"}
  ]
  function click(){
    let randomIndex =Math.floor(Math.random()*array.length)
    setCount(array[randomIndex].qoute)
    setwriter(array[randomIndex].auhtor)
  }

  return (
    <>
      <div>
        
      </div>
      <h1>{count}</h1>
      <h3>{writer}</h3>
      <div className="card">
        <button onClick={click}>
          Start your day
        </button>
        <select name="category" id="category">
          <option value="">Random</option>
          <option value="" className='opt'>wisdom</option>
          <option value="" className='opt'>health</option>
          <option value="" className='opt'>wealth</option>
        </select>
        
      </div>
      
    </>
  )
}

export default App

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('every day is a very day')
  const [writer,setwriter] = useState("author")
  const [bgColor,setBgColor] =useState("lightblue")
  const changeColor=()=>{
    setBgColor(event.target.value)
   
  }
  
  function click(){
    if(bgColor ==="lightblue"){
      let array =[
        {qoute:"its really a good day",auhtor:"Asif Ashraf",category:"wisdom"},
        {qoute:"every master was once a fool",auhtor:"MHD Sameeh",category:"wisdom"},
        {qoute:"discipline is the key to success",auhtor:"MHD Salah",category:"wisdom"},
        {qoute:"your greatest enemy is you",auhtor:"Shibu Shibili",category:"wisdom"}
      ]
      
      let randomIndex =Math.floor(Math.random()*array.length)
      setCount(array[randomIndex].qoute)
      setwriter(array[randomIndex].auhtor)
    }else if(bgColor === "lightgreen"){
      let array =[
        {qoute:"sun never sets",auhtor:"shahla febiin",category:"motivation"},
        {qoute:"try just try",auhtor:"noushi nizar",category:"motivation"},
        {qoute:"just do it",auhtor:"aparna",category:"motivation"},
        {qoute:"stop procrastination",auhtor:"swalih",category:"motivation"}
      ]
      
      let randomIndex =Math.floor(Math.random()*array.length)
      setCount(array[randomIndex].qoute)
      setwriter(array[randomIndex].auhtor)
    }
    else if(bgColor ==="orange"){
      let array =[
        {qoute:"health is your first wealth",auhtor:"ajmal ds astro",category:"wealth"},
        {qoute:"never spend,you dont have",auhtor:"thatha",category:"wealth"},
        {qoute:"invest where your assets grow",auhtor:"noushad ceo",category:"wealth"},
        {qoute:"give one,you shall receive 10",auhtor:"god almighty",category:"wealth"}
      ]
      
      let randomIndex =Math.floor(Math.random()*array.length)
      setCount(array[randomIndex].qoute)
      setwriter(array[randomIndex].auhtor)
    }
  }
 
  
  return (
    <>
      <div style={{ backgroundColor: bgColor, height: "100vh", width:"100vw",margin:"0px" }}>
        
        <button onClick={click}>
          Start your day
        </button>
      <div className="card">
        <select name="category" id="category" onChange={changeColor}>
          
          <option value="lightblue" className='opt'>wisdom</option>
          <option value="lightgreen" className='opt'>motivation</option>
          <option value="orange" className='opt'>wealth</option>
        </select>
      <h1 style={{color:'white'}}>{count}</h1>
      <h3>{writer}</h3>
        
      </div>
      </div>
      
    </>
  )
}

export default App

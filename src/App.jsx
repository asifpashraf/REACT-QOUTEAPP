import { useState } from "react"
import Quotes from "./Qoutes"
import nightsky from './assets/nightsky.jpg'
import './App.css'


function App(){
  const [auhtor,setAuthor] = useState("Albert Einstein")
  const filterdQoutes =Quotes.filter(qoute=>qoute.author===auhtor)
  const [q,setQ] = useState(filterdQoutes[0].quote)

  function category(event){
    let cat =event.target.value
    setAuthor(cat)
    }
function random(){
 const randomIndex =Math.floor(Math.random()*filterdQoutes.length)
 const randomQoute=filterdQoutes[randomIndex].quote
 
 setQ(randomQoute)
 console.log(randomQoute)
}
  

  
  
  return (<>
  <div className="flex flex-col justify-center items-center h-[100vh] bg-orange-300 page" >
    <select name="" id="" onChange={category} className="bg-orange-200 text-black">
      <option value="Albert Einstein">Albert Einstein</option>
      <option value="Maya Angelou">Maya Angelou</option>
      <option value="Steve Jobs">Steve Jobs</option>
      <option value="Mahatma Gandhi">Mahatma Gandhi</option>
      <option value="Oscar Wilde">Oscar Wilde</option>
    </select>
    <h2 className="text-white">{auhtor}</h2>
    <h1 className="text-white">{q}</h1>
    
    
    <button onClick={random} className="text-white border-2 rounded-2xl w-[200px] bg-orange-700">start your day</button>
    
  </div>
  </>)
}

export default App
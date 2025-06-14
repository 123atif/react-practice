
import {  useState } from 'react'
import './index.css'

function App() {
  const [active, setActive] = useState("Home")
  const list = ['Home', 'About', 'Services', 'Contact']
 
  const handleClick = (index) =>{
      setActive(index);
     console.log("index", index);
  }
 
  return (
    <>
      <div className='bg-gray-200 h-12'>
       <div className="flex gap-10 items-center justify-center pt-2">
        {list.map((item, index)=>(
          <div key={index} className='cursor-pointer'  > 
          <div className={active === item  ? "font-bold bg-indigo-400 rounded-[2px] text-white px-2 py-1 transition-all duration-300" : "text-black transition-none duration-75"} onClick={()=>handleClick(item)}>{item}</div>
          </div>
        ))}
       </div>
      </div>

    </>
  )
}

export default App

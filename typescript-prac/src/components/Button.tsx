// import React from 'react'
// const Button: React.FC = ({ text }: { text: string }) => {
//   return (
//     <>
//     <button>{text}</button>
//     </>
//   )
// }

// export default Button; 





import React, {useState} from 'react'
import "../index.css"
interface ButtonProps {
  text: string
  onClick?: () => void
  className?: string
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  const [count, setCount] = useState<number>(0)

  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)} className={`btn ${className}`}>{text}</button>
    </>
  )
}

export default Button; 


//if you want to make an optional prop, you can add a question mark after the prop name
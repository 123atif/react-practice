import React, { useEffect, useState } from 'react'
import '../index.css'
const ProgressBar = () => {
    const [bar, setbar] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setbar((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return prev
                }

                return prev + 5
            })
            console.log("interval", interval)
        }, 150)
        return () => {
            clearInterval(interval);
        }
    }, [])


    return (
        <div className='container'>
            <div className="progress" style={{ transform: `translateX(${bar - 100}%)` }}>

            </div>
        </div>
    )
}

export default ProgressBar
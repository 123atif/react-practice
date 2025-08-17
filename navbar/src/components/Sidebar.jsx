import { useState } from 'react'
import { navbarLinks } from '../data'
import cross from "../asset/cross.svg"
import menu from "../asset/menu.svg"

const Sidebar = () => {
    const [tab, setTab] = useState("Home")
    const [open, setopen] = useState(true)

    const handleCloseSidebar = () => {
        setopen(false)
    }
    const handleOpenSidebar = () => {
        setopen(true)
    }


    return (
        <>
            {!open && (
                <img src={menu} className=' absolute w-10 h-10 cursor-pointer ' onClick={handleOpenSidebar} />
            )}

            {open && (
                <div className='hidden md:block md:w-[22%] h-screen bg-gray-800/90 relative  transform transition-transform duration-300 ease-in-out' >
                    <img src={cross} className=' absolute w-10 h-10 right-2 cursor-pointer ' onClick={handleCloseSidebar} />
                    <div className='p-[1.5rem] pt-[3rem]'>
                        {
                            navbarLinks.map((links, index) => (
                                <div key={index} className={`p-4 pl-4 md:pl-8 w-full cursor-pointer text-white font-bold hover:bg-gray-400/60 hover:rounded-md hover:duration-500  ${links.link === tab ? "bg-gray-400/40 w-[22%]" : ""}`}
                                    onClick={() => setTab(links.link)}


                                >
                                    <div className="flex items-center gap-5">
                                        <img src={links.img} className='w-6 h-6' />
                                        {links.link}
                                    </div>
                                    {console.log("links.link", links.link)}
                                </div>
                            ))
                        }
                        {console.log("tab", tab)}


                    </div>
                </div>
            )
            }

        </>
    )
}

export default Sidebar
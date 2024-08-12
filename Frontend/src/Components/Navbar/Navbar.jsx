import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../Assets/favicon.png'

const Navbar = () => {
    return (
        <div className='p-2  sm:p-4 w-full flex justify-center bg_nav opacity-80' >
            <div className='w-11/12 sm:w-3/4 flex-col sm:flex-row sm:flex justify-between items-center'>
                <div className='flex items-center gap-7 justify-center sm:justify-normal'>
                    <img src={img1} className='hidden sm:flex h-16 border-4 border-black rounded-full' alt="" />
                    <h2 className='tracking-wider font2 text-3xl sm:text-5xl relative bottom-2 border-2'>quizzy</h2>
                </div>

                <div className='flex uppercase gap-8 sm:pr-10 text-center font-bold tracking-wider justify-evenly sm:justify-normal mt-3'>
                    <Link className='p-1 w-20 border-4 border-black hover:bg-black hover:text-white' to={"/"}>Home</Link>
                    <Link className='p-1 w-20 border-4 border-black hover:bg-black hover:text-white' to={"/quiz"}>Quiz</Link>
                    <Link className='p-1 w-20 border-4 border-black hover:bg-black hover:text-white' to={"/admin"}>Admin</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
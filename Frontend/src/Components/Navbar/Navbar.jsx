import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../Assets/favicon.png'

const Navbar = () => {
    return (
        <div className='p-4 w-full flex justify-center bg_nav'>
            <div className='w-3/4 flex justify-between items-center'>
                <div className='flex items-center gap-7'>
                    <img src={img1} className='h-16 border-4 border-black rounded-full' alt="" />
                    <h2 className='font2 text-5xl relative bottom-2'>quizzy</h2>
                </div>

                <div className='flex uppercase gap-8 pr-10 text-center font-bold tracking-wider'>
                    <Link className='p-1 w-20 border-4 border-black hover:bg-black hover:text-white' to={"/"}>Home</Link>
                    <Link className='p-1 w-20 border-4 border-black hover:bg-black hover:text-white' to={"/quiz"}>Quiz</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
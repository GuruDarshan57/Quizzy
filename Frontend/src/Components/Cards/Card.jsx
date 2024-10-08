import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Category_context } from '../../Contexts/Category'

const Card = (props) => {
    const { category, setCategory } = useContext(Category_context)
    const nav = useNavigate()
    const handleClick = () => {
        nav("/quiz")
        setCategory(props.data.name)
        console.log(category)
    }
    return (
        <div onClick={handleClick} className='flex-col relative place-content-center border-4 border-black w-56 h-32 hover:-translate-y-2 transition-transform cursor-pointer mb-10 sm:mb-0 sm:left-0'>
            <div className='text-4xl'>
                {props.data.name}
            </div>
            <div className='flex justify-between w-full absolute bottom-0 px-2 pt-1 bg-black'>
                <div className='text-white text-sm tracking-wide'>
                    Level : {props.data.level}
                </div>
                <div>
                    <i className="cursor-pointer fa-solid fa-arrow-right" style={{ color: "#ffffff" }}></i>
                </div>
            </div>
        </div>
    )
}

export default Card
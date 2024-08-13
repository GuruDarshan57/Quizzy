import React, { useEffect, useState, useContext } from 'react'
import { Category_context } from '../../Contexts/Category';
import axios from 'axios';
import './Quiz.css'


const Quiz = () => {
    const { category, setCategory } = useContext(Category_context)
    useEffect(() => {
        getQuizItems()
    }, [])
    const [items, setItems] = useState("")
    const [item, setItem] = useState(0)
    const [loader, setLoader] = useState(true)
    const getQuizItems = async () => {
        const res = await axios.get(import.meta.env.VITE_BACKEND + `quiz/${category}`)
        setItems(res.data)
        setLoader(false)
    }
    return (
        <div className='flex w-full justify-center'>

            {loader ? <div className="loader"></div> : <div className='w-11/12 sm:w-3/4 flex justify-center items-center'>
                <div>
                    <i onClick={() => { item > 0 ? setItem(item - 1) : "" }} className={`fa-solid fa-square-caret-left relative right-2 text-4xl z-10 ${item == 0 ? "text-slate-600" : ""}`}></i>
                </div>
                <div className="flip-card w-11/12 sm:w-3/5 relative">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div>
                                <h4 className='uppercase relative bottom-4 font-bold tracking-wider'>{category}</h4>
                            </div>
                            <p className="title">{items ? (item + 1) + " ." + items[item].question : ""}</p>

                        </div>
                        <div className="flip-card-back">
                            <p className="title sm:px-8"> {items ? items[item].answer : ""}</p>

                        </div>
                    </div>
                </div>
                <div>
                    <i onClick={() => { items.length - 1 > item ? setItem(item + 1) : "" }} className={`fa-solid fa-square-caret-right relative left-2 text-4xl z-10 ${item == items.length - 1 ? "text-slate-600" : ""}`}></i>
                </div>
            </div>}
        </div>
    )
}

export default Quiz
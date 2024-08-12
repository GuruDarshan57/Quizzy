import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Quiz = () => {
    useEffect(() => {
        getQuizItems()
    }, [])
    const [items, setItems] = useState("")
    const [item, setItem] = useState(0)
    const getQuizItems = async () => {
        const res = await axios.get(import.meta.env.VITE_BACKEND + "quiz")
        console.log(res.data)
        setItems(res.data)
    }
    return (
        <div>
            <div>
                <button onClick={() => { item > 0 ? setItem(item - 1) : "" }}>Previous</button>
            </div>
            <div>
                {items ? items[item].question : ""}
            </div>
            <div>
                {items ? items[item].answer : ""}
            </div>
            <div>
                <button onClick={() => { items.length - 1 > item ? setItem(item + 1) : "" }}>Next</button>
            </div>
        </div>
    )
}

export default Quiz
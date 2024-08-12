import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Admin = () => {
    const [items, setItems] = useState("")
    const [item, setItem] = useState(0)
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    useEffect(() => {
        getQuizItems()
    }, [item])

    const getQuizItems = async () => {
        const res = await axios.get(import.meta.env.VITE_BACKEND + "quiz")
        // console.log(res.data)
        setItems(res.data)
        setItem(res.data.length)
    }
    const deleteItem = async (id) => {
        const res = await axios.delete(import.meta.env.VITE_BACKEND + `admin/delete/${id}`)
        setItem(item - 1)
    }
    const addItem = async (e) => {
        e.preventDefault()
        const payload = { question: question, answer: answer }
        const res = await axios.post(import.meta.env.VITE_BACKEND + `admin/add`, payload)
        setItem(item + 1)
    }
    return (
        <div>
            <div>
                <form >
                    <input type="text" placeholder='Question' value={question} onChange={(e) => { setQuestion(e.target.value) }} />
                    <input type="text" placeholder='Answer' value={answer} onChange={(e) => { setAnswer(e.target.value) }} />
                    <button type="submit" onClick={addItem}>Add</button>
                </form>
            </div>
            {items ? items.map(ele =>
                <div key={ele.id} style={{ display: "flex", gap: "15px" }}>
                    <div>{ }</div>
                    <div>{ele.question}</div>
                    <div>{ele.answer}</div>
                    <div><i className="fa-regular fa-pen-to-square"></i></div>
                    <div><i className="fa-solid fa-trash-can" onClick={() => deleteItem(ele.id)}></i></div>
                </div>
            ) : ""}

        </div>
    )
}

export default Admin
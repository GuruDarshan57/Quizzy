import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Admin = () => {
    const [items, setItems] = useState("")
    const [item, setItem] = useState(0)
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [topic, setTopic] = useState("")
    useEffect(() => {
        getQuizItems()
    }, [item])

    const getQuizItems = async () => {
        const res = await axios.get(import.meta.env.VITE_BACKEND + "admin/data")
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
        const payload = { question: question, answer: answer, topic: topic }
        const res = await axios.post(import.meta.env.VITE_BACKEND + `admin/add`, payload)
        setItem(item + 1)
    }
    return (
        <div className='my-28 w-full flex justify-center'>
            <div className='w-3/4'>
                <div className='flex-col py-2'>
                    <h4 className='font-bold text-3xl ml-4 mb-2'>Add a Question</h4>
                    <form className='flex'>
                        <input className='w-56 ml-4 p-1 mr-5 border-2 border-black' type="text" placeholder='Question' value={question} onChange={(e) => { setQuestion(e.target.value) }} />
                        <input className='w-56 p-1 mr-5 border-2 border-black' type="text" placeholder='Answer' value={answer} onChange={(e) => { setAnswer(e.target.value) }} />
                        <input className='w-56 p-1 mr-5 border-2 border-black' type="text" placeholder='Topic' value={topic} onChange={(e) => { setTopic(e.target.value) }} />
                        <button className='border-2 w-32 border-black hover:text-white hover:bg-black' type="submit" onClick={addItem}>Add</button>
                    </form>
                </div>

                <div className='flex-col mt-10'>
                    <h4 className='font-bold text-3xl ml-4 mb-2'>Data Base</h4>
                    <div className='flex ml-4 mb-4' style={{ display: "flex", gap: "15px" }}>

                        <div className='flex-2 p-1 border-2 border-black'>TOPIC</div>
                        <div className='flex-1 p-1 border-2 border-black'>QUESTION</div>
                        <div className='flex-1 p-1 border-2 border-black'>ANSWER</div>
                        <div className='flex-9 p-1 border-2 border-black'><i className="fa-regular fa-pen-to-square"></i></div>
                        <div className='flex-9 p-1 border-2 border-black'><i className="fa-solid fa-trash-can" ></i></div>
                    </div>
                    {items ? items.map(ele =>
                        <div className='flex ml-4 mb-4' key={ele.id} style={{ display: "flex", gap: "15px" }}>
                            <div className='flex-2 border-2 border-black'>{ele.topic}</div>
                            <div className='flex-1 border-2 border-black'>{ele.question.slice(0, 30)}</div>
                            <div className='flex-1 border-2 border-black'>{ele.answer.slice(0, 30) + "..."}</div>
                            <div className='flex-9 border-2 border-black'><i className="fa-regular fa-pen-to-square"></i></div>
                            <div className='flex-9 border-2 border-black'><i className="fa-solid fa-trash-can" onClick={() => deleteItem(ele.id)}></i></div>
                        </div>
                    ) : ""}
                </div>
            </div>

        </div >
    )
}

export default Admin
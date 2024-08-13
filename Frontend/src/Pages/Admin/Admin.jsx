import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DB_Card from '../../Components/DB_Card.jsx/DB_Card';

const Admin = () => {
    const [items, setItems] = useState("")
    const [item, setItem] = useState(0)
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [topic, setTopic] = useState("")
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        getQuizItems()
    }, [item])

    const getQuizItems = async () => {
        setLoader(true)
        const res = await axios.get(import.meta.env.VITE_BACKEND + "admin/data")
        // console.log(res.data)
        setItems(res.data)
        setItem(res.data.length)
        setLoader(false)
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
            {loader ? <div className="loader"></div> : <div className='w-3/4'>
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
                    <div className='flex ml-4 mb-4 text-center tracking-wider' style={{ display: "flex", gap: "15px" }}>

                        <div className='w-20 p-1 bg-black text-white'>TOPIC</div>
                        <div className='w-80 p-1 bg-black text-white'>QUESTION</div>
                        <div className='w-80 p-1 bg-black text-white'>ANSWER</div>
                        <div className='w-20 p-1 bg-black text-white'><i className="fa-regular fa-pen-to-square"></i></div>
                        <div className='w-20 p-1 bg-black text-white'><i className="fa-solid fa-trash-can" ></i></div>
                    </div>
                    {items ? items.map(ele => <DB_Card data={ele} func={{ f1: deleteItem }} />
                        // <div className='flex ml-4 mb-4 text-center' key={ele.id} style={{ display: "flex", gap: "15px" }}>
                        //     <div className='w-20 border-2 border-black'>{ele.topic}</div>
                        //     <div className='w-80 border-2 border-black'>{ele.question.slice(0, 30)}</div>
                        //     <div className='w-80 border-2 border-black'>{ele.answer.slice(0, 30) + "..."}</div>
                        //     <div className='w-20 border-2 border-black'><i className="fa-regular fa-pen-to-square"></i></div>
                        //     <div className='w-20 border-2 border-black cursor-pointer' onClick={() => deleteItem(ele.id)}><i className="fa-solid fa-trash-can" ></i></div>
                        // </div>
                    ) : ""}
                </div>
            </div>
            }
        </div >
    )
}

export default Admin
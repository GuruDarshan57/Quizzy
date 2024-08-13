import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DB_Card from '../../Components/DB_Card.jsx/DB_Card';
import { toast } from 'react-toastify'
const Admin = () => {
    const [items, setItems] = useState("")
    const [item, setItem] = useState(0)
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [topic, setTopic] = useState("")
    const [loader, setLoader] = useState(true)
    const [change, setChange] = useState(0)

    useEffect(() => {
        getQuizItems()
    }, [item, change])

    const Edit = () => {
        setChange(change + 1)
    }

    const getQuizItems = async () => {
        try {
            setLoader(true)
            const res = await axios.get(import.meta.env.VITE_BACKEND + "admin/data")
            // console.log(res.data)
            setItems(res.data)
            setItem(res.data.length)
            setLoader(false)
        } catch (err) {
            console.log(err)
        }
    }
    const deleteItem = async (id) => {
        try {
            const res = await axios.delete(import.meta.env.VITE_BACKEND + `admin/delete/${id}`)

            if (res.status === 200) {
                toast.success(res.data.msg)
                setItem(item - 1)
            }
            else {
                toast.warning(res.data.msg)
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    const addItem = async (e) => {
        e.preventDefault()
        if (topic && question && answer) {
            try {
                const payload = { question: question, answer: answer, topic: topic }
                const res = await axios.post(import.meta.env.VITE_BACKEND + `admin/add`, payload)

                if (res.status === 200) {
                    toast.success(res.data.msg)
                    setItem(item + 1)
                    setAnswer()
                    setQuestion()
                    setTopic()
                } else {
                    toast.warning(res.data.msg)
                }
            }
            catch (err) {
                console.log(err)
            }
        } else {
            toast.warning("All fields needed")
        }

    }
    return (
        <div className='my-28 w-full flex justify-center'>
            {loader ? <div className="loader"></div> : <div className='w-11/12 sm:w-3/4'>
                <div className='w-full flex-col py-2'>
                    <h4 className='font-bold text-3xl sm:ml-4 mb-2'>Add Question</h4>
                    <form className='flex flex-col sm:flex-row justify-center items-center sm:justify-normal '>

                        <input className='w-11/12 sm:w-56 mb-5 sm:mb-0 sm:ml-4 p-1 mr-5 border-2 border-black' type="text" placeholder='Question' value={question} onChange={(e) => { setQuestion(e.target.value) }} />
                        <input className='w-11/12 sm:w-56 mb-5 sm:mb-0 p-1 mr-5 border-2 border-black' type="text" placeholder='Answer' value={answer} onChange={(e) => { setAnswer(e.target.value) }} />
                        <input className='w-11/12 sm:w-56 mb-5 sm:mb-0 p-1 mr-5 border-2 border-black' type="text" placeholder='Topic' value={topic} onChange={(e) => { setTopic(e.target.value) }} />
                        <button className='border-2 w-32 border-black hover:text-white hover:bg-black p-1 self-start sm:self-auto ml-1' type="submit" onClick={addItem}>Add</button>
                    </form>
                </div>

                <div className='flex-col mt-10 w-full'>
                    <h4 className='font-bold text-3xl sm:ml-4 mb-2'>Data Base</h4>
                    <div className='flex sm:ml-4 mb-4 text-center tracking-wider' style={{ display: "flex", gap: "15px" }}>

                        <div className='w-20 p-1 bg-black text-white'>TOPIC</div>
                        <div className='w-80 p-1 bg-black text-white'>QUESTION</div>
                        <div className='w-80 p-1 bg-black text-white'>ANSWER</div>
                        <div className='w-20 p-1 bg-black text-white hidden sm:inline'><i className="fa-regular fa-pen-to-square"></i></div>
                        <div className='w-20 p-1 bg-black text-white'><i className="fa-solid fa-trash-can" ></i></div>
                    </div>
                    {items ? items.map(ele => <DB_Card key={ele.id} data={ele} func={{ f1: deleteItem, f2: Edit }} />
                    ) : ""}
                </div>
            </div>
            }
        </div >
    )
}

export default Admin
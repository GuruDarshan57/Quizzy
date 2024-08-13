import React, { useState } from 'react'
import axios from 'axios'

const DB_Card = (props) => {
    const [equestion, setEquestion] = useState(props.data.question)
    const [eanswer, setEanswer] = useState(props.data.answer)
    const [etopic, setEtopic] = useState(props.data.topic)
    const [edit, setEdit] = useState(false)

    const editItem = async (id) => {
        const payload = { question: equestion, answer: eanswer, topic: etopic }
        const res = await axios.patch(import.meta.env.VITE_BACKEND + `admin/edit/${props.data.id}`, payload)
        setEdit(false)
    }
    return (
        <div className='flex ml-4 mb-4 text-center' style={{ display: "flex", gap: "15px" }}>
            <input className={`${edit ? "" : "hidden"} w-20 border-2 border-green-700 px-2`} type="text" value={etopic} onChange={(e) => { setEtopic(e.target.value) }} />
            <div className={`${!edit ? "" : "hidden"} w-20 border-2 border-black`}>{props.data.topic}</div>

            <input className={`${edit ? "" : "hidden"} w-80 border-2 border-green-700 px-2`} type="text" value={equestion} onChange={e => setEquestion(e.target.value)} />
            <div className={`${!edit ? "" : "hidden"} w-80 border-2 border-black`}>{props.data.question.slice(0, 30)}</div>

            <input className={`${edit ? "" : "hidden"} w-80 border-2 border-green-700 px-2`} type="text" value={eanswer} onChange={e => setEanswer(e.target.value)} />
            <div className={`${!edit ? "" : "hidden"} w-80 border-2 border-black`}>{props.data.answer.slice(0, 30) + "..."}</div>
            <div className='w-20 border-2 border-black' onClick={() => setEdit(!edit)}><i className="fa-regular fa-pen-to-square"></i></div>
            <div className={`${!edit ? "" : "hidden"} w-20 border-2 border-black cursor-pointer`} onClick={() => props.func.f1(props.data.id)}><i className="fa-solid fa-trash-can" ></i></div>
            <button className={`${edit ? "" : "hidden"} bg-black text-white w-20 tracking-widest border-2 border-black hover:bg-white hover:text-black`} onClick={editItem}>EDIT</button>
        </div>
    )
}

export default DB_Card
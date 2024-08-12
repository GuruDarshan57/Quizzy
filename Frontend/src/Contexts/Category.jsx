import React, { createContext, useState } from 'react'

const Category_context = createContext()
const Category = (props) => {
    const [category, setCategory] = useState("React")
    const context = { category, setCategory }
    return (
        <Category_context.Provider value={context}>{props.children}</Category_context.Provider>
    )
}

export default Category
export { Category_context }
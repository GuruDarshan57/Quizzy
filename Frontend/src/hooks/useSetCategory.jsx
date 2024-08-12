import React, { useState } from 'react'

const useSetCategory = () => {
    const [category, setCategory] = useState("react")
    return { category, setCategory }
}

export default useSetCategory
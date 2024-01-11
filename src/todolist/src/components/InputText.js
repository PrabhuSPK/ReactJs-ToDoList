import React,{ useState } from 'react'

const InputText = () => {
    const [setText,secondValue] = useState("first")

    const prints = () => {
        secondValue("second")
    }

    const handleChange = (event) => {
        const newVar = event.target.value;
        secondValue(newVar)
    }
  return (
    <div className='inputtext'>
        <input type="text" onChange={handleChange} />
        <button type="submit" onClick={prints}>Add</button>
        <p>{setText}</p>
    </div>
  )
}

export default InputText
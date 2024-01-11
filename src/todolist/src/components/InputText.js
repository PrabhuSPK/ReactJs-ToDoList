import React,{ useState } from 'react'

const InputText = () => {
    const [setText,secondValue] = useState("first")

    const prints = () => {
        secondValue("second")
    }

  return (
    <div className='inputtext'>
        <input type="text" />
        <button type="submit" onClick={prints}>Add</button>
        <p>{setText}</p>
    </div>
  )
}

export default InputText
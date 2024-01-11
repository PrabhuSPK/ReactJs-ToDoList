import React, { useState } from 'react'

const InputText = (props) => {
    const [InputText, secondValue] = useState("")

    // const prints = () => {
    //     secondValue("second")
    // }

    const handleChange = (event) => {
        const newVar = event.target.value;
        secondValue(newVar)
    }
    return (
        <div className="form">
            <input type="text" onChange={handleChange} value={InputText} />
            <button 
            onClick={() => {
            props.addItem(InputText); 
            secondValue(""); 
            }}
            >
                <span>Add</span>
                </button>
            {/* <p>{InputText}</p> */}
        </div >
    )
}

export default InputText
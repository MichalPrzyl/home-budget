import { useState } from "react"
import axios from 'axios';


const Buttons = (props) => {
    const [nameInput, setNameInput] = useState("")

    const handleAddCategory = async () => {
        const sendData = {name: nameInput}
        const response = await axios.post('http://127.0.0.1:8000/category', sendData)
        setNameInput("");
        props.getData()
    }

    const changeNameInput = (e) => {
        setNameInput(e.target.value);
    }

    return (
        <div className="button-wrapper">
            <div onClick={handleAddCategory}>Dodaj</div>
            <div>Usuń</div>
            Nazwa: <input value={nameInput} onChange={changeNameInput}></input>
        </div>
    )
}
export default Buttons;
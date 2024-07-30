import { useState } from "react"

export default function NewTask({AddTask}){
const[enteredValue, setEnteredValue] = useState('')
    function getInputValue(event){
        setEnteredValue(event.target.value)
    }

    function handleClick(){
        if(enteredValue.trim()==='') return ;
        AddTask(enteredValue);
        setEnteredValue('')
        
    }

    return <div className=" w-2/3 flex justify-between"> 
        <input type="text" 
        className="w-64 py-1 px-1 bg-stone-200 my-2 rounded-sm" 
        onChange={getInputValue} 
        value={enteredValue}/>
        <button className="tracking-tighter font-semibold" onClick={handleClick}>Add Task</button>

    </div>
}
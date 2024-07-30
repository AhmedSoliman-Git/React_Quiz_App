import NewTask from './NewTask.jsx'
export default function TaskContainer({AddTask,tasks,DeleteTask}){
    return <div>
        <h1 className="text-2xl font-bold text-stone-700 mt-3">Tasks</h1>
        <NewTask AddTask={AddTask}/>
        {tasks.length == 0 && <p className="mt-3 text-stone-800">There is no Tasks added yet.</p>}
        <ul className='bg-stone-200 rounded-md w-2/3 mt-6'>
        {tasks.length > 0 && tasks.map((task)=>{
            return (
                <li key={task.task_id} className='flex justify-between items-center my-3 p-2'>
                <span className='text-md font-semibold'>{task.task}</span>
                <button className='hover:text-red-600 font-semibold p-1' onClick={()=>DeleteTask(task.task_id)}>clear</button>
                </li>
            )
        })}
        </ul>
    </div>
} 
import TaskContainer from "./TaskContainer"
export default function Tasks({selectedProjectID,onDelete,AddTask,tasks,DeleteTask}){
const Due_Date = new Date(selectedProjectID.DUE_DATE).toLocaleDateString('en-US',{
    year:'2-digit',
    month:'long',
    day:'numeric'
})
    return <div className="absolute left-1/3 top-1/4 w-[40vw]">
        <div className="flex items-center justify-between ">
            <h1 className="text-4xl font-bold py-3">{selectedProjectID.Title}</h1>
            <button className="font-semibold" onClick={onDelete}>Delete</button>

        </div>
        <p className="text-md text-gray-500 pb-3">{Due_Date}</p>
        <p className=" whitespace-pre-line pb-3">
            {selectedProjectID.DESCREPTION}
        </p>
        <p className="w-full h-[3px] bg-slate-300"></p>

            <TaskContainer AddTask={AddTask} tasks={tasks} DeleteTask={DeleteTask}/>
    </div>


}
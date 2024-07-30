export default function Side({onChangeMain,Projects,selectedProject,mainState}){
    return (
        <div className="pt-20 px-10 bg-black w-1/4 relative top-10 rounded-tr-2xl h-[95.1vh] ">
        <h1 className="text-gray-300 text-3xl font-bold">YOUR PROJECTS</h1>
        <button className="py-3 px-6 mt-9 text-lg flex justify-center items-center rounded-lg text-neutral-400 bg-neutral-800 font-semibold hover:bg-stone-900" onClick={onChangeMain}>+ Add Project</button>
        <ul className="mt-8 ">
                {Projects.map((project)=>{
                    let cssClasses = "px-4 py-2 my-2 cursor-pointer w-full text-left hover:bg-stone-900"
                    if(project.ProjectID == mainState.project_status){
                        cssClasses += ' bg-stone-800 text-stone-200'
                    } else {
                        cssClasses += ' text-stone-400'
                    }
                return(
                <li key={project.ProjectID} 
                className={cssClasses} onClick={()=>selectedProject(project.ProjectID)}>{project.Title}</li>
                )})}
        </ul>
    </div>
    )
}


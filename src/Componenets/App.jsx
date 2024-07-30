import Item from "./Item.jsx";
import MainPage from "./MainPage.jsx";
import Modal from "./Modal.jsx";
import Side from "./Side.jsx";
import { useState } from 'react';
import Tasks from "./Tasks.jsx";

function App() {
const [projectState , setProjectState] = useState({
  project_status : undefined ,
  projects : [] ,
  tasks : []
})

function changeMain(){
  setProjectState(prevState => { 
    return {
      ...prevState ,
      project_status : null ,
    }
  })
}
function cancelChangeMain() {
  setProjectState(prevState => { 
    return {
      ...prevState ,
      project_status : undefined ,
    }
  })
}

function getContent(project){
setProjectState(prevState=> {
  return {
    ...prevState ,
    projects : [...prevState.projects , project] ,
    project_status : undefined
  }
})
}

function AddTask(taskText){
  const newTask = {
    task : taskText ,
    task_id: Math.random(),
    project_ID : projectState.project_status
  }
  setProjectState(prevState=> {
    return {
      ...prevState ,
      tasks : [...prevState.tasks , newTask]
    }
  })
}

function handleDeleteTask(id_task){
  setProjectState(prevState=> {
    return {
      ...prevState ,
      tasks : prevState.tasks.filter((task)=> task.task_id !== id_task)
    }
  })
}

function handleSelectedProject(id){
  setProjectState(prevState=> {
    return {
      ...prevState ,
      project_status : id
    }
  })
}

function handleDeletionProject(){
  setProjectState(prevState=> {
    return {
      ...prevState ,
      project_status : undefined,
      projects : prevState.projects.filter((project)=> project.ProjectID !== projectState.project_status)
    }
  })
}

let selectedState = projectState.projects.find((project)=> project.ProjectID === projectState.project_status)
let content = 
          <Tasks selectedProjectID={selectedState}
          onDelete={handleDeletionProject}
          AddTask={AddTask}
          tasks={projectState.tasks}
          DeleteTask={handleDeleteTask}/> 

  if(projectState.project_status === undefined){
    content = <MainPage onChangeMain = {changeMain}/>
  } else if(projectState.project_status === null){
    content = <Item onChangeMain = {cancelChangeMain} onGetContent = {getContent}/>
  }

  return (
    <section className="h-screen w-full flex gap-80 ">
      <Side onChangeMain = {changeMain}
      Projects = {projectState.projects}
      selectedProject={handleSelectedProject}
      mainState={projectState}
        />
      {content}
    </section>
  )
}

export default App ;

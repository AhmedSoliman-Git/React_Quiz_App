export default function MainPage({onChangeMain}){
        return <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-1/2 ml-36 mt-14">
        <img className="w-20" src="../images/no-projects.png" alt="Paper and pen img"/>
        <div className="text-center">
            <h1 className="text-neutral-600 font-bold text-3xl py-2 ">No Project Selected</h1>
            <p className="w-full text-xl text-gray-500 py-4">Select a Project or get started with a new one</p>
            <button className="py-3 px-5 bg-neutral-800 text-neutral-300 rounded-lg  tracking-wide mt-6 text-xl" onClick={onChangeMain}>Create new project</button>
        </div>
    </div> 
}


import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal.jsx";
export default function Item ({onChangeMain , onGetContent}){
    const Title = useRef();
    const DESCREPTION = useRef();
    const DUE_DATE = useRef();
    const dialog = useRef();
    function setValue()
    {
        const ProjectID = Math.random();
        const enteredTitle = Title.current.value;
        const entered_DESCREPTION = DESCREPTION.current.value;
        const entered_DUE_DATE = DUE_DATE.current.value;
        if(enteredTitle.trim() === '' || entered_DESCREPTION.trim() === '' || entered_DUE_DATE.trim() === ''){
            dialog.current.open();
            return
        }

        onGetContent({
            Title : enteredTitle ,
            DESCREPTION : entered_DESCREPTION ,
            DUE_DATE : entered_DUE_DATE,
            ProjectID : ProjectID 

        })
    }

    return (
        <>
    <Modal ref={dialog}>
        <h2 className="text-xl font-bold text-stone-600">Invalid Input</h2>
        <p className=" font-semibold leading-6 my-5">may be you forget to put an invalid inputs inside this Fields</p>
        <p className="font-semibold">Please enter valid inputs.</p>
    </Modal>
    <div className="w-1/2 h-[50]vh absolute left-1/3 top-48">
    <div className="flex justify-end gap-1">
    <button className="px-9 py-3 rounded-lg text-lg font-semibold tracking-wide" onClick={onChangeMain}>Cancel</button>
    <button className="px-9 py-3 bg-black text-white rounded-lg text-lg font-semibold tracking-wide hover:bg-stone-900" onClick={setValue}>Save</button>
    </div>
    <Input label ="Title" type="text" id="Text" ref={Title}/>
    <Input label="DESCREPTION" textArea id="DESCREPTION" ref={DESCREPTION}/>
    <Input label="DUE DATE" type="Date" id="DUE DATE" ref={DUE_DATE} />
    </div>
    </>
    )
}



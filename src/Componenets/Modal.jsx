import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button.jsx';
const Modal = forwardRef(function Modal({children, ...props},ref){
    const Dialog = useRef() ;
    useImperativeHandle(ref,()=>{
        return {
            open(){
                Dialog.current.showModal();
            }
        }
    })
    return createPortal (
        <dialog ref={Dialog} className='rounded-md backdrop:bg-stone-900/90'>
            <form method="dialog" {...props} className='p-5'>
                {children}
                <div className='text-end w-full'>
                <button className=' bg-black text-white px-3 py-2 rounded-md my-3'> close </button>
                </div>
            </form>
        </dialog>
    , document.getElementById('ModalId')
    )
})
export default Modal ;
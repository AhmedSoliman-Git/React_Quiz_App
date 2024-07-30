import { forwardRef } from 'react'
const Input = forwardRef(function Input({label,textArea,id,...props},ref){
let classs="py-2 px-1 text-xl text-neutral-800 bg-neutral-300 outline-none border-b-4 focus:border-black"

return (
    <div className="flex flex-col w-full">
                <div className="w-full flex flex-col">
                    <label htmlFor={id} {...props} className="text-lg font-bold text-gray-600 mb-2" >{label}</label>
                    {textArea ? <textarea id={id} className={classs} {...props} ref={ref}/> : <input id={id} className={classs} {...props} ref={ref}/>}
                </div>
    </div>
    )
    }
)
export default Input ;

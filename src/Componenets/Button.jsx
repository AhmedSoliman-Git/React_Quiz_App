export default function Button({children,...props}){
    return(
        <button className="bg-black text-white font-md py-2 px-3 rounded-lg mt-5" {...props}>{children}</button>
    )
}
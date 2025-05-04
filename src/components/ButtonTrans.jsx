const ButtonTrans = ({label}) => {
    return(
        <>
            <button className="px-3 py-2 w-fit bg-transparent hover:scale-105 duration-500 rounded border-1 border-zinc-300 cursor-pointer">{label}</button>
        </>
    )
}

export default ButtonTrans
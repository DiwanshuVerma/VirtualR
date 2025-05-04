const ButtonGradient= ({label}) => {
    return(
        <>
            <button className="px-3 py-2 w-fit bg-gradient-to-r hover:scale-105 duration-500 from-green-600 to-green-900 rounded border-zinc-300 cursor-pointer">{label}</button>
        </>
    )
}

export default ButtonGradient
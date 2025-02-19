function NewNote() {
    return (
    <div className={`w-full h-full flex flex-col gap-5`}>
        <div className={`w-full`}>
            <input type="text" id="title" className={`w-full h-10 outline-none bg-white rounded px-3 text-sm font-bold`} placeholder="Note Title"/>
        </div>
    </div>
    )
}

export default NewNote;
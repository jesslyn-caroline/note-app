function Home() {
    return (
    <div className={`w-full h-full flex flex-col gap-5`}>
        <div className={`w-full`}>
            <input type="text" id="search" className={`w-full h-10 outline-none bg-white rounded px-3 text-sm`} placeholder="Search note"/>
        </div>
    </div>
)}

export default Home;
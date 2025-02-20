import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Layout() {
    const [deviceSize, setDeviceSize] = useState<number>(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setDeviceSize(window.innerWidth));
    }, []);


    const [activeBar, setActiveBar] = useState<boolean>(false);

    const handleActiveBar = ():void => {
        setActiveBar(prev => !prev);
    }

    const [activeMenu, setActiveMenu] = useState<number>(1);
    // 1 : Home
    // 2 : New Note
    // 3 : Public
    // 4 : Archive

    const handleActiveMenu = (num:number):void => {
        setActiveMenu(num);
    }
    
    return (
        <>
        {deviceSize < 768? 
        <div className={`max-w-[1524px] max-h-[1024px] w-screen h-screen bg-linear-30 from-[#4E65FF] to-[#92EFFD] flex flex-col overflow-hidden`}>
            <nav className={`w-full h-fit bg-white p-3 flex justify-between drop-shadow-lg sticky`}>
                <div className={`w-10 h-10 bg-gray-100 p-2 rounded flex items-center justify-center`} onClick={handleActiveBar}>
                    <i className={`ri-menu-line text-2xl`}></i>
                </div>
                {activeMenu == 1 ? 
                <Link to='/new-note' className={`w-10 h-10 bg-gray-100 p-2 rounded flex items-center justify-center`} onClick={() => handleActiveMenu(2)}>
                    <i className={`ri-sticky-note-add-line text-2xl`}></i>
                </Link> : <></>}
            </nav>

            <div className={`w-9/10 h-full absolute bg-white z-10 origin-top-right left-0 transition-transform duration-300 ${activeBar? '' : '-translate-x-full'} flex flex-col py-3 px-5 gap-4`}>
                <div className={`w-10 h-10 bg-gray-100 p-2 rounded flex items-center justify-center`} onClick={handleActiveBar}>
                    <i className={`ri-close-line text-2xl`}></i>
                </div>
                <Link to='/new-note' className={`border-b border-neutral-400 pb-2 ${activeMenu == 2 ? 'font-semibold' : ''} cursor-pointer`} onClick={() => { handleActiveMenu(2); handleActiveBar() }}>
                    Create new note
                </Link>
                <Link to='/' className={`border-b border-neutral-400 pb-2 ${activeMenu == 1 ? 'font-semibold' : ''} cursor-pointer`} onClick={() => { handleActiveMenu(1); handleActiveBar() }}>
                    My notes
                </Link>
                <Link to='/public' className={`border-b border-neutral-400 pb-2 ${activeMenu == 3 ? 'font-semibold' : ''} cursor-pointer`} onClick={() => { handleActiveMenu(3); handleActiveBar() }}>
                    Public notes
                </Link>
                <Link to='/archive' className={`border-b border-neutral-400 pb-2 ${activeMenu == 4 ? 'font-semibold' : ''} cursor-pointer`} onClick={() => { handleActiveMenu(4); handleActiveBar() }}>
                    Archive notes
                </Link>
            </div>
            <div className={`w-full h-full absolute bg-black ${activeBar? 'opacity-50 z-1' : 'opacity-0 -z-1'}`}></div>
            <div className={`w-full h-6`}></div>
            <div className={`w-full h-full p-3`}>
                <Outlet/>
            </div>
        </div>
            :
        <div className={`max-w-[1524px] max-h-[1024px] w-screen h-screen bg-linear-30 from-[#4E65FF] to-[#92EFFD] flex flex-row`}>
            <nav className={`w-fit h-full bg-white p-2 flex flex-col items-center justify-between`}>
                <div className={`w-10 h-10 bg-gray-100 p-2 rounded flex items-center justify-center text-xl`}>
                    M
                </div>
                <div className={`flex flex-col gap-2`}>
                    <div className={`w-10 h-10 bg-gray-100 p-2 rounded flex items-center justify-center`}>
                        <Link to="/new-note" className={`ri-sticky-note-add-line text-2xl`} /> 
                    </div>
                    <div className={`w-10 h-10 bg-gray-100 p-2 rounded flex items-center justify-center`}>
                        <Link to="/" className={`ri-home-5-line text-2xl`} />
                    </div>
                    <div className={`w-10 h-10 bg-gray-100 p-2 rounded flex items-center justify-center`}>
                        <Link to="/public" className={`ri-globe-line text-2xl`} />
                    </div>
                    <div className={`w-10 h-10 bg-gray-100 p-2 rounded flex items-center justify-center`}>
                        <Link to="/archive" className={`ri-archive-line text-2xl`} />
                    </div>
                </div> 
                <div className={`flex flex-col gap-2`}>
                    <div className={`w-10 h-10 bg-gray-100 p-2 rounded flex items-center justify-center`}>
                        <i className={`ri-equalizer-line text-2xl`} />
                    </div>
                    <div className={`w-10 h-10 bg-gray-100 p-2 rounded flex items-center justify-center`}>
                        <i className={`ri-logout-box-r-line text-red-500 text-2xl`} />
                    </div>
                </div>        
            </nav>
            <div className={`w-full h-full p-7`}>
                <Outlet />
            </div> 
        </div>  
            }
        </>
    );
}

export default Layout;
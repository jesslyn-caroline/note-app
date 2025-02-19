import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
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
            <div className={`w-full h-full`}>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
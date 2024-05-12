import React, { useContext, useState } from 'react';
import { createContext } from 'react';

export const SidebarContext = createContext();

function Sidebar({ children }) {
    const [toggle, setToggle] = useState(true);


    return (
        <aside className='h-screen'>
            <nav className={` h-full flex flex-col bg-white border-r shadow-sm overflow-hidden transition-all ${toggle?"w-[100%]":"w-[100%]"}`}>
                <div className='p-4 pb-2 flex  items-center'>
                    <img src="/Images/Logo.jpg" height={85} width={85} className={`overflow-hidden transition-all ${toggle?"w-85":"w-0"}`} alt="Logo" />
                    <span className={`${toggle?"w-85 ml-4":"w-0 hidden"} `}>Trekkers</span>
                    {toggle ? (
                        <div className={`cursor-pointer ml-5 ${toggle?"w-85 ml-3":"w-0"}`} onClick={() => setToggle(!toggle)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                            </svg>
                        </div>
                    ) : (
                        <div className='cursor-pointer ml-3' onClick={() => setToggle(!toggle)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    )}
                </div>
                <SidebarContext.Provider value={{toggle}}>
                <ul className='flex-1 px-3'>{children}</ul>
                </SidebarContext.Provider>
               
            </nav>
        </aside>
    );
}

function SidebarItem({ icon, text,active,onClick }) {
    const{toggle}=useContext(SidebarContext)
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
            active ? "bg-gradient-to-tr from-green-200 to-green-100" : "hover:bg-green-50"
        }`}  onClick={onClick}>
            {icon}
            <span className={`overflow-hidden transition-all ${toggle?"w-85 ml-4":"w-0"}`}>{text}</span>
        </li>
    );
}

export default Sidebar;
export { SidebarItem };


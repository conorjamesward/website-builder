import { useState } from "react";
import Link from "next/link";

export default function Header({links, branding}) {

    const [show, setShow] = useState(null);

    return (
            <div className="bg-gray-200 h-full w-full">
                {/* Code block starts */}
                <nav className="w-full bg-white hidden xl:block shadow">
                    <div className="container px-6 h-16 flex justify-between items-center lg:items-stretch mx-auto">
                        <div className="flex items-center">
                            <div className="mr-10 flex items-center flex-row">
                                {branding.icon}
                                <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">{branding.title}</h3>
                            </div>
                            <ul className="hidden xl:flex items-center h-full">
                                {
                                links.map(link => 
                                        <li key={link.title}>
                                            <Link className="cursor-pointer py-4 flex items-center text-sm hover:text-indigo-700 text-gray-800 px-10 tracking-normal transition duration-150 ease-in-out font-bold"
                                            href={link.url}>{link.title}</Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="h-full hidden xl:flex items-center justify-end">
                            <div className="h-full flex">
                                <div className="w-20 h-full flex items-center justify-center border-l border-r border-gray-300 text-gray-400">
                                    {/*icon here*/}
                                </div>
                                <div className="w-20 h-full flex items-center justify-center border-r border-gray-300 cursor-pointer text-gray-400">
                                    {/*icon here*/}
                                </div>
                                <div className="w-20 h-full flex items-center justify-center border-r border-gray-300 cursor-pointer text-gray-400">
                                    {/*icon here*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Navbar */}
                <nav>
                    <div className="py-4 px-6 w-full flex xl:hidden items-center bg-white fixed top-0 z-40">
                        <div id="menu" className="text-gray-800" onClick={() => setShow(!show)}>
                            {show ? (
                                " "
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1={4} y1={6} x2={20} y2={6} />
                                    <line x1={4} y1={12} x2={20} y2={12} />
                                    <line x1={4} y1={18} x2={20} y2={18} />
                                </svg>
                            )}
                        </div>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    <div className={show ? "absolute xl:hidden w-full h-full transform -translate-x-0 z-40" : "absolute xl:hidden w-full h-full transform -translate-x-full z-40"} id="mobile-nav">
                        <div className="bg-gray-800 opacity-50 w-full h-full" onClick={() => setShow(!show)} />
                        <div className="w-64 z-40 fixed overflow-y-auto top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                            <div className="px-6 h-full">
                                <div className="flex flex-col h-full w-full">
                                    <div className="mt-6 flex w-full items-center justify-between">
                                        <div className="flex items-center">
                                            {branding.icon}
                                            <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3">{branding.title}</h3>
                                        </div>
                                        <div id="cross" className="text-gray-800" onClick={() => setShow(!show)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <line x1={18} y1={6} x2={6} y2={18} />
                                                <line x1={6} y1={6} x2={18} y2={18} />
                                            </svg>
                                        </div>
                                    </div>
                                    <ul className="f-m-m">
                                        {
                                            links.map(link => 
                                                <Link key={`mobile-${link.title}`} href={link.url} className="cursor-pointer">
                                                    <li className="text-gray-800 pt-8">
                                                        <div className="flex items-center">
                                                            <p className="text-indigo-700 xl:text-base text-base ml-3">{link.title}</p>
                                                        </div>
                                                    </li>
                                                </Link>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Sidebar ends */}
                {/* Code block ends */}
            </div>
    );
}
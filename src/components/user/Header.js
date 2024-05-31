import React from "react"
import Image from "next/image"

export default function Header() {
    return (
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <img src="/images/logoSoftLancer.svg" alt="logo" className="h-10 my-4 pl-2"/>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburclassNameger" name="hamburger" type="button" class="block absolute right-4 lg:hidden">
                            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>
                        <nav id="nav-menu" className="hidden absolute py-5 bg-light shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#home" className="text-base text-primary py-2 mx-8 flex group-hover:text-active lg:mx-5">Home</a>
                                </li>
                                <li className="group">
                                    <a href="#findJob" className="text-base text-primary py-2 mx-8 flex group-hover:text-active lg:mx-5">Find Job</a>
                                </li>
                                <li className="group">
                                    <a href="#applyJob" className="text-base text-primary py-2 mx-8 flex group-hover:text-active lg:mx-5">Apply Job</a>
                                </li>
                                <li className="group">
                                    <a href="#history" className="text-base text-primary py-2 mx-8 flex group-hover:text-active lg:mx-5">History</a>
                                </li>
                                <li className="group">
                                    <a href="#account" className="text-base text-primary py-2 mx-8 flex group-hover:text-active lg:mx-5">Login</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
    
}

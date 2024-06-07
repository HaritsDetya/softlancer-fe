import React from "react";

export default function ActiveUser() {
    return (
        <div className="fixed left-0 top-0 w-64 h-full bg-light py-2 pl-4 z-50 sidebar-menu transition-transform">
            <div className="pl-5">
                <img src="/public/image/logoSoftLancer.svg" alt="logo" className="h-[55px] my-4"/>
                <div className="flex flex-wrap pt-7">
                    <div className="container relative group overflow-hidden py-3 my-2 flex items-center rounded-s-md duration-300 cursor-pointer active:bg-background hover:bg-background">
                        <div className="absolute left-0 h-full w-2 cursor-pointer duration-300 group-active:bg-primary group-hover:bg-primary"></div>
                        <span className="">Dashboard</span>
                    </div>
                    <div className="container relative group overflow-hidden py-3 my-2 flex items-center rounded-s-md duration-300 cursor-pointer active:bg-background hover:bg-background">
                        <div className="absolute left-0 h-full w-2 cursor-pointer duration-300 group-active:bg-primary group-hover:bg-primary"></div>
                        <span className="">Active Users</span>
                    </div>
                    <div className="container relative group overflow-hidden py-3 my-2  flex items-center rounded-s-md duration-300 cursor-pointer active:bg-background hover:bg-background">
                        <div className="absolute left-0 h-full w-2 cursor-pointer duration-300 group-active:bg-primary group-hover:bg-primary"></div>
                        <span className="">Companys Management</span>
                    </div>
                    <div className="container relative group overflow-hidden py-3 my-2 flex items-center rounded-s-md duration-300 cursor-pointer active:bg-background hover:bg-background">
                        <div className="absolute left-0 h-full w-2 cursor-pointer duration-300 group-active:bg-primary group-hover:bg-primary"></div>
                        <span className="">Projects Management</span>
                    </div>
                    <div className="container relative group overflow-hidden py-3 my-2 flex items-center rounded-s-md duration-300 cursor-pointer active:bg-background hover:bg-background">
                        <div className="absolute left-0 h-full w-2 cursor-pointer duration-300 group-active:bg-primary group-hover:bg-primary"></div>
                        <span className="">Handle applications</span>
                    </div>
                    <button type="button" className="fixed bottom-12 text-active font-bold px-4">
                        <img src="" alt=""/>
                        <a href="">Logout</a>
                    </button>            
                </div>
            </div>
        </div>
    )
}
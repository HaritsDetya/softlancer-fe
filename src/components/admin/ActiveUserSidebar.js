import React from "react";

export default function ActiveUser() {
    return (
        <div class="fixed left-0 top-0 w-64 h-full bg-light py-2 pl-4 z-50 sidebar-menu transition-transform">
            <div class="pl-5">
                <img src="/public/image/logoSoftLancer.svg" alt="logo" class="h-[55px] my-4"/>
                <div class="flex flex-wrap pt-7">
                    <div class="container relative group overflow-hidden py-3 my-2 flex items-center rounded-s-md duration-300 cursor-pointer active:bg-background hover:bg-background">
                        <div class="absolute left-0 h-full w-2 cursor-pointer duration-300 group-active:bg-primary group-hover:bg-primary"></div>
                        <span class="">Dashboard</span>
                    </div>
                    <div class="container relative group overflow-hidden py-3 my-2 flex items-center rounded-s-md duration-300 cursor-pointer active:bg-background hover:bg-background">
                        <div class="absolute left-0 h-full w-2 cursor-pointer duration-300 group-active:bg-primary group-hover:bg-primary"></div>
                        <span class="">Active Users</span>
                    </div>
                    <div class="container relative group overflow-hidden py-3 my-2  flex items-center rounded-s-md duration-300 cursor-pointer active:bg-background hover:bg-background">
                        <div class="absolute left-0 h-full w-2 cursor-pointer duration-300 group-active:bg-primary group-hover:bg-primary"></div>
                        <span class="">Companys Management</span>
                    </div>
                    <div class="container relative group overflow-hidden py-3 my-2 flex items-center rounded-s-md duration-300 cursor-pointer active:bg-background hover:bg-background">
                        <div class="absolute left-0 h-full w-2 cursor-pointer duration-300 group-active:bg-primary group-hover:bg-primary"></div>
                        <span class="">Projects Management</span>
                    </div>
                    <div class="container relative group overflow-hidden py-3 my-2 flex items-center rounded-s-md duration-300 cursor-pointer active:bg-background hover:bg-background">
                        <div class="absolute left-0 h-full w-2 cursor-pointer duration-300 group-active:bg-primary group-hover:bg-primary"></div>
                        <span class="">Handle applications</span>
                    </div>
                    <button type="button" class="fixed bottom-12 text-active font-bold px-4">
                        <img src="" alt=""/>
                        <a href="">Logout</a>
                    </button>            
                </div>
            </div>
        </div>
    )
}
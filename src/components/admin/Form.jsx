import React from "react";
import Sidebar from "./Sidebar";
import {
    CalendarIcon,
} from '@heroicons/react/24/outline';

export default function Form() {
    return (
        <>
            <Sidebar />
            <div className="min-h-screen flex">
                {/* Sidebar */}
                <div className="bg-green-100 w-1/5 p-4">
                    <div className="text-center py-4">
                        <h1 className="text-2xl font-bold">SOFTLANCER</h1>
                    </div>
                    <nav>
                        <ul>
                            <li className="py-2 px-4 hover:bg-green-200 rounded">
                                <a href="#dashboard">Dashboard</a>
                            </li>
                            <li className="py-2 px-4 hover:bg-green-200 rounded">
                                <a href="#active-users">Active Users</a>
                            </li>
                            <li className="py-2 px-4 hover:bg-green-200 rounded">
                                <a href="#companies-management">Companies Management</a>
                            </li>
                            <li className="py-2 px-4 hover:bg-green-200 rounded">
                                <a href="#projects-management">Projects Management</a>
                            </li>
                            <li className="py-2 px-4 hover:bg-green-200 rounded">
                                <a href="#handle-applications">Handle Applications</a>
                            </li>
                            <li className="py-2 px-4 mt-8 hover:bg-green-200 rounded">
                                <a href="#logout">Log Out</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Main content */}
                <div className="flex-1 p-4">
                    <header className="flex justify-between items-center">
                        <div>
                            <h2 className="text-xl">Projects Management</h2>
                            <p className="text-sm">All Projects | Post Project | Form</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span>{new Date().toLocaleDateString()}</span>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                                    A
                                </div>
                                <span>Anisah Salma Rafida</span>
                            </div>
                        </div>
                    </header>

                    <main className="mt-8 grid grid-cols-3 gap-4">
                        <div className="p-4 border rounded-md text-center bg-gray-100">
                            <button className="w-full h-full flex items-center justify-center">
                                <span className="text-2xl">+</span>
                            </button>
                            <p className="mt-2">Blank Form</p>
                        </div>
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="p-4 border rounded-md bg-white">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">Formulir Pendaftaran Grab Wallet</span>
                                    <div className="flex space-x-2">
                                        <button className="text-blue-500">✎</button>
                                        <button className="text-red-500">🗑</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </main>
                </div>
            </div>
        </>
    )
}
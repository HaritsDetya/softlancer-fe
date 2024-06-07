import Image from "next/image";
import React from "react";
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const menu = [
    {name: 'Description', href: '#', icon: CheckCircleIcon, current: true},
    {name: 'Requirements', href: '#', icon: CheckCircleIcon, current: false},
    {name: 'Form Apply', href: '#', icon: CheckCircleIcon, current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Apply() {
    return(
        <div className="bg-gradient-to-b from-primary from-0% via-accent2 via-42% to-background to-100% px-16 py-7 max-md:px-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-base font-semibold tracking-tight leading-6 text-black text-opacity-60 max-md:mt-10">
                        <nav className="flex flex-1 flex-col" aria-label="Sidebar">
                            <ul role="list" className="-mx-2 space-y-5">
                                {menu.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-background text-active font-bold shadow-lg drop-shadow-lg shadow-black/25' : 'bg-white1 text-black/60',
                                                'group flex gap-x-3 rounded-md p-6 leading-6'
                                            )}
                                        >
                                            <div
                                                className="bg-active shrink-0 w-6 rounded-md"
                                            />
                                            <item.icon
                                                className={classNames(
                                                    item.current ? 'text-active' : 'text-black/60',
                                                    'h-6 w-6 shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        {/* <div className="flex gap-0 font-bold text-teal-800 whitespace-nowrap">
                            <div className="shrink-0 w-3 bg-teal-800 rounded-xl h-[63px]" />
                            <div className="flex gap-2.5 px-3.5 py-4 rounded-none bg-slate-300">
                                <img
                                    loading="lazy"
                                    srcSet="..."
                                    className="shrink-0 bg-teal-800 rounded-full border border-teal-800 border-solid aspect-square h-[30px] stroke-[1px] w-[30px]"
                                />
                                <div className="flex-auto my-auto">Description</div>
                            </div>
                        </div>
                        <div className="flex gap-0 mt-7 whitespace-nowrap">
                            <div className="shrink-0 w-3 rounded-xl bg-slate-400 h-[63px]" />
                            <div className="flex gap-3 items-start px-3.5 py-4 rounded-none bg-stone-50">
                                <img
                                    loading="lazy"
                                    srcSet="..."
                                    className="shrink-0 self-start bg-white rounded-full border border-solid aspect-square border-black border-opacity-60 h-[30px] stroke-[1px] w-[30px]"
                                />
                                <div className="flex-auto my-auto">Requirements</div>
                            </div>
                        </div>
                        <div className="flex gap-0 mt-7">
                            <div className="shrink-0 w-3 rounded-xl bg-slate-400 h-[63px]" />
                            <div className="flex gap-3 px-4 py-4 rounded-none bg-stone-50">
                                <img
                                    loading="lazy"
                                    srcSet="..."
                                    className="shrink-0 bg-white rounded-full border border-solid aspect-square border-black border-opacity-60 h-[30px] stroke-[1px] w-[30px]"
                                />
                                <div className="flex-auto self-start mt-2.5">Form Apply</div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-8 py-14 w-full bg-white rounded-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow text-xl font-semibold leading-5 text-center text-teal-800 max-md:mt-9">
                                        <img
                                            loading="lazy"
                                            srcSet="..."
                                            className="w-full border border-solid shadow-sm aspect-[1.22] border-black border-opacity-30"
                                        />
                                        <div className="justify-center items-center px-16 py-4 mt-10 rounded-xl bg-slate-300 max-md:px-5">
                                            Grab Wallet
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col max-md:mt-9 max-md:max-w-full">
                                        <div className="justify-center px-11 py-4 text-xl font-semibold leading-5 text-teal-800 rounded-xl bg-slate-300 max-md:px-5 max-md:max-w-full">
                                            PT Grab Teknologi Indonesia
                                        </div>
                                        <div className="mt-6 text-base leading-7 text-justify text-black max-md:max-w-full">
                                            PT Grab Teknologi Indonesia adalah sebuah perusahaan yang
                                            berfokus pada teknologi dan inovasi. Perusahaan ini
                                            didedikasikan untuk menyediakan solusi teknologi terkini
                                            dan mengembangkan layanan yang memudahkan kehidupan
                                            sehari-hari. Dengan tim yang berpengalaman dan berkomitmen
                                            tinggi, PT Grab Teknologi Indonesia terus memperluas
                                            jangkauan dan meningkatkan kualitas layanannya untuk
                                            mencapai visi menjadi pemimpin dalam industri teknologi di
                                            Indonesia.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-7 text-base leading-9 text-justify text-black max-md:mr-2.5 max-md:max-w-full">
                            Project Grab Wallet adalah inisiatif terbaru dari Grab yang
                            bertujuan untuk merevolusi pengalaman pembayaran digital bagi
                            pengguna di seluruh wilayah layanan. Fokus utama proyek ini adalah
                            untuk menciptakan sebuah dompet digital yang canggih, aman, dan
                            mudah digunakan, yang memungkinkan pengguna untuk melakukan
                            berbagai transaksi secara efisien dan nyaman. Tim pengembangan
                            Grab Wallet akan bekerja secara intensif untuk menghadirkan
                            fitur-fitur inovatif seperti pembayaran tanpa kontak, integrasi
                            dengan layanan finansial lainnya, dan kemampuan untuk menyimpan
                            beragam jenis kartu pembayaran.
                        </div>
                        <div className="flex gap-5 justify-between self-end mt-16 text-base font-medium leading-4 max-md:mt-10 max-md:mr-2.5">
                            <div className="my-auto text-teal-800">1 of 3 steps</div>
                            <div className="justify-center px-12 py-2.5 text-white whitespace-nowrap bg-teal-800 rounded-xl max-md:px-5">
                                Next
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
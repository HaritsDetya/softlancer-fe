import Image from "next/image";
import React from "react";


export default function Apply() {
    return(
        <section id="apply" class="bg-gradient-to-t from-background to-primary">
        <div class="container">
            <div class="flex flex-wrap mx-8">
                <div class="flex flex-wrap lg:flex-col">
                    <div class="py-4 px-4 mb-5 h-12 relative rounded-lg bg-background shadow-md shadow-slate-600 lg:mr-3">
                        <div class="absolute rounded-l-lg inset-y-0 left-0 w-2 h-full bg-active"></div>
                        {/* <img src="/public/image/centang.svg" alt="check" class="w-5 mx-2"> */}
                        <h2 class="font-semibold text-xs">Company Description</h2>
                    </div>                      
                    <div class=" py-4 px-4 mx-5 mb-5 h-12 relative rounded-lg bg-background shadow-md shadow-slate-600 lg:mr-3">
                        <div class="absolute rounded-l-lg inset-y-0 left-0 w-2 h-full bg-accent2"></div>
                        <h2 class="font-semibold text-xs">Job Description</h2>
                    </div>
                    <div class=" py-4 px-4 mb-5 h-12 relative rounded-lg bg-background shadow-md shadow-slate-600 lg:mr-3">
                        <div class="absolute rounded-l-lg inset-y-0 left-0 w-2 h-full bg-accent2"></div>
                        <h2 class="font-semibold text-xs">Apply Job</h2>
                    </div>
                </div>
                <div class="w-full lg:w-auto">
                    <div class="bg-paper-patern flex flex-wrap rounded-lg">
                        <div class="lg:flex items-center mx-5 my-5">
                            <Image src="/image/company_1.png" alt="company_1" class="justify-between w-40 lg:w-1/2" width={1} height={0}/>
                            <div class="px-3">
                                <h2 class="font-bold text-base lg:text-lg">InnovaSolve Solutions</h2>
                                <p class="text-xs font-semibold lg:text-base">“Innovative Solutions for Tomorrow's Challenges”</p>
                                <div class="flex flex-wrap items-center">
                                    <img src="/public/image/office-building.svg" alt="office-building"/>
                                    <p class="text-xs ml-2">123 Main Street, Cityville,Stateville, Countryland, 12345</p>
                                </div>
                                <div class="flex flex-wrap items-center">
                                    <img src="/public/image/email.svg" alt="email"/>
                                    <p class="text-xs ml-2">info.innovasolve@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="lg:flex mt-3">
                            <h3 class="bg-background rounded-lg py-2 px-3">Company Description</h3>
                            <p class="text-xs py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatibus voluptatum! 
                            Repudiandae facilis dolor magnam, minima eos, id placeat voluptatibus provident voluptates 
                            adipisci dicta laudantium quisquam saepe et harum quae nostrum vitae consectetur doloremque 
                            veniam repellat? Dicta tenetur et recusandae?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
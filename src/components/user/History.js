import React from "react";

export default function History() {
    return (
        <section class="pt-16 bg-background">
            <div class="container">
                <div class="flex flex-wrap mx-8">
                    <h3 class="bg-accent3 rounded-lg py-2 px-6 mr-3 text-white">Waiting</h3>
                    <h3 class="bg-active rounded-lg py-2 px-6 mr-3 text-white">Approve</h3>
                    <h3 class="bg-accent4 rounded-lg py-2 px-6 text-white">Decline</h3>
                </div>
                <div class="flex flex-wrap flex-col mx-8 mt-3">
                    <div class="bg-light rounded-lg py-3 px-3">
                        <div class="flex flex-wrap">
                            <div class="bg-white rounded-md py-2 px-2">
                                <img src="/images/grab_font.svg" alt="grab" />
                            </div>
                            <h2 class="font-bold px-3">Senior Frontend Web Developer</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
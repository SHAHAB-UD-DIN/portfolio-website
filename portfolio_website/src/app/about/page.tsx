import Image from "next/image"

export default function About(){
    return(
        <>
        <div className="justify-center text-center m-10">
                <h1 className="text-base">Introduction</h1>
                <h2 className="text-3xl font-semibold">About me</h2>
        </div>

        <div className="flex justify-center items-center rounded-xl">
            <div>
                    <Image src="/pic.jpeg" alt="Profile" width={250} height={250} className="rounded-3xl" />
            </div>
        </div>

        <div className="bg-slate-100 max-w-2xl mx-auto mt-5 mb-5 p-3 rounded-xl">
            <div className="">
                <p className="text-wrap">
                I am Shahab Ud Din, Frontend Developer Starting my career at Capresoft, I’ve focused on developing 
                responsive web applications. My expertise lies in merging modern frontend technologies
                 with intelligent automation to enhance user experience and streamline processes.
                </p>
                <div>
                    <h3 className="font-semibold">Languages</h3>
                    <p>HTML, CSS, Javascript, Typescript, NextJS</p>
                </div>

                <div>
                    <h3 className="font-semibold">Education</h3>
                    <p>Bsc in Computer Science</p>
                </div>

                <div>
                    <h3 className="font-semibold">Projects</h3>
                    <p>Build more than 5 projects</p>
                </div>
            </div>

        </div>
        </>
    )

}
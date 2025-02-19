import { Button } from "./ui/button";


export default function SimpleForm(){
    return(
        <main className="flex justify-center items-center">
            <form className="flex flex-col bg-slate-100 px-10 py-4 shadow-md w-1/4 justify-between">
                <h1 className="text-3xl font-bold text-gray-700">Contact us</h1>
                <div className="mt-6">
                    <div className="pb-4">
                        {/* Name Field */}
                        <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="mt-1 w-full rounded text-sm p-2"
                        ></input>
                    </div>

                    <div className="pb-4">
                        {/* Email Field */}
                        <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="mt-1 w-full rounded text-sm p-2"
                        ></input>
                    </div>

                    <div className="pb-4">
                        {/*  message Field */}
                        <textarea
                        id="message"
                        name="message"
                        placeholder="Type your message here"
                        className="mt-1 w-full rounded text-sm p-2 "
                        ></textarea>
                    </div>
                    {/* button field */}
                    <Button>
                        Submit
                    </Button>
                </div>
            </form>
        </main>
    )
}
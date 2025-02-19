import Menu from "./Menu"
import { ButtonDemo } from "./ButtonDemo"
import  DarkMode  from "./DarkMode"
import { OpenSheet } from "./OpenSheet"
import { Bold } from "lucide-react"


export default function Navbar() {
    return (
        <header className="grid grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] justify-between items-center w-screen px-3 py-1 border-b ">
            <div className="flex justify-center items-center gap-2">
                <OpenSheet />
                <h1 className="font-semibold">SHAHAB <span className="text-red-500 font-extrabold">.</span></h1>
            </div>

            <div className="hidden md:flex justify-center items-centre">
                <Menu />
            </div>
            
            <div className="flex justify-self-start items-center gap-x-2">
                {/* <DarkMode /> */}
                <ButtonDemo />
            </div>

        </header>
    )
}
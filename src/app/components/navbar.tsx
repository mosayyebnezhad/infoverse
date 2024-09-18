import { ArrowBigLeft, ArrowLeft, ArrowLeftCircleIcon } from "lucide-react"
import { ChangeTheme } from "./changeColor"
import { Backward } from "./backward"

export const Navbar = () => {
    return (
        <nav className="flex w-10/12 mx-auto md:justify-between md:w-11/12 md:px-10 mt-6 mb-6 justify-around py-3 rounded-2xl bg-[--bgbg] items-center ">
            <ChangeTheme />
           
            <h2 className="font-extrabold text-3xl">
                Infoverse
                🧾
            </h2>

          
           <Backward/>
        </nav>
    )
}
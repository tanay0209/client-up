import { MenuIcon } from "lucide-react"
import {
    Sheet,
    SheetContent, SheetTrigger
} from "@/components/ui/sheet"

function Navbar() {
    return (
        <nav className="z-50 relative flex items-center justify-between w-full px-6 py-4 font-medium text-gray-500 bg-transparent">
            <h3 className="text-3xl font-bold text-white cursor-pointer">CU</h3>
            <ul className="md:flex w-full justify-center ml-14 items-center font-medium space-x-4 *:hover:cursor-pointer hidden">
                <li className="text-white">Home</li>
                <li className="hover:text-white">Pricing</li>
                <li className="hover:text-white">Feature</li>
                <li className="hover:text-white">Blog</li>
                <li className="hover:text-white">About Us</li>
            </ul>
            <div className="items-center hidden space-x-3 md:flex">
                <button className="flex items-center justify-center px-4 py-1 text-white border border-white rounded-full">Login</button>
                <button className="flex justify-center items-center px-4 py-1 rounded-full text-black bg-[#13F287]">Register</button>
            </div>
            <Sheet>
                <SheetTrigger className="flex md:hidden"><MenuIcon /></SheetTrigger>
                <SheetContent className="text-gray-500 border-none bg-black/75">
                    <div className="flex flex-col mt-4 space-y-4">
                        <ul className="items-center font-medium *:hover:cursor-pointer *:py-2">
                            <li className="hover:text-white">Home</li>
                            <li className="hover:text-white">Pricing</li>
                            <li className="hover:text-white">Feature</li>
                            <li className="hover:text-white">Blog</li>
                            <li className="hover:text-white">About Us</li>
                        </ul>
                        <div className="flex items-center justify-between w-full">
                            <button>Login</button>
                            <button>Register</button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default Navbar
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import {useRouter} from "next/router"
import {useRef} from "react"
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router = useRouter();//using the router
    const searchInputRef = useRef(null); // creating a pointer to the search input
    const search = (e) =>{
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term) return;
        router.push(`/search?term=${term}`);
    }

    return (
    <header className="sticky top-0 bg-white">
        <div  className="flex w-full p-6 items-center">
            <img 
                src="/google.png" 
                height={30} 
                width={100} 
                className="cursor-pointer" 
                onClick={()=> router.push(`/`)} //onclick push / link to stack 
            />

            <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-ld max-w-3xl items-center ">
                <input 
                    ref={searchInputRef} 
                    type="text" 
                    className="flex-grow w-full focus:outline-none"
                />
                <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"onClick={()=> searchInputRef.current.value=""} /> 
                <MicrophoneIcon className="mr-2 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
                
                <button type="submit" onClick={search} ><SearchIcon className=" mb-1 h-5 hidden sm:inline-flex text-blue-500 cursor-pointer"/></button>
            </form>
            <Avatar url="/profile.png" className="ml-auto"/>
        </div>

        {/* Header Opttions */}
        <HeaderOptions/>
    </header>
  )
}

export default Header
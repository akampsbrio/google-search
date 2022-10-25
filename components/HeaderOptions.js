import { DotsVerticalIcon,MapIcon,NewspaperIcon,PhotographIcon, PlayIcon, SearchIcon, } from "@heroicons/react/outline"
import HeaderOption from "./HeaderOption"

function HeaderOptions() {
  return (
    <div>
        {/* //Left */}
        <div className="flex flex-row items-center w-full text-gray-700 justify-evenly text-sm space-x-6 lg:text-base lg:justify-start lg:space-x-10 lg:pl-52 border-b-[1px]   px-5 lg:px-20">
            <HeaderOption Icon={SearchIcon} title="All" selected/>
            <HeaderOption Icon={PhotographIcon} title="Images"/>
            <HeaderOption Icon={PlayIcon} title="Videos"/>
            <HeaderOption Icon={NewspaperIcon} title="News"/>
            <HeaderOption Icon={MapIcon} title="Maps"/>
            <HeaderOption Icon={DotsVerticalIcon} title="More"/>
            
            <div className="flex flex-row space-x-4 px-5 lg:px-40">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>

        {/* //Right */}
        
    </div>
  )
}

export default HeaderOptions
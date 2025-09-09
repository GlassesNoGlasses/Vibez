
import MainDisplay from "~/components/displays/MainDisplay";
import SideDisplay from "~/components/displays/SideDisplay";

// TESTING: imports
import { SERVER_INFO } from "../../.testing/serverInfo";


export default function Music() {
    
    return (
        <div className="flex h-full w-full flex-1 flex-row bg-black text-white gap-8 p-4">
            <div id="side-music-list" 
            className="flex flex-1 h-full max-w-1/4 bg-gray-700 text-white"
            >
                <SideDisplay params={{}} />
            </div>
            <div id="main-music-list" 
            className="flex flex-1 h-full max-w-4/5 bg-gray-800 text-white"
            >
                <MainDisplay params={{}} />
            </div>
        </div>
    )
}

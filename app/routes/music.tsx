
import MainDisplay from "~/components/displays/MainDisplay";
import SideDisplay from "~/components/displays/SideDisplay";

// TESTING: imports
import { SERVER_INFO } from "../../.testing/serverInfo";
import { DisplayItemType, type DisplayItem } from "~/constants/Items";


export default function Music() {
    // TESTING: Items to display
        const testItems: Array<DisplayItem> = [
            {
                id: "1",
                type: DisplayItemType.Artist,
                title: "Test Item 1 (Artist)",
                description: "This is a description for Test Item 1",
            },
            {
                id: "2",
                type: DisplayItemType.Album,
                title: "Test Item 2 (Album)",
            },
            {
                id: "3",
                type: DisplayItemType.Song,
                title: "Test Item 3 (Song)",
                description: "This is a description for Test Item 3",
            },
        ]; 
    
    return (
        <div className="flex h-full w-full flex-1 flex-row bg-black text-white gap-8 p-4">
            <div id="side-music-list" 
            className="flex flex-1 h-full max-w-1/4 bg-gray-700 text-white"
            >
                <SideDisplay items={testItems} />
            </div>
            <div id="main-music-list" 
            className="flex flex-1 h-full max-w-4/5 bg-gray-800 text-white"
            >
                <MainDisplay items={testItems} />
            </div>
        </div>
    )
}

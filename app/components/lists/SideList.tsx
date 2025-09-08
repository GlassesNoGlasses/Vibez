
import { useEffect, useState } from "react";
import type { DisplayItem } from "../../constants/Items";
import SearchBar from "../search/SearchBar";
import type SideListProps from "./SideListProps";
import ItemDisplay from "../items/ItemDisplay";


export default function SideList({params}: {params: SideListProps}) {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchItems, setSearchItems] = useState<Array<DisplayItem>>([]);

    // TESTING: Items to display
    const testItems: Array<DisplayItem> = [
        {
            id: "1",
            title: "Test Item 1",
            description: "This is a description for Test Item 1",
        },
        {
            id: "2",
            title: "Test Item 2",
        },
        {
            id: "3",
            title: "Test Item 3",
            description: "This is a description for Test Item 3",
        },
    ]; 

    useEffect(() => {
        setSearchItems(testItems);
    }, []);

    // END OF TESTING
    useEffect(() => {
        console.log("Search Query Updated:", searchQuery);
    }, [searchQuery]);


    const handleOnSearchChange = (query: string) => {
        setSearchQuery(query);
    }

    const handleOnSearchEnter = (query: string) => {
        console.log("Searching for:", query);
    }

    return (
        <div className="flex flex-1 flex-col h-full w-full bg-gray-700 text-white">
            <div 
            id="side-list-top-nav"
            className="flex flex-1 flex-row gap-4 justify-center items-center align-middle max-h-1/5 w-full p-4">
                <SearchBar params={{
                    placeholder: "Search...",
                    onChange: handleOnSearchChange,
                    onEnter: handleOnSearchEnter,
                }} />
            </div>
            <div
            id="side-list-content"
            className="flex flex-1 flex-col gap-2 justify-start items-center align-middle min-h-4/5 w-full overflow-y-auto"
            >
                {
                    searchItems.map((item, idx) => (
                        <ItemDisplay 
                        key={idx}
                        params={{item: item, 
                        onClick: () => {console.log("Clicked on item:", item.title)}}} 
                        />   
                    ))
                }
            </div>
        </div>
    )
}



import { useEffect, useState } from "react";
import type { DisplayItem } from "../../constants/Items";
import SearchBar from "../search/SearchBar";
import type SideListProps from "./SideListProps";
import ItemDisplay from "../items/ItemDisplay";


export default function SideList({params}: {params: SideListProps}) {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchItems, setSearchItems] = useState<Array<DisplayItem>>([]);
    const [searchDisplay, setSearchDisplay] = useState<Array<string>>([]);

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
        console.log("Setting test items");
        setSearchItems(testItems);
    }, []);

    // END OF TESTING
    useEffect(() => {
        console.log("Search Items Updated:", searchItems);
    }, [searchItems]);


    const handleOnSearchChange = (query: string) => {
        const trimmedQuery = query.trim();
        const updatedItems = trimmedQuery === "" ? testItems : searchItems
        .filter(item =>
            item.id.includes(trimmedQuery) ||
            item.title.toLowerCase().includes(trimmedQuery.toLowerCase()) || 
            (item.description && item.description.toLowerCase().includes(trimmedQuery.toLowerCase()))
        );
        
        setSearchQuery(trimmedQuery);
        setSearchItems(updatedItems);
    }

    const handleOnSearchEnter = (query: string) => {
        setSearchDisplay(prev => {
            if (prev.includes(query)) {
                return prev;
            } else {
                return [query, ...prev];
            }
        });
    }

    const handleRemoveSearchDisplay = (term: string) => {
        setSearchDisplay(prev => prev.filter(t => t !== term));
    }

    return (
        <div className="flex flex-1 flex-col h-full w-full bg-gray-700 text-white">
            <div 
            id="side-list-top-nav"
            className="flex flex-1 flex-col gap-4 justify-center items-center align-middle max-h-1/5 w-full p-4 border-b-1 border-b-gray-100">
                <SearchBar params={{
                    placeholder: "Search...",
                    onChange: handleOnSearchChange,
                    onEnter: handleOnSearchEnter,
                }} />
                {
                    searchDisplay &&
                    <div
                    id="side-list-search-display"
                    className="flex flex-1 flex-row w-full max-h-fit p-4 gap-2 justify-start items-center align-middle overflow-x-auto border-2 border-white rounded"
                    >
                        <div
                        className="flex bg-white hover:bg-gray-300 p-2 rounded cursor-pointer"
                        onClick={() => setSearchDisplay([])}
                        >
                            <p className="text-black text-sm font-bold">Clear</p>
                        </div>
                        {
                            searchDisplay.map((term, idx) => (
                                <div
                                key={idx}
                                className="flex bg-white hover:bg-gray-300 p-2 rounded cursor-pointer"
                                onClick={() => handleRemoveSearchDisplay(term)}
                                >
                                    <p className="text-center text-black text-sm">{term}</p>
                                </div>
                            ))
                            }
                    </div>
                }
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


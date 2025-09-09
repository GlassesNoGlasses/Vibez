
import { useEffect, useState } from "react";
import type { DisplayItem } from "../../constants/Items";
import SearchBar from "../search/SearchBar";
import ItemDisplay from "../items/ItemDisplay";
import type SideDisplayProps from "./SideDisplayProps";
import List from "../lists/List";

export default function SideDisplay({params}: {params: SideDisplayProps}) {

    const [searchItems, setSearchItems] = useState<Array<DisplayItem>>([]);
    const [searchDisplay, setSearchDisplay] = useState<Array<string>>([]);
    const [focusedItem, setFocusedItem] = useState<DisplayItem | null>(null);

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
        const updatedItems = filterItemsBySearchTerms(searchDisplay);
        setSearchItems(updatedItems);
    }, [searchDisplay]);

    
    const filterItemsBySearchTerms = (terms: Array<string>) => {
        if (terms.length === 0) {
            return testItems;
        }

        // TODO: Improve filtering logic to be more robust (e.g., fuzzy search, etc.)
        // Current logic: If any term matches id, title, or description (case insensitive), include the item
        const filteredItems = testItems.filter(item => 
            terms.some(term => 
                item.id.includes(term) ||
                item.title.toLowerCase().includes(term.toLowerCase()) || 
                (item.description && item.description.toLowerCase().includes(term.toLowerCase()))
            )
        );

        return filteredItems;
    }


    const handleOnSearchChange = (query: string) => {
        const trimmedQuery = query.trim();
        const updatedItems = filterItemsBySearchTerms([...searchDisplay, trimmedQuery]);
        
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
                    className="flex flex-1 flex-row w-full max-h-fit p-2 gap-2 justify-start items-center align-middle border-2 border-white rounded"
                    >
                        <div
                        className="flex bg-white hover:bg-gray-300 p-2 rounded cursor-pointer"
                        onClick={() => setSearchDisplay([])}
                        >
                            <p className="text-black text-sm font-bold">Clear All</p>
                        </div>
                        <div className="flex flex-1 flex-row gap-2 items-center align-middle overflow-x-auto">
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
                    </div>
                }
            </div>
            <div
            id="side-list-content">
                <List
                    items={searchItems}
                    onItemSelect={(item) => console.log("Selected item:", item)}
                />
            </div>
        </div>
    )
}


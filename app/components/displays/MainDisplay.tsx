
import { useState } from "react";
import type MainDisplayProps from "./MainDisplayProps";
import type { DisplayItem } from "~/constants/Items";
import ItemPage from "../items/ItemPage";
import List from "../lists/List";

export default function MainDisplay({items} : MainDisplayProps) {

    const [displayItems, setDisplayItems] = useState<DisplayItem[]>(items
        .sort((a, b) => a.type.localeCompare(b.type) || a.title.localeCompare(b.title)));
    const [selectedItem, setSelectedItem] = useState<DisplayItem | null>(null);


    return (
        <div className="flex flex-1 h-full w-full bg-gray-800 text-white">
            {selectedItem ?
                <ItemPage item={selectedItem} onBack={() => setSelectedItem(null)} /> 
                :
                <List items={displayItems} onItemSelect={(item) => setSelectedItem(item as DisplayItem)} />
            }
        </div>
    )
}


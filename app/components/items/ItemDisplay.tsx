
import type { DisplayItem } from "~/constants/Items";
import Placeholder from "../../../src/svgs/item_display_placeholder.svg";
import type ItemDisplayProps from "./ItemDisplayProps";


export default function ItemDisplay({item, onClick}: ItemDisplayProps) {


    const ArtDisplay = (item: DisplayItem) => {
        return (
             <div 
            className="flex flex-1 flex-row h-full w-full bg-gray-800 text-white p-4 rounded border-b-2 border-gray-500 hover:bg-gray-500 cursor-pointer" 
            onClick={onClick}>
                <img src={Placeholder} alt={item.title} className="h-16 w-16 object-cover rounded" />
                <div className="flex flex-1 flex-col justify-center ml-4 text-center">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm">{item.description ? item.description : "To be determined..."}</p>
                </div>
            </div>
        )
    }

    return (
        <>
            { item && "type" in item && "title" in item && "id" in item
                ? ArtDisplay(item as DisplayItem)
                : <div>Invalid Item</div>
            }
        </>
    );
}


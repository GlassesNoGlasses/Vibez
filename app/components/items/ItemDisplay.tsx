
import Placeholder from "../../../src/svgs/item_display_placeholder.svg";
import type ItemDisplayProps from "./ItemDisplayProps";


export default function ItemDisplay({params}: {params: ItemDisplayProps}) {
    return (
        <div 
        className="flex flex-1 flex-row h-full w-full bg-gray-800 text-white p-4 rounded border-b-2 border-gray-500 hover:bg-gray-500 cursor-pointer" 
        onClick={params.onClick}>
            <img src={params.item.imageUrl || Placeholder} alt={params.item.title} className="h-16 w-16 object-cover rounded" />
            <div className="flex flex-1 flex-col justify-center ml-4 text-center">
                <h2 className="text-lg font-semibold">{params.item.title}</h2>
                <p className="text-sm">{params.item.description ? params.item.description : "To be determined..."}</p>
            </div>
        </div>
    );
}


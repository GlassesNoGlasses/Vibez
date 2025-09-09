
import ItemDisplay from "../items/ItemDisplay";
import type ListProps from "./ListProps";

export default function List({items, onItemSelect} : ListProps) {
    return (
        <div className="flex flex-1 flex-col h-full w-full gap-2 justify-start items-center align-middle overflow-y-auto">
            {
                items.map((item, idx) => (
                    <ItemDisplay
                    key={idx}
                    item={item}
                    onClick={() => onItemSelect(item)}
                />
            ))}
        </div>
    )
}



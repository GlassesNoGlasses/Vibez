
import type { DisplayItem } from "~/constants/Items";
import type ItemPageProps from "./ItemPageProps";

export default function ItemPage({item, onBack}: ItemPageProps) {


    const songDisplay = (item: DisplayItem) => {
        if (item.type !== "song") {
            throw new TypeError("Item is not a song");
        }

        return (
            <div>Song Display: {item.title}</div>
        )
    }

    const albumDisplay = (item: DisplayItem) => {
        if (item.type !== "album") {
            throw new TypeError("Item is not an album");
        }

        return (
            <div>Album Display: {item.title}</div>
        )
    }

    const artistDisplay = (item: DisplayItem) => {
        if (item.type !== "artist") {
            throw new TypeError("Item is not an artist");
        }

        return (
            <div>Artist Display: {item.title}</div>
        )
    }

    const defaultDisplay = (item: DisplayItem) => {
        try {
            switch (item.type) {
                case "song":
                    return songDisplay(item);
                case "album":
                    return albumDisplay(item);
                case "artist":
                    return artistDisplay(item);
                default:
                    return <div>Unknown item type</div>;
            }
        } catch (error) {
            console.error("Error displaying item:", error);
            return <div>Error displaying item</div>;
        }
    }


    return (
        <div className="flex flex-1 h-full w-full bg-gray-800 text-white">
            {defaultDisplay(item)}
        </div>
    )
}


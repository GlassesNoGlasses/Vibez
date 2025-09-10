
import type { Item } from "~/constants/Items";

export default interface MainListProps {
    items: Array<Item>;
    onItemSelect: (item: Item) => void;
}

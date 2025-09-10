
import type { Item } from "~/constants/Items";

export default interface ItemDisplayProps {
    item: Item;
    onClick?: () => void;
}

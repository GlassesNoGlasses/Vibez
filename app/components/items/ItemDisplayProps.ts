
import type { DisplayItem } from "~/constants/Items";

export default interface ItemDisplayProps {
    item: DisplayItem;
    onClick?: () => void;
}

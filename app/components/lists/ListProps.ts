
import type { DisplayItem } from "~/constants/Items";

export default interface MainListProps {
    items: Array<DisplayItem>;
    onItemSelect: (item: DisplayItem) => void;
}

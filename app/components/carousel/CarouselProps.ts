
import type { DisplayItem } from "~/constants/Items";

export default interface CarouselProps {
    items: DisplayItem[];
    onItemClick?: (item: DisplayItem) => void;
    maxItems?: number;
}

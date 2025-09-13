
import type { DisplayItem } from "~/constants/Items";

export default interface CarouselItemProps {
    item: DisplayItem;
    key?: string | number;
    onClick?: () => void;
    style?: React.CSSProperties;
}


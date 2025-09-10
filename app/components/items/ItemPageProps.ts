import type { DisplayItem } from "~/constants/Items";

export default interface ItemPageProps {
    item: DisplayItem;
    onBack?: () => void;
} 


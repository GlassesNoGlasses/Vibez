import type { DisplayItem } from "~/constants/Items";

export default interface ItemPageProps {
    displayItem: DisplayItem;
    onBack?: () => void;
} 


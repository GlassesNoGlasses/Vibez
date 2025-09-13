
import type CarouselItemProps from "./CarouselItemProps";
import {motion} from "framer-motion";
import PlaceHolder from "../../../src/svgs/item_display_placeholder.svg"

export default function CarouselItem({item, key, onClick, style} : CarouselItemProps) {
    return (
        <motion.button
            onClick={onClick}
            style={style}
        >
            <motion.img
                src={item.imageUrl || PlaceHolder}
                alt={item.title}
                whileHover={{ scale: 1.1 }}
            />
        </motion.button>
    );
}


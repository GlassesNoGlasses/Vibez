

import type { DisplayItem } from "~/constants/Items";
import CarouselItem from "./CarouselItem";
import type CarouselProps from "./CarouselProps";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Carousel({items, onItemClick, maxItems}: CarouselProps) {

    const visibleCount = maxItems ? Math.min(maxItems, items.length) : 5; // Default to 5 items if not provided
    const [currentIndex, setCurrentIndex] = useState<number>(0); // Start at first real item
    
    const itemWidth = 100 / visibleCount; // Percentage width for each item
    const gap = 4; // Gap between items in pixels

    // Handle item click
    const handleItemClick = (item: DisplayItem) => {
        if(onItemClick) {
            onItemClick(item);
        } else {
            console.log("Item clicked:", item);
        }
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => prev + 1);
    };


    return (
        <div className="flex flex-1 flex-row h-full w-full max-w-5xl mx-auto items-center justify-center">
            {/* Left Button */}
            <button
                onClick={prevSlide}
                className="flex left-1 bg-white/70 p-2 rounded-full shadow hover:bg-white"
                style={{ visibility: currentIndex <= 0 ? 'hidden' : 'visible' }}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Slides Items */}
            <div className="flex justify-center overflow-hidden p-2 bg-amber-200">
                <motion.div
                    className="flex"
                    style={{ width: `${(items.length / visibleCount) * 100}%`}}
                    animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    {items.map((item, idx) => (
                        <CarouselItem
                            key={idx}
                            item={item}
                            onClick={() => handleItemClick(item)}
                            style={{ minWidth: `${itemWidth}%`}}
                        />
                    ))}
                </motion.div>
            </div>


            {/* Right Button */}
            <button
                onClick={nextSlide}
                className="flex right-1 bg-white/70 p-2 rounded-full shadow hover:bg-white"
                style={{ visibility: currentIndex >= items.length - visibleCount ? 'hidden' : 'visible' }}
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
}


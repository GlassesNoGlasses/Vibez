
import { useEffect } from "react";
import type CommentSectionProps from "./CommentSectionProps";

export default function CommentSection({ itemId }: CommentSectionProps) {

    useEffect(() => {
        // Fetch comments for the item
        
    }, [itemId]);

    return (
        <div className="p-4 bg-gray-700 text-white rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2">Comments for Item ID: {itemId}</h3>
            <p className="text-gray-300">Comment section UI goes here.</p>
        </div>
    );
}

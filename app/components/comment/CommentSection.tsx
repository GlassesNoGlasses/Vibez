
import { useEffect, useState } from "react";
import type CommentSectionProps from "./CommentSectionProps";
import type { Comment } from "~/constants/Comments";
import List from "../lists/List";
import type { Item } from "~/constants/Items";

export default function CommentSection({ itemId }: CommentSectionProps) {

    const [comments, setComments] = useState<Array<Comment>>([]);
    const [charCount, setCharCount] = useState<number>(0);
    const maxChars = 500;

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        const chars = text.length;
        setCharCount(chars);
    };

    const handleCommentSelect = (comment: Comment) => {
        // Handle comment selection (e.g., reply, edit, delete)
    }

    // Example function to fetch comments from an API
    const fetchComments = async () => {
        try {
            const response = await fetch(`/api/comments?itemId=${itemId}`);
            const data = await response.json();
            setComments(data.comments);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    const postComment = async (commentText: string) => {
        // Example function to post a new comment to an API
    }

    useEffect(() => {
        // Fetch comments for the item
        // fetchComments();
    }, [itemId]);

    return (
        <div className="flex flex-1 h-full w-full flex-col bg-black p-4 border-2 border-white border-solid rounded">
            <div id='user-comment' className="flex flex-col min-h-fit">
                <p className={`relative pr-2 pt-1 text-sm ${charCount > maxChars ? 'text-red-500' : 'text-gray-400 '}`}>
                    {charCount}/{maxChars}
                </p>
                <textarea
                className="flex-1 h-1/4 p-2 border-2 border-white border-solid rounded text-white"
                placeholder="Add a comment..."
                onChange={handleInputChange}
                />
            </div>
            {/* <List items={comments} onItemSelect={(item) => handleCommentSelect(item as Comment)} /> */}
                {/* Make list of comments. Perhaps add embedding of children elements to List */}
        </div>
    );
}

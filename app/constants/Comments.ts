
import type { Item } from "./Items";

export interface Comment extends Item {
    userId: string;
    itemId: string; // could be songId, albumId, artistId based on context
    itemType: 'song' | 'album' | 'artist';
    content: string;
    timestamp: string; // ISO date string
    likes: number;
    replies?: Comment[]; // nested comments for replies
}


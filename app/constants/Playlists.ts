
import type { Item, Song } from "./Items";

export interface Playlist extends Item{
    playlistId: string;
    creatorId: string; // userId of creator
    name: string;
    description?: string;
    imageUrl?: string;
    songs: Song[];
    totalTracks: number;
    length: number; // in seconds
}

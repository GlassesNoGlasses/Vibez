import type { Genre } from "./Genres";

// app/constants/Items.ts
export interface Item {
    id: string;
    title: string;
}

export const enum DisplayItemType {
    Song = 'song',
    Album = 'album',
    Artist = 'artist',
}

export const enum SongType {
    Single = 'single',
    Cover = 'cover',
    Remix = 'remix',
    Live = 'live',
    Other = 'other',
}

export interface DisplayItem extends Item {
    type: DisplayItemType;
    description?: string;
    imageUrl?: string;
}


// NOTE: use Item.id to act as hashmap in searching (i.e. Search 'Keshi' => Item.id -> 'id for artist hashmap' -> artist.id)

export interface Artist extends DisplayItem {
    artistId: string;
    artistType: 'solo' | 'band' | 'orchestra' | 'choir';
    name: string;
    genres: Genre[];
    birthDate?: string;
    description?: string;
    followers?: number;
    popularity?: number; // 0-100
}


export interface Song extends DisplayItem {
    duration: number; // in seconds
    songType: SongType[3];
    artists: Artist[];
    explicit: boolean;
    lyrics: string;
    releaseDate: string;
    album?: Album;
}

export interface Album extends DisplayItem {
    artists: Artist[];
    albumName: string;
    albumType: 'album' | 'single' | 'compilation';
    releaseDate: string;
    totalTracks: number;
    songs: Song[];
    explicit: boolean;
    genres: Genre[];
}


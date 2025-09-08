
export interface Item {
    id: string;
    title: string;
}


export interface DisplayItem extends Item {
    description?: string;
    imageUrl?: string;
}


// NOTE: use Item.id to act as hashmap in searching (i.e. Search 'Keshi' => Item.id -> 'id for artist hashmap' -> artist.id)

export interface Artist extends DisplayItem {
    artistId: string;
    artistType: 'solo' | 'band' | 'orchestra' | 'choir';
    name: string;
    genres: string[];
    birthDate?: string; 
    description?: string;
    followers?: number;
    popularity?: number; // 0-100
}


export interface Song extends DisplayItem {
    duration: number; // in seconds
    albumId: string;
    artistId: string;
    trackNumber: number;
    discNumber: number;
    explicit: boolean;
}

export interface Album extends DisplayItem {
    artistId: string;
    albumName: string;
    albumType: 'album' | 'single' | 'compilation';
    releaseDate: string;
    totalTracks: number;
    songs: Song[];
    explicit: boolean;
    genres?: string[];
}


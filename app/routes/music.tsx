
import MainDisplay from "~/components/displays/MainDisplay";
import SideDisplay from "~/components/displays/SideDisplay";

// TESTING: imports
import { SERVER_INFO } from "../../.testing/serverInfo";
import { DisplayItemType, type Artist, type DisplayItem, type Song, type Album } from "~/constants/Items";


export default function Music() {
    // TESTING: Items to display

    const testArtists: Array<Artist> = [
        {
            id: "a1",
            type: DisplayItemType.Artist,
            name: "Test Artist 1",
            title: "Test Artist 1",
            description: "This is a description for Test Artist 1",
            artistId: "",
            artistType: "solo",
            genres: []
        },
        {
            id: "a2",
            type: DisplayItemType.Artist,
            name: "Test Artist 2",
            title: "Test Artist 2",
            description: "This is a description for Test Artist 2",
            artistId: "",
            artistType: "solo",
            genres: []
        },
    ];

    const testAlbums: Array<Album> = [
        {
            id: "al1",
            type: DisplayItemType.Album,
            title: "Test Album 1",
            description: "This is a description for Test Album 1",
            releaseDate: "2023-01-01",
            albumName: "Test Album 1",
            artists: [testArtists[0]],
            totalTracks: 10,
            explicit: false,
            songs: [],
            albumType: "album",
            genres: []
        },
        {
            id: "al2",
            type: DisplayItemType.Album,
            title: "Test Album 2",
            description: "This is a description for Test Album 2",
            releaseDate: "2023-02-01",
            albumName: "Test Album 2",
            artists: [testArtists[1], testArtists[0]],
            totalTracks: 8,
            explicit: true,
            songs: [],
            albumType: "album",
            genres: []
        },
    ];

    const testSongs: Array<Song> = [
        {
            id: "1",
            type: DisplayItemType.Song,
            title: "Test Song 1",
            description: "This is a description for Test Song 1",
            duration: 210,
            explicit: false,
            lyrics: "These are the lyrics for Test Song 1.\nLa la la...",
            releaseDate: "2023-01-01",
            artists: [testArtists[0]],
            album: testAlbums[0],
        },
        {
            id: "2",
            type: DisplayItemType.Song,
            title: "Test Song 2",
            duration: 180,
            explicit: true,
            lyrics: "",
            releaseDate: "2023-02-01",
            artists: [testArtists[1], testArtists[0]],
            album: testAlbums[1],
        },
    ];

    const testItems: Array<DisplayItem> = [
        ...testSongs,
        ...testAlbums,
        ...testArtists
    ];

    return (
        <div className="flex h-full w-full flex-1 flex-row bg-black text-white gap-8 p-4">
            <div id="side-music-list" 
            className="flex flex-1 h-full max-w-1/4 bg-gray-700 text-white"
            >
                <SideDisplay items={testItems} />
            </div>
            <div id="main-music-list" 
            className="flex flex-1 h-full max-w-4/5 bg-gray-800 text-white"
            >
                <MainDisplay items={testItems} />
            </div>
        </div>
    )
}

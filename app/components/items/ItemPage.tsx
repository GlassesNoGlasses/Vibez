
import Placeholder from "../../../src/svgs/item_display_placeholder.svg";
import { DisplayItemType, type Album, type Artist, type DisplayItem, type Song } from "~/constants/Items";
import type ItemPageProps from "./ItemPageProps";

export default function ItemPage({displayItem, onBack}: ItemPageProps) {


    const songDisplay = (displayItem: DisplayItem) => {
        if (displayItem.type !== DisplayItemType.Song) {
            throw new TypeError("displayItem is not a song");
        }

        const song = displayItem as Song;

        return (
            <div className="flex flex-1 flex-col h-full w-full bg-gray-500 items-center justify-center align-middle gap-6 overflow-y-auto">
                <div className="flex flex-row h-5/6 w-full items-center justify-evenly p-4 border-blue-600 border-2 rounded">
                    <img src={song.imageUrl ? song.imageUrl : Placeholder} alt={song.title} className="h-auto max-w-1/4 object-cover rounded" />
                    <div className="flex flex-1 flex-col w-1/2  justify-center ml-4 text-center text-white gap1">
                        <h2 className="text-lg font-semibold">{song.title}</h2>
                        <p className="text-sm">{song.releaseDate}</p>
                        {song.album && (
                            <p className="text-sm">{song.album.albumName}</p>
                        )}
                        <p className="text-shadow-md text-sm text-gray-300">{song.artists.map(artist => artist.name).join(" | ")}</p>
                    </div>
                </div>  
                <div className="flex flex-1 flex-col max-h-fit w-full items-center justify-start">
                    <h3 className="text-xl font-semibold mb-2">Lyrics</h3>
                    <div className="max-w-3xl p-4 bg-gray-900 rounded shadow-lg whitespace-pre-wrap">
                        {song.lyrics ? song.lyrics : "Lyrics not available."}
                    </div>
                </div>
            </div>
        )
    }

    const albumDisplay = (displayItem: DisplayItem) => {
        if (displayItem.type !== "album") {
            throw new TypeError("displayItem is not an album");
        }

        const album = displayItem as Album;

        return (
            <div className="flex flex-1 flex-col h-full w-full bg-gray-500 items-center justify-center align-middle gap-6 overflow-y-auto">
                <div className="flex flex-row h-5/6 w-full items-center justify-evenly p-4 border-blue-600 border-2 rounded">
                    <img src={album.imageUrl ? album.imageUrl : Placeholder} alt={album.title} className="h-auto max-w-1/4 object-cover rounded" />
                    <div className="flex flex-1 flex-col w-1/2  justify-center ml-4 text-center text-white gap1">
                        <h2 className="text-lg font-semibold">{album.albumName}</h2>
                        <p className="text-sm">{`Type: ${album.albumType}`}</p>
                        <p className="text-shadow-md text-sm text-gray-300">{album.artists.map(artist => artist.name).join(" | ")}</p>
                        <p className="text-sm">{`Genres: ${album.genres.join(" | ")}`}</p>
                        <p className="text-sm">{album.releaseDate}</p>
                    </div>
                </div>  
                <div className="flex flex-1 flex-col max-h-fit w-full items-center justify-start">
                    <h3 className="text-xl font-semibold mb-2">Description</h3>
                    <div className="max-w-3xl p-4 bg-gray-900 rounded shadow-lg whitespace-pre-wrap">
                        {album.description ? album.description : "Description not available."}
                    </div>
                </div>
            </div>
        )
    }

    const artistDisplay = (displayItem: DisplayItem) => {
        if (displayItem.type !== "artist") {
            throw new TypeError("displayItem is not an artist");
        }

        const artist = displayItem as Artist;

        return (
            <div className="flex flex-1 flex-col h-full w-full bg-gray-500 items-center justify-center align-middle gap-6 overflow-y-auto">
                <div className="flex flex-row h-5/6 w-full items-center justify-evenly p-4 border-blue-600 border-2 rounded">
                    <img src={artist.imageUrl ? artist.imageUrl : Placeholder} alt={artist.title} className="h-auto max-w-1/4 object-cover rounded" />
                    <div className="flex flex-1 flex-col w-1/2  justify-center ml-4 text-center text-white gap1">
                        <h2 className="text-lg font-semibold">{artist.name}</h2>
                        <p className="text-sm">{`Type: ${artist.artistType}`}</p>
                        {artist.birthDate && <p className="text-sm">{`Birth Date: ${artist.birthDate}`}</p>}
                        <p className="text-sm">{`Genres: ${artist.genres.join(" | ")}`}</p>
                        <p className="text-sm">{`Followers: ${artist.followers ? artist.followers.toLocaleString() : "N/A"}`}</p>
                    </div>
                </div>  
                <div className="flex flex-1 flex-col max-h-fit w-full items-center justify-start">
                    <h3 className="text-xl font-semibold mb-2">Description</h3>
                    <div className="max-w-3xl p-4 bg-gray-900 rounded shadow-lg whitespace-pre-wrap">
                        {artist.description ? artist.description : "Description not available."}
                    </div>
                </div>
            </div>
        )
    }

    const defaultDisplay = (displayItem: DisplayItem) => {
        try {
            switch (displayItem.type) {
                case DisplayItemType.Song:
                    return songDisplay(displayItem);
                case DisplayItemType.Album:
                    return albumDisplay(displayItem);
                case DisplayItemType.Artist:
                    return artistDisplay(displayItem);
                default:
                    return <div>Unknown displayItem type</div>;
            }
        } catch (error) {
            console.error("Error displaying displayItem:", error);
            return <div>Error displaying displayItem</div>;
        }
    }


    return (
        <div className="flex flex-1 h-full w-full bg-gray-800 text-white">
            {defaultDisplay(displayItem)}
        </div>
    )
}


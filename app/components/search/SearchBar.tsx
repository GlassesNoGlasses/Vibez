
import type SearchBarProps from "./SearchBarProps";
import SearchIcon from "../../../src/svgs/search_icon.svg";
import { useEffect, useState } from "react";

export default function SearchBar({params}: {params: SearchBarProps}) {
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        if (params.onChange) {
            params.onChange(searchTerm);
        }
    }, [searchTerm]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.trim(); // TODO: handle user input better
        setSearchTerm(value);
    }

    return (
        <div className="flex flex-row flex-1 w-full h-full flex-shrink-0 justify-center items-center align-middle gap-2 bg-gray-600 rounded p-2">
            <img src={SearchIcon} alt="Search Icon" className="h-6 w-6"/>
            <input
                className="text-white p-2"
                type="text"
                placeholder={params.placeholder || "Search..."}
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        params.onEnter(e.currentTarget.value);
                        setSearchTerm("");
                    }
                }}
            />
        </div>
    )
}


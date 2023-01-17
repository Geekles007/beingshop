import React, {memo} from "react";
import {Search} from "lucide-react";
import SearchInput from "./components/search-input";
import SearchDropdown from "./components/search-dropdown";
import ResultsPanel from "./components/results-panel";
import {SearchProvider} from "./context/search-context";
import {useSearch} from "./hooks/useSearch";

interface AdvancedSearchProps extends Pick<HTMLInputElement, "className" | "placeholder"> {

}

const AdvancedSearch = ({className, placeholder}: AdvancedSearchProps) => {
    const search = useSearch();

    return <SearchProvider value={search} >
        <div className={`relative rounded bg-gray-100 h-11 ${className}`}>
            <div className="flex items-center h-full gap-2 pl-4">
                <SearchInput placeholder={placeholder} />
                <SearchDropdown items={["Books", "Cameras", "Computers", "Crafts", "Musics"]} placeholder={"Categories"} />
                <button className={"bg-primary-400 h-full w-11 flex items-center justify-center rounded"} type={"button"}>
                    <Search className={"text-white"} size={20} />
                </button>
            </div>
            <ResultsPanel />
        </div>
    </SearchProvider>

}

export default memo(AdvancedSearch);

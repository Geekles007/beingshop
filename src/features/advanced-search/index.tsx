import React, {memo} from "react";
import {Search} from "lucide-react";

interface AdvancedSearchProps extends Pick<HTMLDivElement, "className"> {

}

const AdvancedSearch = ({className}: AdvancedSearchProps) => {

    return <div className={`flex items-center rounded bg-gray-100 h-10 px-2 ${className}`}>
        <Search size={20} className={"text-gray-400"} />
    </div>

}

export default memo(AdvancedSearch);

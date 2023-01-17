import React, {memo} from "react";
import {useMenuContext} from "../context/menu-context";

type ResultsPanelProps = {}

const ResultsPanel = ({}: ResultsPanelProps) => {
    const {show} = useMenuContext();

    return <div className={`p-2 rounded-md bg-gray-800 w-full transition-all duration-500
    ${show ? "h-56 pointer-events-auto opacity-100 mb-0" : "h-4 pointer-events-none opacity-0 -mb-6"}`}>

    </div>

}

export default memo(ResultsPanel);

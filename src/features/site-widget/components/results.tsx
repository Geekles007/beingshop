import React, {memo, PropsWithChildren} from "react";
import {useMenuContext} from "../context/menu-context";

interface ResultsPanelProps extends PropsWithChildren {}

const ResultsPanel = ({children}: ResultsPanelProps) => {
    const {show} = useMenuContext();

    return <div className={`p-6 rounded-md bg-gray-800 w-full transition-all duration-500 overflow-hidden
    ${show ? "h-[250px] pointer-events-auto opacity-100 mb-0 visible" : "h-0 pointer-events-none opacity-0 -mb-14 invisible"}`}>
        <div className={`h-full ${show ? "block" : "hidden"}`}>
            {children}
        </div>
    </div>

}

export default memo(ResultsPanel);

import React, {memo, useRef} from "react";
import {useSearchContext} from "../context/search-context";
import useOutsideClick from "../../../hooks/use-outside-click.hook";

type ResultsPanelProps = {}

const ResultsPanel = ({}: ResultsPanelProps) => {
    const {show, setShow} = useSearchContext();
    const resultRef = useRef<HTMLDivElement>(null);

    useOutsideClick(resultRef, () => {
        setShow(false);
    })

    return <div ref={resultRef} className={`absolute w-full text-sm text-white bg-gray-800 mt-2 
    rounded p-2 h-36 transition-all duration-500 
    ${show ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
        ResultsPanel
    </div>

}

export default memo(ResultsPanel);

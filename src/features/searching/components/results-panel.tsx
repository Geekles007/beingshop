import React, {memo} from "react";
import {useSearchContext} from "../context/search-context";
import useOutsideClick from "../../../hooks/use-outside-click.hook";

type ResultsPanelProps = {
    resultRef: React.RefObject<HTMLDivElement>;
}

const ResultsPanel = ({resultRef}: ResultsPanelProps) => {
    const {show, setShow} = useSearchContext();

    useOutsideClick(resultRef, () => {
        setShow(false);
    })

    return <div ref={resultRef} className={`absolute w-full text-sm text-white bg-gray-800 mt-2 
    rounded p-2 h-36 transition-all duration-500 
    ${show ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-3 opacity-0 pointer-events-none"}`}>
        ResultsPanel
    </div>

}

export default memo(ResultsPanel);

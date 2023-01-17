import React, {memo, useRef, useState} from "react";
import {ChevronDown} from "lucide-react";
import useOutsideClick from "../../hooks/use-outside-click.hook";

type DropdownProps = {
    items?: Array<string>;
    defaultValue?: string;
    placeholder?: string;
}

const Dropdown = ({items, defaultValue, placeholder}: DropdownProps) => {
    const [selectedItem, setSelectedItem] = useState(defaultValue);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);

    const selectHandler = (item: string) => {
        setSelectedItem(item);
    }

    useOutsideClick(anchorRef, () => {
        setOpen(false);
    })

    return <div className={"relative"}>
        <div ref={anchorRef} className={"cursor-pointer flex items-center gap-1"} onClick={() => setOpen(old => !old)}>
            <span className={"text-gray-500 text-sm"}>{selectedItem ?? placeholder}</span>
            <ChevronDown className={"text-gray-500"} size={14} />
        </div>
        <div className={`min-w-full absolute right-0 shadow min-h-0 
        bg-white rounded transition-all duration-500 z-10 overflow-hidden
        ${open ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-3 opacity-0 pointer-events-none"}`}>
            {
                items?.map((item, index) => {
                    return <div className={`cursor-pointer py-1 px-2 ${item === selectedItem ? "bg-primary-400" : ""}`} onClick={() => selectHandler(item)} key={index}>
                        {item}
                    </div>
                })
            }
        </div>
    </div>

}

export default memo(Dropdown);

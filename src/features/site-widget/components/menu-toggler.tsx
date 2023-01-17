import React, {memo} from "react";
import {Menu} from "lucide-react";
import {useMenuContext} from "../context/menu-context";

type MenuTogglerProps = {}

const MenuToggler = ({}: MenuTogglerProps) => {

    const {show, setShow} = useMenuContext();

    return <>
        <div className={`h-full min-w-0 transition-all duration-500 px-6 bg-gray-800 
        rounded-md flex items-center gap-2 h-[60px] text-white text-sm cursor-pointer
        ${show ? "w-full justify-between" : " w-36"}`}>
            <strong className={"flex gap-2"}> <span className={"text-primary-400"}>.</span> Home</strong>
            {
                !show ?
                    <Menu className={"cursor-pointer"} onClick={() => setShow(true)} size={16} /> :
                    null
            }
        </div>
    </>

}

export default memo(MenuToggler);

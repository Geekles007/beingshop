import React, {memo} from "react";
import {useMenuContext} from "../context/menu-context";
import {X} from "lucide-react";

type MenusProps = {}

const linkStyle = "rounded-md border border-gray-400 bg-transparent hover:bg-gray-600/[.5] transition-all duration-500 p-2 px-4 h-full text-xs flex items-center";

const Menus = ({}: MenusProps) => {

    const links = ["Home", "Today's Deals", "Trending Products", "Blog", "Special Offers"];
    const {show, setShow} = useMenuContext();

    return <div className={`h-[60px] overflow-hidden rounded-md flex items-center text-white 
    transition-all duration-500 justify-between ${show ? "bg-primary-400 w-16" : "w-full bg-gray-500 p-2"}`}>
        {
            show ? <a className={"w-full h-full flex items-center justify-center cursor-pointer"} onClick={() => setShow(false)}>
                    <X size={16} />
                </a> :
                <>
                    <span className={"text-sm text-gray-300 mr-4"}>Home</span>
                    <div className={`flex h-full gap-2 items-center transition-all 
                    duration-500 delay-500 ease-in-out ${show ? "opacity-0" : "opacity-100"}`}>
                        {
                            links?.map((item, index) => {
                                return <a href="#" className={`${linkStyle}`} key={index}>{item}</a>
                            })
                        }
                    </div>
                </>
        }
    </div>

}

export default memo(Menus);

import React, {memo, useState} from "react";
import {getMapInfos, slugger, splicer} from "../../../utils";
import {MENUS} from "../../../data/menus";
import {LinkMap} from "../../../models/LinkMap";
import {ArrowRight} from "lucide-react";

type MenuContentProps = {}

const MenuContent = ({}: MenuContentProps) => {

    const menus = getMapInfos(MENUS, "values") as LinkMap[];
    const [selected, setSelected] = useState<LinkMap>(menus[0]);

    return <div className="flex items-start h-full gap-4">
        <div className="links-box h-full w-52 relative overflow-y-scroll pr-2" id={"style-3"}>
            {
                menus.map((item, index) => {
                    return <a onClick={item?.list ? () => setSelected(item) : () => {}} key={index} className={`h-8 pl-6 pr-2 text-gray-400 cursor-pointer 
                    hover:border-l hover:text-gray-100 hover:border-l-primary-400 hover:text-gray-100 
                    flex items-center justify-between ${selected?.id === item?.id ? "border-l text-gray-100 border-l-primary-400 text-gray-100 " : ""}`}>
                        <span className={"text-xs transition-all duration-500"}>{item?.title}</span>
                        {
                            item?.list ? <ArrowRight size={15}/> : null
                        }
                    </a>
                })
            }
        </div>
        <div className={`flex-1 flex transition-all duration-500 ${selected ? "opacity-100" : "opacity-0"}`}>
            {
                splicer(selected?.list, 6).map((item, index) => {
                    return <div key={`box-${index}`} className="links-box h-full w-52 relative">
                        {
                            item?.map((item, index) => {
                                return <a href={`/${slugger(item)}`} key={`link-${index}`}
                                          className={`h-8 pl-6 pr-2 text-gray-400 cursor-pointer 
                    hover:border-l hover:text-gray-100 hover:border-l-primary-400 hover:text-gray-100 
                    flex items-center justify-between`}>
                                    <span className={"text-xs transition-all duration-500"}>{item}</span>
                                </a>
                            })
                        }
                    </div>
                })
            }
        </div>
    </div>

}

export default memo(MenuContent);

import React, {memo} from "react";
import {ShoppingBag} from "lucide-react";
import Dropdown from "../components/ui/dropdown";
import langs from "./../data/lang.json";
import currencies from "./../data/currencies.json";

type TopHeaderProps = {}

const TopHeader = ({}: TopHeaderProps) => {

    return <div className={"w-screen h-8 bg-gray-100 flex items-center"}>
        <div className=" flex items-center justify-between w-full max-w-9xl mx-auto">
            <div className="text-gray-500 flex items-center gap-2">
                <ShoppingBag size={16} />
                <span className={"text-sm "}>Up to 70% off the entire store!</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
                <Dropdown items={currencies} defaultValue={"RUB"} placeholder={"Select currency"} />
                <Dropdown items={langs} defaultValue={"EN"} placeholder={"Select language"} />
            </div>
        </div>
    </div>

}

export default memo(TopHeader);

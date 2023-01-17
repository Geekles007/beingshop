import React, {memo} from "react";
import AdvancedSearch from "../features/searching";
import HeaderButton from "../components/ui/header-button";
import BubbleIcon from "../components/ui/bubble-icon";
import {Heart, ShoppingCart, User} from "lucide-react";

type BottomHeaderProps = {}

const Logo = () => {
    return <strong className={"text-3xl tracking-wider font-bold m-0 p-0"}>BEING<span className={"text-primary-400"}>.</span>SHOP</strong>
}

const BottomHeader = ({}: BottomHeaderProps) => {

    return <>
        <div className={"w-screen h-16 flex items-center"}>
            <div className=" flex items-center justify-between w-full max-w-9xl mx-auto gap-4">
                <Logo />
                <div className="flex flex-1 items-center gap-5">
                    <AdvancedSearch placeholder={"Search a product"} className={"flex-1"} />
                    <a>
                        <HeaderButton title={"Sign In"} value={"Account"} render={<User size={26} />} />
                    </a>
                    <a>
                        <BubbleIcon render={<Heart size={26} />} count={4} />
                    </a>
                    <a>
                        <HeaderButton
                            title={"Total"}
                            value={"$0.00"}
                            render={<BubbleIcon render={<ShoppingCart size={26} />} count={14} />} />
                    </a>
                </div>
            </div>
        </div>
    </>

}

export default memo(BottomHeader);

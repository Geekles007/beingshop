import React, {memo, useRef} from "react";
import MenuToggler from "./components/menu-toggler";
import {MenuProvider} from "./context/menu-context";
import {useMenu} from "./hooks/useMenu";
import Menus from "./components/menus";
import ResultsPanel from "./components/results";
import useOutsideClick from "../../hooks/use-outside-click.hook";

type SiteWidgetProps = {}

const SiteWidget = ({}: SiteWidgetProps) => {

    const menu = useMenu();
    const customRef = useRef<HTMLDivElement>(null);

    useOutsideClick(customRef, () => {
        menu?.setShow(false);
    })

    return <MenuProvider value={menu}>
        <div ref={customRef} className={`flex flex-col w-[750px] absolute bottom-4 left-1/2 rounded-md -translate-x-1/2 p-2 gap-2 bg-black/[.4] transition-all duration-500`}>
            <ResultsPanel />
            <div className="flex gap-2 items-center">
                <MenuToggler />
                <Menus />
            </div>
        </div>
    </MenuProvider>

}

export default memo(SiteWidget);

import React, {memo} from "react";
import {Outlet} from "react-router-dom";
import TopHeader from "./top-header";
import BottomHeader from "./bottom-header";
import SiteWidget from "../features/site-widget";

type ContainerProps = {}

const Container = ({}: ContainerProps) => {

    return <div>
        <TopHeader />
        <BottomHeader />
        <Outlet />
        <SiteWidget />
    </div>

}

export default memo(Container);

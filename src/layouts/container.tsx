import React, {memo} from "react";
import {Outlet} from "react-router-dom";
import TopHeader from "./top-header";
import BottomHeader from "./bottom-header";

type ContainerProps = {}

const Container = ({}: ContainerProps) => {

    return <div>
        <TopHeader />
        <BottomHeader />
        <Outlet />
    </div>

}

export default memo(Container);

import React, {memo} from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "../../pages/home";
import Container from "../../layouts/container";

type RoutingProps = {}

const Routing = ({}: RoutingProps) => {

    return <Routes>
        <Route path={"/"} element={<Container />}>
            <Route index element={<HomePage />} />
        </Route>
    </Routes>

}

export default memo(Routing);

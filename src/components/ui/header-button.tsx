import React, {memo} from "react";

type AccountButtonProps = {
    render: JSX.Element;
    title: string;
    value: string;
}

const HeaderButton = ({render, title, value}: AccountButtonProps) => {

    return <div className={"flex gap-2 items-center cursor-pointer"}>
        {render}
        <div className="flex flex-col justify-start">
            <span className={"text-xs text-gray-400"}>{title}</span>
            <strong className="text-xs -m-0.5">{value}</strong>
        </div>
    </div>

}

export default memo(HeaderButton);

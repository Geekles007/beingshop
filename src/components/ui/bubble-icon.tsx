import React, {memo} from "react";

interface LikesButtonProps {
    count: number;
    render?: JSX.Element;
}

const BubbleIcon = ({count, render}: LikesButtonProps) => {

    return <a className={"relative"}>
        <div className="absolute -top-1.5 -right-1.5 bg-primary-400 text-xs h-4 flex items-center justify-center rounded-3xl px-1">{count}</div>
        {render}
    </a>

}

export default memo(BubbleIcon);

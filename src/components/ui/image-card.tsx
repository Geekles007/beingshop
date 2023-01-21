import React, {memo} from "react";

type ImageCardProps = {
    src?: string;
    title?: string;
    amount?: number;
    discount?: number;
}

const ImageCard = ({src}: ImageCardProps) => {

    return <div className="shadow h-80 rounded overflow-hidden">
        <img className={"object-cover object-center h-full w-full"} src={src} alt="image"/>
    </div>

}

export default memo(ImageCard);

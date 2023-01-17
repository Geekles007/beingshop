import React, {memo} from "react";

type BannerProps = {}

const Banner = ({}: BannerProps) => {

    return <div className={"w-screen flex items-center"}>
        <div className=" flex items-center gap-4 h-80 justify-between rounded w-full max-w-9xl mx-auto gap-4">
            <div className="flex-1 overflow-hidden rounded h-full">
                <img className={"w-full h-full object-center object-cover"}
                     src="https://t4.ftcdn.net/jpg/04/50/91/67/360_F_450916782_ephwoRFhkUdv9sHuOegPgutiADRlz41o.jpg"
                     alt="banner image"/>
            </div>
            <div className="w-80 bg-gray-800 h-full rounded overflow-hidden">
                <img className={"object-center object-cover"}
                     src="https://media1.giphy.com/media/CgD8n5TzbATlsqgh2c/giphy.gif?cid=790b7611c006c921ab67cb8a8feb931a82ff3f90ba5125e4&rid=giphy.gif&ct=g" alt="ads"/>
            </div>
        </div>
    </div>

}

export default memo(Banner);

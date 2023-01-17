import React, {memo} from "react";
import Banner from "../components/ui/banner";
import ImageCard from "../components/ui/image-card";

type HomePageProps = {}

const HomePage = ({}: HomePageProps) => {

    return <div>
        <div className="mt-4">
            <Banner/>
        </div>
        <div className="mt-4">
            <div className={"w-screen flex items-center"}>
                <div className="grid gap-5 grid-cols-4 flex items-center justify-between w-full max-w-9xl mx-auto gap-4">
                    {
                        [1,2,3,4].map((item, key) => {
                            return <ImageCard src={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"} key={key} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>

}

export default memo(HomePage);

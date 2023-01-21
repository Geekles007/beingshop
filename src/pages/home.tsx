import React, {memo} from "react";
import Banner from "../components/ui/banner";
import ImageCard from "../components/ui/image-card";
import StepItem from "../components/ui/step-item";
import {Truck} from "lucide-react";
import Pricing from "../components/ui/pricing";

type HomePageProps = {}

const HomePage = ({}: HomePageProps) => {

    return <div className={"pb-28"}>
        <div className="mt-4">
            <Banner/>
        </div>
        <div className="mt-4">
            <div className={"w-screen flex items-center"}>
                <div
                    className="grid gap-5 grid-cols-2 flex items-center justify-between w-full max-w-9xl mx-auto gap-4">
                    {
                        [1, 2].map((item, key) => {
                            return <ImageCard
                                src={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"}
                                key={key}/>
                        })
                    }
                </div>
            </div>
        </div>
        <div className="my-16">
            <div className={"w-screen flex items-center"}>
                <div
                    className="grid gap-5 grid-cols-4 flex items-center justify-between w-full max-w-9xl mx-auto gap-4">
                    {
                        [1, 2, 3, 4].map((item, index) => {
                            return <StepItem key={index} icon={<Truck/>} title={"Free Delivery"}
                                             description={"Free shipping on all order"}/>
                        })
                    }
                </div>
            </div>
        </div>
        <div className={"w-screen flex items-center"}>
            <div className="w-full max-w-9xl mx-auto gap-4">
                <div className="grid grid-rows-4 grid-flow-col gap-4">
                    <div className="rounded shadow p-2 row-span-4
                    col-span-2 bg-gray-100 h-[30rem] flex gap-6">
                        <div className="h-full w-[28rem] bg-white overflow-hidden rounded bg-repeat bg-center bg-cover
                        bg-[url('https://i5.walmartimages.com/asr/12870b37-2928-4748-8e87-868e44ed218d.89acba7601d9b7c641d3c880ce173893.jpeg')]"/>
                        <div className="flex flex-col gap-3 items-start mt-8">
                            <span className="rounded-2xl bg-primary-200/[.4] text-primary-800 text-xs px-3 py-1">Deals Of The Day</span>
                            <strong className={"text-4xl w-3/4"}>Xbox Series X New Generation</strong>
                            <Pricing className={"mt-3"} amount={350} discount={550}/>
                            <p className={"text-sm text-gray-400 w-[450px]"}>Avec Smart Delivery, vous pouvez acheter une seule fois un jeu compatible et toujours
                                avoir la meilleure version disponible pour la console sur laquelle vous jouez.</p>
                            <div className="flex flex-col w-full">
                                <div className="flex justify-between text-sm">
                                    <span>Sold: 15</span>
                                    <span>Available: 25</span>
                                </div>
                                <div className="relative w-full rounded-2xl h-3 bg-gray-200 overflow-hidden">
                                    <div className="bg-primary-400 left-0 h-full rounded-2xl" style={{width: `${(15*100)/25}%`}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href={"#"} className="rounded shadow p-2 row-span-2 col-span-3 bg-gray-100 bg-right bg-cover
                    bg-[url('https://mfs.ezvizlife.com/b7264480ea3524d251ae64a601513e7c.jpg?ver=2027754115')]">
                        <div className="flex flex-col">
                            <strong>Product 1</strong>
                            <Pricing amount={300} className={""} />
                        </div>
                    </a>
                    <a href={"#"} className="rounded shadow p-2 row-span-2 col-span-3 bg-gray-100  bg-right bg-cover
                    bg-[url('https://www.plans.fr/wp-content/uploads/2020/05/test-camera-xiaomi-sans-fil-mijia.jpg')]">
                        <div className="flex flex-col">
                            <strong>Product 2</strong>
                            <Pricing amount={120} className={"text-lg"} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

}

export default memo(HomePage);

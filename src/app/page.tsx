"use client";

import Streamer from "../components/streamer";

const url = "https://streams.vagon.io/streams/138c66e1-1992-423c-ad9c-cccf581b5efa";
export default function Home() {

    return (
        <div className="w-full h-screen">
            <Streamer streamUrl={url} usePlaceholder={false}/>
        </div>
    );
}

"use client";

import Streamer from "../components/streamer";

const url = "https://streams.vagon.io/streams/d5f4dff2-1b7c-4710-93a1-b76f7867703f";
export default function Home() {

    return (
        <div className="w-full h-screen">
            <Streamer streamUrl={url} usePlaceholder={false}/>
        </div>
    );
}

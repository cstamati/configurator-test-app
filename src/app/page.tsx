"use client";

import Streamer from "../components/streamer";

const url = "https://streams.vagon.io/streams/b49ac465-6116-4189-8802-65362f793ad6";
export default function Home() {

    return (
        <div className="w-full h-screen">
            <Streamer streamUrl={url} usePlaceholder={false}/>
        </div>
    );
}

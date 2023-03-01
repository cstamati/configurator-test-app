"use client";
import Image from "next/image";

const Streamer = ({ streamUrl, usePlaceholder }: { streamUrl: string; usePlaceholder: boolean }) => {
    return (
        <div className="relative overflow-hidden w-full h-full">
            {usePlaceholder ? (
                <Image
                    className="object-cover w-full h-full"
                    src="/assets/stream_placeholder.png"
                    alt="placeholder"
                    width={1920}
                    height={1080}></Image>
            ) : (
                <iframe
                    id="vagonFrame"
                    className="aspect-ratio-16-9 custom-aspect-16-9 custom-aspect-not-16-9"
                    src={streamUrl}
                ></iframe>
            )}
        </div>
    );
};
export default Streamer;

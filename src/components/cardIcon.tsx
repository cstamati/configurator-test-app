import React from 'react';
import Image from "next/image";

interface CardIconProps{
    name: string,
    iconPath?: string
    active?: boolean
}

const CardIcon = (props : CardIconProps) => {
    return (
        <li className={`${props.active ? "select" : ""} bg-on-dark rounded-2xl p-4 text-center shadow-xl text-white`}>
            <div className="p-4 justify-center items-center flex">
                <Image src={props.iconPath ? "/assets/" + props.iconPath + ".png" : "/assets/placeholder_image.png"} width={72} height={72} alt="item" />
            </div>
            <p className="p-4 text-md">{props.name}</p>
        </li>
    );
};

export default CardIcon;
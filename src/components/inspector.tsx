"use client";
import React from "react";

interface InspectorProps {
    isVisible: boolean;
    children: React.ReactNode;
}

const Inspector = (props: InspectorProps) => {

    return (
        <div className={`${props.isVisible ? "block" : "hidden"} relative flex top-0 right-0`}>
            {props.children}
        </div>
    );
};

export default Inspector;

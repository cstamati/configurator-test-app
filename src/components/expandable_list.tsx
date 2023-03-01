"use client";
import React, { useState } from "react";

interface ExpandableListProps {
    children: React.ReactNode;
    name: string;
    description?: string
    isExpanded: boolean;
};

const ExpandableList = (props: ExpandableListProps) => {

    const [isCollapsed, setIsCollapsed] = useState(props.isExpanded);

    return (
        <div>
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className={`${
                    isCollapsed ? "" : "select"
                } bg-on-dark rounded-xl w-full text-center p-4 text-white text-xl shadow-xl`}>
                {props.name}
            </button>
            <ul className={`${isCollapsed ? "hidden" : "block"} pt-6 flex grid grid-cols-2 gap-4`}>{props.children}</ul>
        </div>
    );
};

export default ExpandableList;

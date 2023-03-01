import React from "react";

const Tab = ({ tabName, active }: { tabName: string; active?: boolean }) => {
    return (
        <li className={`${active ? "bg-primary" : "bg-dark"} p-2 cursor-pointer`}>
            <p className="rotate-180 text-center text-2xl font-bold text-white" style={{ writingMode: "vertical-rl" }}>
                {tabName}
            </p>
        </li>
    );
};

export default Tab;

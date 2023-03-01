"use client";
import { categories } from "../utils";
import Image from "next/image";
import { useState } from "react";
import NavItem from "./nav_item";
import {Category} from "../types";

const showBrand = true;

const Dashboard = ({ onCategory }: { onCategory: (index: Category) => void }) => {

    const [categoryIndex, setCategoryIndex] = useState(-1);

    const selectCategory = (index: number) => {
        setCategoryIndex(index);
        onCategory(categories[index]);
    };

    return (
        <div className="min-w-fit bg-dark z-10 shadow-2xl">
            <div
                onClick={() => {
                    selectCategory(-1);
                }}
                className="flex gap-x-4 items-center p-5 pt-8">
                <Image
                    className={`${showBrand ? "" : "rounded-full"} cursor-pointer filter-gold`}
                    src={`${showBrand ? "/assets/logo_mb.png" : "/assets/logo_ww.png"}`}
                    alt="Logo"
                    width="50"
                    height="50"
                />
                <h1 className="cursor-pointer uppercase text-primary origin-left font-bold text-l">
                    {showBrand ? (
                        <p>
                            Modesto <br /> Bertotto
                        </p>
                    ) : (
                        "WeCONF"
                    )}
                </h1>
            </div>

            <ul className="pt-6">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            selectCategory(index);
                        }}>
                        <NavItem active={categoryIndex === index} name={category.name} icon={category.icon} />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;

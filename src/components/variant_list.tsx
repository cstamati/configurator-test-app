import React, { useState } from "react";
import ExpandableList from "./expandable_list";
import CardIcon from "./cardIcon";
import { Variant, VariantSet } from "../types";
import {getVariantIndex, getVariantsByIds} from "../utils";

interface VariantSetProps {
    variantSet: VariantSet;
    mapIndex?: number;
    onVariantChanged: (variantSet: string, variant: string) => void;
    selectionMap: Map<string, any>;
}

const VariantList = (props: VariantSetProps) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const getVariantList = (): Variant[] => {
        return getVariantsByIds(props.variantSet.variants);
    };

    const setCurrentSelection = (): void => {
        const variantSetName = props.variantSet.variantSet;
        const activeVariant = props.selectionMap.get(variantSetName);
        const variants = getVariantList();
        const active = getVariantIndex(activeVariant, variants);

        if(activeIndex !== active)
            setActiveIndex(active);
    }

    setCurrentSelection();

    return (
        <ExpandableList name={props.variantSet.name} isExpanded={props.mapIndex !== 0}>
            {getVariantList().map((v, variantIdx) => (
                <div
                    className="cursor-pointer"
                    key={variantIdx}
                    onClick={() => {
                        setActiveIndex(variantIdx);
                        props.onVariantChanged(props.variantSet.variantSet, getVariantList()[variantIdx]?.variant);
                    }}>
                    <CardIcon name={v.name} iconPath={v.thumbnailPath} active={activeIndex === variantIdx} />
                </div>
            ))}
        </ExpandableList>
    );
};

export default VariantList;

import { Category, Product, Variant, VariantSet } from "./types";

const useTempAlert = false;
export const tempAlert = (msg: string, milliseconds?: number) => {
    if (!useTempAlert) return;

    const ms = milliseconds ? milliseconds : 2000;

    const getOrCreateAlertContainer = (): HTMLElement => {
        const containerId = "alert_container";
        const container = document.getElementById(containerId);

        if (container) return container;

        const aContainer = document.createElement("div");
        aContainer.id = containerId;
        return aContainer;
    };

    const alertContainer = getOrCreateAlertContainer();

    if (!alertContainer) {
        console.error("Alert container not found!");
        return;
    }

    const createAlertBox = (msg: string): HTMLElement => {
        const alertContainer = document.createElement("div");
        alertContainer.id = "temp_alert";
        const msgContainer = document.createElement("span");
        msgContainer.innerHTML = msg;
        alertContainer.appendChild(msgContainer);
        return alertContainer;
    };

    const alert = createAlertBox(msg);
    alertContainer.appendChild(alert);

    setTimeout(function () {
        alert.parentNode?.removeChild(alert);
        if (alertContainer?.childNodes.length === 0) alertContainer?.remove();
    }, ms);

    document.body.appendChild(alertContainer);
};

export const categories: Category[] = [
    {
        id: 1,
        name: "Jacket",
        icon: "jacket",
        isHideable: true,
    },
    {
        id: 2,
        name: "Gilet",
        icon: "gilet",
        isHideable: true,
    },
    {
        id: 3,
        name: "Shirt",
        icon: "shirt",
        isHideable: false,
    },
    {
        id: 4,
        name: "Pants",
        icon: "pants",
        isHideable: false,
    },
];
export const products: Product[] = [
    {
        id: 1,
        categoryId: 1,
        name: "Modesto Bertotto Jacket",
        thumbnailPath: "",
        description: "",
    },
    {
        id: 2,
        categoryId: 2,
        name: "Modesto Bertotto Gilet",
        thumbnailPath: "",
        description: "",
    },
    {
        id: 3,
        categoryId: 3,
        name: "Modesto Bertotto Shirt",
        thumbnailPath: "",
        description: "",
    },
    {
        id: 4,
        categoryId: 4,
        name: "Modesto Bertotto Pant",
        thumbnailPath: "",
        description: "",
    },
];
export const variantSets: VariantSet[] = [
    {
        id: 1,
        productId: 1,
        name: "Select Rever",
        variantSet: "JacketRever",
        description: "",
        tabGroup: "Model",
        variants: [1, 2, 3],
    },

    {
        id: 2,
        productId: 1,
        name: "Jacket Fabric",
        variantSet: "JacketFabric",
        description: "Jacket fabric description",
        tabGroup: "Fabric",
        variants: [7, 8, 9, 10, 11],
    },
    {
        id: 3,
        productId: 2,
        name: "Gilet Model",
        variantSet: "GiletModel",
        description: "Jacket fabric description",
        tabGroup: "Model",
        variants: [15, 16],
    },
    {
        id: 4,
        productId: 2,
        name: "Gilet Fabric",
        variantSet: "GiletFabric",
        description: "",
        tabGroup: "Fabric",
        variants: [7, 8, 9, 10, 11, 12, 13, 14],
    },
    {
        id: 5,
        productId: 3,
        name: "Shirt Model",
        variantSet: "ShirtModel",
        description: "",
        tabGroup: "Model",
        variants: [17, 18],
    },
    {
        id: 6,
        productId: 3,
        name: "Shirt Fabric",
        variantSet: "ShirtFabric",
        description: "",
        tabGroup: "Fabric",
        variants: [19, 20, 21],
    },
    {
        id: 7,
        productId: 4,
        name: "Pants Fabric",
        variantSet: "PantsFabric",
        description: "",
        tabGroup: "Fabric",
        variants: [7, 8, 9, 10, 11],
    },
    {
        id: 8,
        productId: 1,
        name: "Stondatura fondo",
        variantSet: "JacketProbing",
        description: "",
        tabGroup: "Model",
        variants: [4, 5, 6],
    },
];
export const variants: Variant[] = [

    // Jacket Variants
    { id: 1, name: "Sila", variant: "Sila", thumbnailPath: "rever_sila" },
    { id: 2, name: "Di Caprio", variant: "DiCaprio", thumbnailPath: "rever_dicaprio" },
    { id: 3, name: "Tracy", variant: "Tracy", thumbnailPath: "rever_tracy" },

    // Jacket Probing
    { id: 4, name: "Fondo Stondato", variant: "Short", thumbnailPath: "" },
    { id: 5, name: "Fondo Regolare", variant: "Medium", thumbnailPath: "" },
    { id: 6, name: "Fondo Dritto", variant: "Long", thumbnailPath: "" },

    // Fabric Variants
    { id: 7, name: "Cool Wool", variant: "CoolWool", thumbnailPath: "" },
    { id: 8, name: "Gabardine Wool", variant: "GabardineWool", thumbnailPath: "" },
    { id: 9, name: "Bird's EyeWool", variant: "BirdsEyeWool", thumbnailPath: "" },
    { id: 10, name: "Braided Wool", variant: "BraidedWool", thumbnailPath: "" },
    { id: 11, name: "Chevron Wool", variant: "ChevronWool", thumbnailPath: "" },

    { id: 12, name: "Bird's EyeSilk", variant: "BirdsEyeSilk", thumbnailPath: "" },
    { id: 13, name: "Microwave JacquardSilk", variant: "MicrowaveJacquardSilk", thumbnailPath: "" },
    { id: 14, name: "Diamond JacquardSilk", variant: "DiamondJacquardSilk", thumbnailPath: "" },


    // Gilet
    { id: 15, name: "Monopetto", variant: "SingleBreasted", thumbnailPath: "gilet_single_breasted" },
    { id: 16, name: "Doppiopetto", variant: "DoubleBreasted", thumbnailPath: "gilet_double_breasted" },

    // Shirt Model
    { id: 17, name: "Semifrancese", variant: "Semifrancese", thumbnailPath: "shirt_semifrancese" },
    { id: 18, name: "Diplomatico", variant: "Diplomatico", thumbnailPath: "shirt_diplomatico" },

    // Shirt Fabric
    { id: 19, name: "Oxford", variant: "Oxford", thumbnailPath: "" },
    { id: 20, name: "Popeline Cotton", variant: "PopelineCotton", thumbnailPath: "" },
    { id: 21, name: "Twill Cotton", variant: "TwillCotton", thumbnailPath: "" },
];
export const getVariantSetsByCategory = (categoryId: number, groupName: string): VariantSet[] => {

    if (categoryId === -1){
        return [];
    }

    const product = products?.find((p) => p.categoryId === categoryId);

    if (!product){
        return [];
    }

    const vs = variantSets?.filter((vs) => vs.productId === product.id && vs.tabGroup === groupName);

    return vs;
};
export const getVariantsByIds = (ids: number[]): Variant[] => {
    return variants?.filter((p) => ids.includes(p.id));
};
export const getTabs = (category?: Category) : string[]=> {

    if(category === null)
        return [];

    const product = products?.find((p) => p.categoryId === category?.id);

    if (!product)
        return [];

    const tabs = variantSets?.filter((vs) => vs.productId === product.id).map(x => x.tabGroup);

    if(tabs === undefined)
        return [];

    return Array.from(new Set(tabs))
}
export const getVariantIndex = (variant: string, variantList: Variant[]): number => {
    return variantList.findIndex((x) => x.variant === variant);
};

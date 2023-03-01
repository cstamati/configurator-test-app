import Image from "next/image";

const NavItem = ({ name, icon, active }: { name: string, icon?:string, active?: boolean }) => {
    return (
        <div className="flex hover:bg-transparent-light cursor-pointer">
            <div className={`${active ? "visible" : "invisible"} w-1.5 bg-primary`}></div>
            <li className="text-primary text-sm grow flex items-center gap-x-4 p-2">
                <Image src={`/assets/${icon}.png`} width={32} height={32} alt="Category" />
                <span className="origin-left">{name}</span>
            </li>
        </div>
    );
};

export default NavItem;
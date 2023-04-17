"use client";

import { categories } from "../constants";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

function NavLinks() {
    const pathname = usePathname();
    const isActive = (path: string) => {
        return pathname?.split("/").pop() === path;
    };

    return (
        <nav>
            {categories.map((category) => (
                <NavLink key={category} category={category} isActive={isActive(category)} />
            ))}
        </nav>
    );
}

export default NavLinks;

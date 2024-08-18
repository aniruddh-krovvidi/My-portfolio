"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "blogs",
        path: "/blogs",
    },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                const isActive = link.path === pathname; 
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${
                            isActive ? "text-accent border-b-2 border-accent" : ""
                        } capitalize font-medium hover:text-accent transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;

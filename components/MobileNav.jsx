"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const links = [
    { name: "home", path: "/" },
    { name: "projects", path: "/projects" },
    { name: "about", path: "/about" },
    { name: "blogs", path: "/blogs" },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">Aniruddh<span className="text-accent">.</span></h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
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
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;

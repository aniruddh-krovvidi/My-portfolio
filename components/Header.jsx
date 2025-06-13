import Link from "next/link"; //to enable client-side navigation
import {Button} from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return(
        <header className="py-8 xl:py-10 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/*logo*/}
                <Link href = "/">
                    <h1 className="text-4xl font-semibold">
                        Aniruddh<span className="text-accent">.</span>
                    </h1>
                </Link>

                {/*Desktop nav*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <a href="mailto:akrovvidi05@gmail.com?subject=Discuss Job&body=I'd like to discuss a job/internship opportunity." 
                    target="_blank" rel="noopener noreferrer">
                        <Button>Contact me</Button>
                    </a>
                </div>

                {/* mobile nav*/}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
    );
};

export default Header;
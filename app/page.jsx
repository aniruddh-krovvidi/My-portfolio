import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Footer from "@/components/Footer"; 

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto flex flex-col justify-center">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              Hey, I'm <br /> <span>Aniruddh Krovvidi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            I specialize in tackling challenging problems and developing innovative software, 
            with hands-on experience in today’s most popular technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a 
                href="/resume/Aniruddh_Krovvidi_Resume.pdf" 
                download="Aniruddh_Krovvidi_Resume.pdf" 
                className="uppercase flex items-center gap-2"
              >
                <Button variant="outline" size="lg">
                  <span>My Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full 
                  flex justify-center items-center text-accent text-base 
                  hover:bg-accent hover:text-primary hover:transition-all duration-500" 
                />
              </div>
            </div>
          </div>
          <div>
            <Photo />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;

import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

const AboutMe = () => {
  const techStack = [
    { name: "JavaScript", src: "/tech-logos/javascript.png" },
    { name: "React", src: "/tech-logos/react.png" },
    { name: "Node.js", src: "/tech-logos/node.png" },
    { name: "Python", src: "/tech-logos/python.png" },
    { name: "Tailwind CSS", src: "/tech-logos/tailwindcss.png" },
    { name: "Django", src: "/tech-logos/django.png" },
    { name: "SQL", src: "/tech-logos/sql.png" },
    { name: "Git", src: "/tech-logos/git.png" },
    { name: "MongoDB", src: "/tech-logos/mongodb.png" },
    { name: "Next.js", src: "/tech-logos/nextjs.png" },
    { name: "Java", src: "/tech-logos/java.png" },
    { name: "C/C++", src: "/tech-logos/cpp.png" },
    { name: "Docker", src: "/tech-logos/docker.png" },
    { name: "Go", src: "/tech-logos/go.png" },
    { name: "Swift", src: "/tech-logos/swift.png" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <div className="flex-grow flex flex-col items-center px-6 py-12">
        
        <h1 className="text-4xl sm:text-5xl font-bold mb-14 text-center">
          A Quick Wiki Snapshot<span className='text-accent'>.</span>
        </h1>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full lg:max-w-4xl">
          
          <div className="w-3/4 sm:w-2/3 lg:w-1/2 lg:pr-6">
            <Image
              src="/IMG_2819.jpg"
              alt="Aniruddh Krovvidi"
              width={400}
              height={400}
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-6">
            <h2 className="text-3xl font-semibold mb-4 transition-transform duration-300 transform hover:scale-105">
              Who Am I<span className='text-accent'>?</span>
            </h2>
            <p className="text-lg leading-relaxed mb-4 tracking-wide">
              I'm a third-year Computer Science major at <span className="font-bold hover:text-blue-500">UC San Diego</span>, with a strong passion for <span className="font-semibold text-accent transition-transform duration-300 transform hover:scale-105">software development</span>.
              My journey in this field is driven by a commitment to continuous learning and a deep curiosity about how technology can solve real-world problems.
            </p>
            <br/>
            <p className="text-lg leading-relaxed mb-4 tracking-wide">
              With a focus on <span className="font-semibold text-accent ">full-stack development</span>, I excel in building solutions that are both functional and user-friendly. My strongest attributes are my dedication to work and determination to push boundaries, whether that means mastering new technologies or tackling complex challenges.
            </p>
            <br/>
            <p className="text-lg leading-relaxed mb-4 tracking-wide">
              I’m also not afraid to ask questions or seek clarification when needed, as I believe that acknowledging uncertainty is key to ensuring the highest quality in my work.
            </p>
          </div>
        </div>

        <div className="w-full mt-12 py-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-950"></div>
          <div className="relative z-10">
            <div className="marquee-container">
              <div className="marquee">
                {techStack.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={80}
                      height={80}
                      objectFit="contain"
                      className="tech-image"
                    />
                  </div>
                ))}
                {techStack.map((tech, index) => (
                  <div key={index + techStack.length} className="tech-item">
              <Image
              src={tech.src}
              alt={tech.name}
              width={80}
              height={80}
              className="tech-image"
            />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-12 py-8">
          <h3 className="text-4xl font-bold text-center mb-6 transition-transform duration-300 transform hover:scale-105">
            Other Stuff<span className='text-accent'>...</span>
          </h3>
          <ul className="text-lg space-y-4 max-w-3xl mx-auto list-disc list-inside">
            <li className="flex items-center space-x-2">
              <span role="img" aria-label="executive" className="text-xl">💼</span>
              <span className="font-medium">Currently Vice President: Tech at TBP Engineering Honors Society</span>
            </li>
            <li className="flex items-center space-x-2">
              <span role="img" aria-label="executive" className="text-xl">🧑🏻‍💻</span>
              <span className="font-medium">Software Developer @ Triton Software Engineering</span>
            </li>
            <li className="flex items-center space-x-2">
              <span role="img" aria-label="Football" className="text-xl">⚽</span>
              <span className="font-medium">Avid fan of football, cricket, and F1. Always up for a not-so-friendly debate on the latest matches!</span>
            </li>
            <li className="flex items-center space-x-2">
              <span role="img" aria-label="Manchester United" className="text-xl text-red-600">🔴</span>
              <span className="font-medium hover:text-red-600  transition-transform duration-300 transform hover:scale-105">Manchester United 🔝</span>
            </li>
            <li className="flex items-center space-x-2">
              <span role="img" aria-label="Golf" className="text-xl">⛳</span>
              <span className="font-medium">Golf enthusiast with a handicap of 12—working towards that elusive single-digit!</span>
            </li>
            <li className="flex items-center space-x-2">
              <span role="img" aria-label="Globe" className="text-xl">🌍</span>
              <span className="font-medium">A trivia buff who can name all the capital cities around the world—just a fun party trick!</span>
            </li>
            <li className="flex items-center space-x-2">
              <span role="img" aria-label="Car" className="text-xl">🚗</span>
              <span className="font-medium">Automobile aficionado, particularly fascinated by SUVs and the artistry of naturally aspirated engines.</span>
            </li>
            <li className="flex items-center space-x-2">
              <span role="img" aria-label="G63" className="text-xl">🏆</span>
              <span className="font-medium">Strong believer that the Mercedes G63 is the greatest production car to ever be built.</span>
            </li>
          </ul>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;

import Footer from "@/components/Footer";
import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Task Scheduler",
    description: "A microservices-based system that utilizes linear programming to optimize task distribution across distributed systems.",
    githubLink: "https://github.com/aniruddh-krovvidi/Task-Optimizer",
    image: "/images/wip.png",
    technologies: ["Go", "Kotlin", "Docker","Kubernetes"],
  },
  {
    title: "CarMania",
    description: "A full-stack web application for buying and selling cars in Dubai.",
    githubLink: "https://github.com/aniruddh-krovvidi/CarMania-FullStack",
    image: "/images/carmania.png",
    technologies: ["React", "Node.js", "Express.js","MongoDB"],
  },
  {
    title: "DevSurf",
    description: "A coder's journal for budding software engineers or passionate coders.",
    githubLink: "https://github.com/aniruddh-krovvidi/DevSurf",
    image: "/images/DevSurf.png",
    technologies: ["Node.js","HTML","CSS","JavaScript","SQLlite"],
  },
  {
    title: "AK's Page",
    description: "My own personal portfolio website.",
    githubLink: "https://github.com/aniruddh-krovvidi/My-portfolio",
    image: "/images/MyPage.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "TodoList",
    description: "A simple, yet stylish to-do list application with a Joker theme to ensure tasks are done.",
    githubLink: "https://github.com/aniruddh-krovvidi/TodoList",
    image: "/images/joker.png",
    technologies: ["Vue.js", "JavaScript", "HTML","CSS"],
  },
  {
    title: "StockAI",
    description: "Forecasting NVIDIA stock prices with smart machine learning, turning data into actionable insights.",
    githubLink: "https://github.com/aniruddh-krovvidi/StockAI",
    image: "/images/nvidia.png",
    technologies: ["Python", "TensorFlow", "XGBoost","pandas","numpy","scikit-learn","ta-lib"],
  },
  {
    title: "PremierLeague Predictor",
    description: "A model that predicts Premier League match outcomes with machine learning, using historical data to forecast wins and losses.",
    githubLink: "https://github.com/aniruddh-krovvidi/PremierLeague-WinPredictor",
    image: "/images/pl.png",
    technologies: ["Python", "Jupyter", "XGBoost","pandas","scikit-learn"],
  },
  {
    title: "BookHub",
    description: "A user-friendly Flask-based API that simplifies bookstore management with features for user registration, book operations, and secure login.",
    githubLink: "https://github.com/aniruddh-krovvidi/BookHub",
    image: "/images/books.png",
    technologies: ["Python", "Flask", "SQLlite","Swagger","Postman"],
  },

  
];

const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col bg-primary text-white">
      <div className="flex-grow flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-6">My Showroom:</h1>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between"
            >
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold mb-2 hover:text-accent">{project.title}</h2>
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-4 rounded-lg shadow-md"
                />
                <p className="mb-4">{project.description}</p>
              </div>
              <div className="mt-auto mb-4">
                <span className="font-semibold">Tech Stack:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-accent text-gray-900 py-1 px-2 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-4"
              >
                <div className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500">
                  <FaGithub className="w-5 h-5" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Projects;

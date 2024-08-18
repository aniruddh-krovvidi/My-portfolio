import React from "react";
import Link from 'next/link';
import Footer from "@/components/Footer";
import { FiDownload } from 'react-icons/fi';
import { Button } from "@/components/ui/button";

const blogs = [
  {
    title: "Serverless Architecture: Is It Worth It?",
    excerpt: "My own views on serverless architecture.",
    link: "/articles/rise-of-serverless-architecture",
    date: "August 1, 2024",
    image: "/images/serverless-architecture.png",
  },
  {
    title: "Microservices: The Secret Sauce to Scalable Software?",
    excerpt: "So..., is the buzzword legit?",
    link: "/articles/building-scalable-applications",
    date: "June 21, 2024",
    image: "/images/microservices.png",
  },
  {
    title: "Securing Cloud-Native Architectures",
    excerpt: "Discover the surprising lessons I’ve picked up about keeping cloud services secure and why it matters to everyone.",
    link: "/articles/cloud-architecture",
    date: "December 17, 2023",
    image: "/images/cloud.png",
  },
];

const Blogs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-900 to-purple-800 text-white">
      <main className="flex-grow flex flex-col items-center py-10">
        <section className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Tech Talks</h1>
          <p className="max-w-2xl mx-auto mb-12 text-lg">
            Read my personal insights on the latest trends and innovations in technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="mb-4 rounded-lg shadow-md object-cover h-48 w-full"
                />
                <h2 className="text-2xl font-semibold mb-2 hover:text-accent transition-colors duration-300">{blog.title}</h2>
                <p className="mb-4">{blog.excerpt}</p>
                <span className="text-sm text-gray-400 mb-4 block">{blog.date}</span>
                <Link href={blog.link} className="text-accent hover:underline flex items-center gap-2">
                  <span>Read More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h6V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          <section className="flex flex-col items-center mb-12">
            <h2 className="text-4xl font-bold mb-4">My Research Paper</h2>
            <p className="mb-4 text-md max-w-md text-center">
              The Impact of AI systems and tools in the Human Resources sourcing and selection process.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-lg">
              <iframe
                src="/AK-Research-Paper.pdf"
                className="w-full h-60 border-0"
                title="Research Paper"
              ></iframe>
              <Button
                variant="outline"
                size="lg"
                className="mt-4 flex items-center justify-center"
                href="/AK-Research-Paper.pdf"
                download
              >
                <span className="mr-2">Download Paper</span>
                <FiDownload className="text-xl" />
              </Button>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;

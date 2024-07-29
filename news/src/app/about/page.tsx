"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900">
      <div className="w-full max-w-4xl h-full max-h-[80vh] overflow-y-auto p-6 bg-gray-800 rounded-lg shadow-lg text-gray-200">
        <h1 className="text-4xl font-bold mb-4 text-center">About News Wave</h1>
        <p className="text-lg mb-4">
          Welcome to News Wave! We are a newsletter website dedicated to bringing you the latest and most exciting news from around the world.
        </p>
        <p className="text-lg mb-4">
          Our mission is to keep you informed and engaged with high-quality content curated just for you. Whether it's breaking news, insightful articles, or entertaining stories, we've got you covered.
        </p>
        <p className="text-lg mb-4">
          News Wave stands out in today's crowded news landscape by prioritizing quality over quantity. We believe in delivering well-researched and thoughtfully curated news that informs, entertains, and inspires our readers.
        </p>
        <p className="text-lg mb-4">
          Our team of dedicated editors and writers work tirelessly to bring you stories that matter. From in-depth analysis of current events to human interest pieces that touch your heart, News Wave is your trusted source for reliable news.
        </p>
        <p className="text-lg mb-4">
          Developed by 
          <Link href="https://www.linkedin.com/in/srajit-mishra-a40497214/">
            <Button className="ml-2 px-4 py-2 bg-black text-white rounded hover:bg-[#463bbd]">
              Srajit Mishra
            </Button>
          </Link>, 
          News Wave combines the power of Next.js, TypeScript, Tailwind CSS, and Shadcn to deliver a seamless and stylish user experience.
        </p>
        <p className="text-lg mb-4">
          Our use of Next.js ensures fast load times and excellent SEO performance, making sure you can access the news quickly and easily. TypeScript adds an extra layer of reliability to our codebase, while Tailwind CSS and Shadcn allow us to create beautiful, responsive designs that look great on any device.
        </p>
        <p className="text-lg mb-4">
          Thank you for choosing News Wave as your trusted source for news. We are committed to bringing you the best content and a delightful reading experience.
        </p>
        <Link href="/">
          <Button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-[#463bbd]">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default About;

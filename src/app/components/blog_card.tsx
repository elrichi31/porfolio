import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
interface BlogCardProps {
  src: string;
  title: string;
  children: React.ReactNode;
  date: string;
}

function BlogCard({ src, title, children, date }: BlogCardProps) {
  return (
    <a href='/blog/article' className="bg-[#545F65] hover:bg-[#444D52] p-4 rounded-lg w-80">

      {/* Header: Título y fecha */}
      <div className="mb-4 flex justify-between">
        <h2 className="text-white text-xl font-bold">{title}</h2>
        <p className="text-sm">{date}</p>
      </div>
      <div className="h-40 lg:h-64 xl:h-72 my-4 mx-0">
        <img
          src={src}
          alt="card-image"
          className="h-full w-full rounded-lg object-cover"
        />
      </div>

      {/* Descripción */}
      <p className=" text-sm mb-4">
        {children}
      </p>

      {/* Views y Likes */}
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-xs">99999 views</p>
        <div className="flex items-center">
          <AiFillHeart className="text-xs" />
          <span className="text-xs ml-2">99999</span>
        </div>
      </div>

    </a>
  );
}

export default BlogCard;

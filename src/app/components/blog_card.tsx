import React from 'react';
import Image from 'next/image';
interface BlogCardProps {
  src: string;
  title: string;
  children: React.ReactNode;
  date: string;
  slug: string;
  author: string;
  authorImage: string;
  tags: string[];
}

function BlogCard({ src, title, children, date, slug, author, authorImage, tags }: BlogCardProps) {
  return (
    <a href={`/${slug}`} className="">
      <div>
        <div className="h-40 lg:h-64 xl:h-72 my-4 mx-0">
          <img
            src={src}
            alt="card-image"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
        <div className="">
          <h2 className="text-white text-xl font-bold">{title}</h2>
          <p className="text-sm">{children}</p>
          <p className="text-sm mt-1">{date}</p>
          <div className='mt-2'>
            {tags.slice(0, 3).map((tag: string, index: number) => {
              return <span key={index} className='text-xs bg-[#008734] rounded-xl p-1 mr-1'>{tag}</span>
            })}
          </div>
          <div className='flex justfy-start items-center my-2'>
            <div>
              <Image className='mr-2 w-8 h-8 rounded-full object-cover' src={authorImage} width={500} height={500} alt={'image'}></Image>
            </div>
            <p className="text-sm">{author}</p>
          </div>
        </div>
      </div>

    </a>
  );
}

export default BlogCard;

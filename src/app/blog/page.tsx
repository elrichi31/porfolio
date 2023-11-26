"use client"
import React from 'react';
import BlogCard from '../components/blog_card';
import { allDocs } from 'contentlayer/generated'

function Blog() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">Blog</h1>

            <div className='grid gap-8 [@media(min-width:1386px)]:grid-cols-4 [@media(min-width:1075px)]:grid-cols-3 [@media(max-width:1074px)]:grid-cols-2 [@media(max-width:742px)]:grid-cols-1'>

                {
                    allDocs.map((doc: any, index) => {
                        return <BlogCard key={index} src={doc.image} title={doc.title} date={doc.published} slug={doc.slug} author={doc.author} authorImage={doc.imageAuthor} tags={doc.tags}>{doc.description}</BlogCard>
                    })
                }
            </div>
        </div>
    );
}

export default Blog;

"use client"
import React from 'react';
import BlogCard from '../components/blog_card';
function Blog() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">Blog</h1>

            <div className='grid gap-8 [@media(min-width:1386px)]:grid-cols-4 [@media(min-width:1075px)]:grid-cols-3 [@media(max-width:1074px)]:grid-cols-2 [@media(max-width:742px)]:grid-cols-1'>

                <BlogCard
                    src="https://via.placeholder.com/150"
                    title="Título 1"
                    date="01/01/2023"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at nam, amet consectetur asperiores ducimus suscipit adipisci
                    in quaerat id iste maxime similique placeat illum quas ab tempore tenetur neque doloremque. Dolores similique corporis commodi
                    porro culpa, nihil minus a.
                </BlogCard>

                <BlogCard
                    src="https://via.placeholder.com/150"
                    title="Título 2"
                    date="02/01/2023"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at nam, amet consectetur asperiores ducimus suscipit adipisci
                    in quaerat id iste maxime similique placeat illum quas ab tempore tenetur neque doloremque. Dolores similique corporis commodi
                    porro culpa, nihil minus a.
                </BlogCard>

                <BlogCard
                    src="https://via.placeholder.com/150"
                    title="Título 3"
                    date="03/01/2023"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at nam, amet consectetur asperiores ducimus suscipit adipisci
                    in quaerat id iste maxime similique placeat illum quas ab tempore tenetur neque doloremque. Dolores similique corporis commodi
                    porro culpa, nihil minus a.
                </BlogCard>
                <BlogCard
                    src="https://via.placeholder.com/150"
                    title="Título 3"
                    date="03/01/2023"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at nam, amet consectetur asperiores ducimus suscipit adipisci
                    in quaerat id iste maxime similique placeat illum quas ab tempore tenetur neque doloremque. Dolores similique corporis commodi
                    porro culpa, nihil minus a.
                </BlogCard>
                <BlogCard
                    src="https://via.placeholder.com/150"
                    title="Título 2"
                    date="02/01/2023"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at nam, amet consectetur asperiores ducimus suscipit adipisci
                    in quaerat id iste maxime similique placeat illum quas ab tempore tenetur neque doloremque. Dolores similique corporis commodi
                    porro culpa, nihil minus a.
                </BlogCard>

                <BlogCard
                    src="https://via.placeholder.com/150"
                    title="Título 3"
                    date="03/01/2023"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at nam, amet consectetur asperiores ducimus suscipit adipisci
                    in quaerat id iste maxime similique placeat illum quas ab tempore tenetur neque doloremque. Dolores similique corporis commodi
                    porro culpa, nihil minus a.
                </BlogCard>
                <BlogCard
                    src="https://via.placeholder.com/150"
                    title="Título 3"
                    date="03/01/2023"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at nam, amet consectetur asperiores ducimus suscipit adipisci
                    in quaerat id iste maxime similique placeat illum quas ab tempore tenetur neque doloremque. Dolores similique corporis commodi
                    porro culpa, nihil minus a.
                </BlogCard>
            </div>
        </div>
    );
}

export default Blog;

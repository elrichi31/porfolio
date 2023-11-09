"use client"
import React from 'react';
import BlogCard from '../components/blog_card';
function Blog() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">Blog</h1>

            <div className='grid gap-8 [@media(min-width:1386px)]:grid-cols-4 [@media(min-width:1075px)]:grid-cols-3 [@media(max-width:1074px)]:grid-cols-2 [@media(max-width:742px)]:grid-cols-1'>

                <BlogCard
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
                    title="Título 1"
                    date="01/01/2023"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at nam, amet consectetur asperiores ducimus suscipit adipisci
                    in quaerat id iste maxime similique placeat illum quas ab tempore tenetur neque doloremque. Dolores similique corporis commodi
                    porro culpa, nihil minus a.
                </BlogCard>

                <BlogCard
                    src="https://images.unsplash.com/photo-1562907550-096d3bf9b25c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
                    title="Título 2"
                    date="02/01/2023"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at nam, amet consectetur asperiores ducimus suscipit adipisci
                    in quaerat id iste maxime similique placeat illum quas ab tempore tenetur neque doloremque. Dolores similique corporis commodi
                    porro culpa, nihil minus a.
                </BlogCard>

                <BlogCard
                    src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
                    title="Título 3"
                    date="03/01/2023"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at nam, amet consectetur asperiores ducimus suscipit adipisci
                    in quaerat id iste maxime similique placeat illum quas ab tempore tenetur neque doloremque. Dolores similique corporis commodi
                    porro culpa, nihil minus a.
                </BlogCard>
                <BlogCard
                    src="https://images.unsplash.com/photo-1506452819137-0422416856b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
                    title="Título 3"
                    date="03/01/2023"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at nam, amet consectetur asperiores ducimus suscipit adipisci
                    in quaerat id iste maxime similique placeat illum quas ab tempore tenetur neque doloremque. Dolores similique corporis commodi
                    porro culpa, nihil minus a.
                </BlogCard>
                <BlogCard
                    src="https://images.unsplash.com/photo-1614790871804-fe037bdc1214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
                    title="Título 2"
                    date="02/01/2023"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at nam, amet consectetur asperiores ducimus suscipit adipisci
                    in quaerat id iste maxime similique placeat illum quas ab tempore tenetur neque doloremque. Dolores similique corporis commodi
                    porro culpa, nihil minus a.
                </BlogCard>

                <BlogCard
                    src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
                    title="Título 3"
                    date="03/01/2023"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at nam, amet consectetur asperiores ducimus suscipit adipisci
                    in quaerat id iste maxime similique placeat illum quas ab tempore tenetur neque doloremque. Dolores similique corporis commodi
                    porro culpa, nihil minus a.
                </BlogCard>
                <BlogCard
                    src="https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
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

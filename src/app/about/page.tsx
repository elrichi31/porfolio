import React from 'react';
import Image from 'next/image';
import {BsFillFileEarmarkPdfFill} from 'react-icons/bs';
function AboutMe() {
    return (
        <div>
            <h1 className="text-4xl font-bold my-8 sm:my-16 text-center sm:text-left">Sobre mi</h1>
            <div className="flex flex-col sm:flex-col sm:space-x-0 md:flex-row justify-between items-center space-y-8 sm:space-y-0 md:space-x-16 my-12">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, suscipit
                    non sit quia nam id quos maxime minima
                    temporibus quis odit voluptatem, beatae repudiandae similique,
                    corrupti atque nisi tenetur! Hic, recusandae cum? Quisquam optio
                    libero dignissimos facilis delectus nobis ad!
                </p>
                <div className="md:w-[100rem] py-14">
                    <Image src="/aboutme.png" width={1000} height={1000} alt="aboutme"></Image>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button>
                    <a href="/CV_Nicolas_Moina.pdf" className="bg-[#008734] text-white rounded-xl px-4 py-2 flex items-center gap-2 hover:bg-[#01732D]">
                            Descarga mi CV
                        <BsFillFileEarmarkPdfFill />
                    </a>
                </button>
            </div>
        </div>

    );
}

export default AboutMe;

import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    website: string;
    github: string;
    language: string;
    date: string;
}

function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 porque los meses empiezan en 0
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}


function ProjectCard({ title, description, website, github, language, date }: ProjectCardProps) {
    return (
        <div className="rounded-xl p-6 w-full mx-auto shadow-lg bg-[#545F65]">
            <h1 className="text-xl font-bold text-white">{title}</h1>
            <div className='flex justify-start items-center my-2'>
                <div className="mr-2">
                    <span className="text-white bg-[#008734] p-1 sm:p-1.5 rounded-xl text-xs sm:text-xs">{language}</span>
                </div>
                <div className='flex justify-center items-center mt-[5px]'>
                    <p className='text-sm'>
                        {formatDate(date)}
                    </p>
                </div>                
            </div>
            <p className="mb-6 text-sm">
                {description}
            </p>
            <div className="flex justify-start items-center space-x-4 ">
                <a href={website} className="text-white rounded-xl px-4 py-2 flex items-center gap-2 bg-[#008734] hover:bg-[#01732D]">
                    Website
                    <FaExternalLinkAlt />
                </a>
                <a href={github} className="text-white rounded-xl px-4 py-2 flex items-center gap-2 bg-[#008734] hover:bg-[#01732D]">
                    Github
                    <FaGithub />
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;

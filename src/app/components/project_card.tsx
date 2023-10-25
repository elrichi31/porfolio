import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function ProjectCard() {
    return (
        <div className="rounded-xl p-6 w-auto mx-auto shadow-lg bg-[#545F65]">
            <h1 className="text-2xl font-bold text-white mb-4">Project title</h1>
            <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur. Neque viverra metus quis aliquet nam. Massa arcu est aliquam ut at ultricies ultricies suscipit tortor. Massa arcu aliquam ut at ultricies ultricies suscipit tortor.
            </p>
            <div className="flex justify-start items-center space-x-4 ">
                <a href="#" className="bg-green-600 text-white rounded-xl px-4 py-2 flex items-center gap-2 hover:bg-green-700">
                    Website
                    <FaExternalLinkAlt />
                </a>
                <a href="#" className="bg-green-600 text-white rounded-xl px-4 py-2 flex items-center gap-2 hover:bg-green-700">
                    Github
                    <FaGithub />
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;

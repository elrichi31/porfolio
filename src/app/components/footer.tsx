import React from 'react';
import Image from 'next/image';

function Footer() {
    return (
        <footer className="mt-10">
            <div className="w-full mx-auto md:py-8">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-4">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 justify-center">
                        <Image src="/logo.png" alt="Logo" width={100} height={100} className="h-14 w-auto mr-2" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AlphaBit</span>
                    </a>
                    <ul className="flex flex-col sm:flex-row items-center text-sm font-medium text-gray-500 mt-4 sm:mt-0 dark:text-gray-400 space-y-2 sm:space-y-0">
                        <li>
                            <a href="#" className="mb-2 sm:mb-0 mr-0 sm:mr-3 hover:underline md:mr-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="mb-2 sm:mb-0 mr-0 sm:mr-3 hover:underline md:mr-6">Privacy</a>
                        </li>
                        <li>
                            <a href="#" className="mb-2 sm:mb-0 mr-0 sm:mr-3 hover:underline md:mr-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="mb-2 sm:mb-0 mr-0 sm:mr-3 hover:underline md:mr-6">Contact</a>
                        </li>
                        <li>
                            <a href="#" className="mb-2 sm:mb-0 mr-0 sm:mr-3 hover:underline md:mr-6">Back to top</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">AlphaBit™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;

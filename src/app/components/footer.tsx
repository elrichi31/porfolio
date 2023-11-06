import React from 'react';
import Image from 'next/image';

function Footer() {
    return (
        <footer className="mt-10">
            <div className="w-full mx-auto md:py-8">
                <div className="flex flex-col [@media(min-width:605px)]:flex-row items-center justify-center [@media(min-width:605px)]:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 [@media(min-width:605px)]:mb-0 justify-center">
                        <Image src="/logo.png" alt="Logo" width={100} height={100} className="h-14 w-auto mr-2" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AlphaBit</span>
                    </a>
                    <ul className="flex flex-col [@media(min-width:605px)]:flex-row items-center text-[@media(min-width:605px)] font-medium text-gray-500 [@media(min-width:605px)]:mt-0 dark:text-gray-400 [@media(min-width:605px)]:space-y-0">
                        <li>
                            <a href="#" className="mb-2 [@media(min-width:605px)]:mb-0 mr-0 [@media(min-width:605px)]:mr-3 hover:underline md:mr-6">Contact</a>
                        </li>
                        <li>
                            <a href="#" className="mb-2 [@media(min-width:605px)]:mb-0 mr-0 [@media(min-width:605px)]:mr-3 hover:underline md:mr-6">Back to top</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-4 border-gray-200 [@media(min-width:605px)]:mx-auto dark:border-gray-700 lg:my-4" />
                <span className="block text-[@media(min-width:605px)] text-gray-500 text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">AlphaBit™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;

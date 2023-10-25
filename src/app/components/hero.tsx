import Image from "next/image";
import Button from "../components/button";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"

function Hero() {
    return (
        <div className="px-4 md:px-0">
            <div className="flex flex-col md:flex-row sm:flex-col items-center justify-between my-8 md:my-16">
                <div className="mb-8 md:mb-0 md:ml-12 mx-auto md:mr-28">
                    <Image src="/hero_img.png" width={500} height={500} alt={"Hero image"}></Image>
                </div>
                <div className="max-w-lg md:mr-28 mx-auto text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">¡Hola, Mucho<br></br>gusto en <br></br>conocerte!✌️</h1>
                    <div className="my-12 flex items-center justify-around md:justify-between">
                        <a href="https://www.twitter.com" className="mx-2"><FaTwitter className="text-4xl"></FaTwitter></a>
                        <a href="https://www.instagram.com" className="mx-2"><FaInstagram className="text-4xl"></FaInstagram></a>
                        <a href="https://www.github.com/elrichi31" className="mx-2"><FaGithub className="text-4xl"></FaGithub></a>
                        <a href="https://www.linkedin.com" className="mx-2"><FaLinkedin className="text-4xl"></FaLinkedin></a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Button text="Contáctame" color="grey"></Button>
            </div>
        </div>
    )
}

export default Hero
import Hero from "./components/hero";
import Card from "./components/project_card";
import Button from "./components/button";
import CarouselDefault from "./components/carousel";
import Image from "next/image";
function AboutPage() {
    return (
        <div>
            <Hero />
            <div>
                <h1 className="text-4xl font-bold my-16 text-center sm:text-left">Proyectos</h1>
                <div className="my-12 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
                <div className="flex justify-center">
                    <Button text="Ver más proyectos" color="green"></Button>
                </div>
            </div>
            <div>
                <div className="my-12">
                    <h1 className="text-4xl font-bold my-16 text-center sm:text-left">Artículos</h1>
                    <CarouselDefault></CarouselDefault>
                </div>
                <div className="flex justify-center">
                    <Button text="Ver más artículos" color="green"></Button>
                </div>
            </div>
            <div className="my-20">
                <h1 className="text-4xl font-bold my-8 sm:my-16 text-center sm:text-left">Sobre mi 💻⚡</h1>
                <div className="flex flex-col sm:flex-col sm:space-x-0 md:flex-row justify-between items-center space-y-8 sm:space-y-0 md:space-x-16 my-12">
                    <div className="md:w-[100rem]">
                        <Image src="/about.png" width={1000} height={1000} alt="aboutme"></Image>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, suscipit
                        non sit quia nam id quos maxime minima
                        temporibus quis odit voluptatem, beatae repudiandae similique,
                        corrupti atque nisi tenetur! Hic, recusandae cum? Quisquam optio
                        libero dignissimos facilis delectus nobis ad!</p>
                </div>
                <div className="flex justify-center">
                    <Button text="Mas sobre mi" color="green"></Button>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;

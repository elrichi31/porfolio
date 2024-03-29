"use client";
import Hero from "./components/hero";
import Card from "./components/project_card";
import Button from "./components/button";
import CarouselDefault from "./components/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

interface githubProps {
    id: string
    name: string;
    description: string;
    homepage: string;
    website: string;
    html_url: string;
    language: string;
    updated_at: string;
}

function Page() {
    const [repositories, setRepositories] = useState<githubProps[]>([]);

    useEffect(() => {
        axios.get<githubProps[]>('https://api.github.com/users/elrichi31/repos')
          .then(response => {
            const sortedRepos = response.data.sort((a: githubProps, b: githubProps) => {
              // Convertir las fechas a objetos Date y comparar
              return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
            });
            setRepositories(sortedRepos);
          })
          .catch(error => {
            console.error("Error fetching the repos", error);
          });
      }, []);
    return (
        <div>
            <Hero /> 
            <div>
                <h1 className="text-4xl font-bold my-16 text-center sm:text-left">Proyectos</h1>
                <div className="my-12 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                    {repositories.slice(0, 4).map((repo) => (
                        <Card
                            key={repo.id}
                            title={repo.name}
                            description={repo.description || "No description provided."}
                            website={repo.homepage}
                            github={repo.html_url}
                            language={repo.language || "Not specified"}
                            date={repo.updated_at}
                        />
                    ))}
                </div>
                <div className="flex justify-center">
                    <Button text="Ver más proyectos" link="/projects" color="green"></Button>
                </div>
            </div>
            <div>
                <div className="my-12">
                    <h1 className="text-4xl font-bold my-16 text-center sm:text-left">Artículos</h1>
                    <CarouselDefault></CarouselDefault>
                </div>
                <div className="flex justify-center">
                    <Button text="Ver más artículos" link="/blog" color="green"></Button>
                </div>
            </div>
            <div className="my-20">
                <h1 className="text-4xl font-bold my-8 sm:my-16 text-center sm:text-left">Sobre mi 💻⚡</h1>
                <div className="flex flex-col sm:flex-col sm:space-x-0 md:flex-row justify-between items-center space-y-8 sm:space-y-0 md:space-x-16 my-12">
                    <div className="md:w-[100rem]">
                        <Image src="/about.png" width={1000} height={1000} alt="aboutme"></Image>
                    </div>
                    <p>
                    ¡Hola! Soy Nicolas Moina, un ingeniero en ciencias de la computación apasionado por el desarrollo web, el análisis de datos y la ciberseguridad. He tenido la oportunidad de trabajar en diversas capacidades, incluyendo como analista de datos en Diners Club International, desarrollador full stack en la Universidad San Francisco de Quito y analista de ciberseguridad en Banco Pichincha
                    </p>
                </div>
                <div className="flex justify-center">
                    <Button text="Mas sobre mi" link="/about" color="green"></Button>
                </div>
            </div>
        </div>
    );
}

export default Page;

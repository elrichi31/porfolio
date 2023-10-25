import Navbar from "../components/nav";
import Hero from "../components/hero";
import Card from "../components/project_card";
import Button from "../components/button";

function AboutPage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="px-4 sm:px-6 lg:px-8">
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

        </div>
    );
}

export default AboutPage;

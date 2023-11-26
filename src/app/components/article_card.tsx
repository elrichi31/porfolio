"use client";

import { Card, CardHeader, CardBody, Typography, CardFooter } from "./material";
import Button from "./button";

interface BlogCardProps {
    src: string;
    title: string;
    description: React.ReactNode;
    slug: string;
  }

function ArticleCard({src, title, description, slug}: BlogCardProps) {
    return (
        <Card className="my-6 w-60 max-[360px]:w-60 sm:w-72 md:w-72 lg:w-72 xl:w-80 bg-[#545F65] mx-auto text-white h-[500px]">
            <CardHeader className="relative h-56 lg:h-64 xl:h-72">
                <img
                    src={src}
                    alt="card-image"
                    className="h-full w-full rounded-lg object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" className="mb-2">
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button link={`/${slug}`} color="green" text="Ver mas"></Button>
            </CardFooter>
        </Card>
        // <div></div>
    );
}

export default ArticleCard;

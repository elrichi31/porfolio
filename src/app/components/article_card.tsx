"use client";

import { Card, CardHeader, CardBody, Typography, CardFooter } from "./material";
import Button from "./button";

function ArticleCard({src}: any) {
    return (
        <Card className="my-6 w-60 max-[360px]:w-60 sm:w-72 md:w-72 lg:w-72 xl:w-80 bg-[#545F65] mx-auto">
            <CardHeader className="relative h-56 lg:h-64 xl:h-72">
                <img
                    src={src}
                    alt="card-image"
                    className="h-full w-full rounded-lg object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" className="mb-2">
                    UI/UX Review Check
                </Typography>
                <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to "Naviglio" where you can enjoy the main
                    night life in Barcelona.
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button link="/blog/article" color="green" text="Ver mas"></Button>
            </CardFooter>
        </Card>
        // <div></div>
    );
}

export default ArticleCard;

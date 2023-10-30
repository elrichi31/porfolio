"use client"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import Button from "./button";

export function ArticleCard() {
    return (
        <Card className="my-6 w-60 max-[360px]:w-60 sm:w-72 md:w-72 lg:w-72 xl:w-80 bg-[#545F65] mx-auto">
            <CardHeader className="relative h-56 lg:h-64 xl:h-72">
                <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
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
    );
}

export default ArticleCard;

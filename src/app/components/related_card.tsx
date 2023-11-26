import Image from "next/image";
interface RelatedCardProps {
    image: string;
    title: string;
    description: string;
    author: string;
    slug: string;
}

function RelatedCard({ image, title, description, author, slug }: RelatedCardProps) {
    return (
        <a className="max-w-[300px] my-6" href={`/${slug}`}>
            <div className="mb-2">
                <Image className="rounded-xl w-[300px] h-[200px] object-cover" src={image} height={500} width={500} alt="Image" />
            </div>
            <h1 className='text-xl font-bold text-gray-900 text-white mb-2'>{title}</h1>
            <p>{description}</p>
            <p className="text-base text-gray-500 dark:text-gray-400 mt-2">By {author}</p>
        </a>
    );
}

export default RelatedCard;
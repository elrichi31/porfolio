import Image from "next/image";
interface RelatedCardProps {
    image: string;
}

function RelatedCard({ image }: RelatedCardProps) {
    return (
        <a className="max-w-[300px] my-6" href="/blog/article">
            <div className="mb-2">
                <Image className="rounded-xl" src={image} height={500} width={500} alt="Image" />
            </div>
            <h1 className='text-xl font-bold text-gray-900 text-white mb-2'>Titulo del articulo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, provident optio. Doloremque accusamus eligendi asperiores cum quaerat quis.</p>
            <p className="text-base text-gray-500 dark:text-gray-400 mt-2">By Nicolas Moina</p>
        </a>
    );
}

export default RelatedCard;
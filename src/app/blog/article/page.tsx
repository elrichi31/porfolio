"use client"
import Image from 'next/image';
import { AiFillHeart } from 'react-icons/ai';
import RelatedCard from '../../components/related_card'
import { CopyBlock, dracula } from 'react-code-blocks';
function Article() {
    let code = `
    import Image from "next/image";
    interface RelatedCardProps {
        image: string;
    }
    
    function RelatedCard({ image }: RelatedCardProps) {
        return (
            <div className="max-w-[300px] my-6">
                <div className="mb-2">
                    <Image className="rounded-xl" src={image} height={500} width={500} alt="Image" />
                </div>
                <h1 className='text-xl font-bold text-gray-900 text-white mb-2'>Titulo del articulo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, provident optio.
                 Doloremque accusamus eligendi asperiores cum quaerat quis.</p>
                <p className="text-base text-gray-500 dark:text-gray-400 mt-2">By Nicolas Moina</p>
            </div>
        );
    }
    
    export default RelatedCard;
    
    `
    return (
        <div>
            <div className='max-w-[70%] justify-center m-auto'>
                <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white max-w-[300px] mb-4'>
                    <div>
                        <Image className='mr-4 w-16 h-16 rounded-full object-cover' src="https://th.bing.com/th/id/R.6f77d5449410af078c8a28505744f7dd?rik=OvT8%2fs97lE4Zbg&pid=ImgRaw&r=0" width={500} height={500} alt={'image'}></Image>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold text-gray-900 text-white'>Nicolas Moina</h1>
                        <p className='text-base text-gray-500 dark:text-gray-400'>Graphic Designer, educator</p>
                        <p className='text-base text-gray-500 dark:text-gray-400'>Feb. 8, 2022</p>
                    </div>
                </div>
                <h1 className="text-4xl font-bold mb-4">Titulo del articulo</h1>
                <p className='text-base text-gray-300 mt-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente minima temporibus quo porro, quae, adipisci ipsum optio, totam iure dicta voluptate
                    perspiciatis nulla maxime unde! Porro dicta quis doloribus cupiditate sapiente, ut voluptates pariatur quibusdam eos exercitationem voluptatibus
                    necessitatibus laboriosam in odio veritatis facilis nesciunt architecto. Debitis incidunt iure ratione eligendi nihil consequuntur, officiis, ut
                    impedit ex, repellat assumenda voluptas qui perspiciatis? Ducimus possimus delectus, aliquam quod sed, sit culpa, amet deserunt praesentium esse
                    voluptatem eum! Dignissimos fuga nobis atque nisi voluptate quae corrupti error, eos, esse ratione iste accusantium, quia incidunt rerum architecto
                    illum id odit ex commodi. Perferendis quae aut nam at id numquam. Illo facilis magni dignissimos? Ad laborum totam obcaecati, id quis dolor ipsum perspiciatis
                    at a quam, minus doloribus debitis blanditiis iure officia sapiente cumque? Magni quisquam esse velit vitae officia officiis nisi, autem saepe placeat,
                    quia, qui veritatis quod praesentium non in quos. Distinctio itaque totam veritatis consequuntur aliquam nam eos ab temporibus repellat asperiores mollitia
                    eum quam officia doloribus id, assumenda iure nisi? Exercitationem ex, quis facere officiis
                    eos velit rerum qui necessitatibus sint! Eligendi obcaecati inventore cum maxime fuga consequatur, eius culpa doloremque at similique tempore rerum a velit
                    debitis, quibusdam veniam.
                </p>
                {/* <CopyBlock
                    text={code}
                    language='jsx'
                    showLineNumbers={true}
                    theme={dracula}
                    codeBlock
                /> */}
                <p className='text-base text-gray-300 mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error animi assumenda numquam iste eum et sunt provident. Odio obcaecati voluptatem incidunt
                    voluptates, eligendi rerum ipsum perspiciatis cumque blanditiis! Rerum veniam nihil ipsum, error vero maxime perferendis culpa veritatis iste earum
                    eligendi omnis quia pariatur? Sequi dicta nemo totam dolorum, quae eveniet reprehenderit amet facere corrupti ipsam eaque aperiam recusandae cumque.
                    Delectus, tempore. Necessitatibus nulla doloremque suscipit sapiente, totam quos eligendi omnis deserunt facere aliquam inventore non officia accusantium
                    ipsum atque velit natus quibusdam nam. Ratione veritatis iusto officia necessitatibus eum praesentium, nulla, assumenda dolore, esse excepturi molestiae
                    inventore sit suscipit delectus voluptate quaerat! Aspernatur, modi? Magni reprehenderit pariatur ducimus ratione dolor, placeat cupiditate itaque beatae
                    natus quasi repudiandae in eius assumenda debitis commodi veritatis iste eos rerum asperiores quam ab ipsum explicabo. Consequatur omnis corporis quisquam
                    voluptatum tenetur illo dolor expedita ut nihil. Voluptatum molestias, quia est a sint praesentium distinctio quo veritatis excepturi necessitatibus,
                    ea consectetur? Consequuntur excepturi adipisci natus exercitationem doloremque earum distinctio sit saepe at voluptatum, fugiat vitae, repellendus ipsam
                    quis quae accusamus reiciendis nemo reprehenderit.Corporis doloremque, harum voluptates officiis temporibus quisquam labore ducimus aliquam consectetur!
                    Tenetur necessitatibus praesentium molestiae reprehenderit sed facere dolore quis fuga.</p>
                <div className="flex justify-start items-center space-x-4 pt-8">
                    <p className="">99999 views</p>
                    <div className="flex items-center">
                        <AiFillHeart className="" />
                        <span className="ml-1">99999</span>
                    </div>
                </div>
            </div>
            <div className='mt-12'>
                <h1 className='mb-8 text-2xl font-bold text-gray-900 text-white'> Articulos relacionados</h1>
                <div className='grid lg:gap-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                    <RelatedCard image='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png'></RelatedCard>
                    <RelatedCard image='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png'></RelatedCard>
                    <RelatedCard image='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png'></RelatedCard>
                    <RelatedCard image='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png'></RelatedCard>
                </div>
            </div>
        </div>
    )
}

export default Article;
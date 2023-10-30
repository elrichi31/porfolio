import Image from 'next/image';
import { AiFillHeart } from 'react-icons/ai';

function Article() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">Titulo del articulo</h1>
            <p>
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
            <Image src="https://th.bing.com/th/id/R.6f77d5449410af078c8a28505744f7dd?rik=OvT8%2fs97lE4Zbg&pid=ImgRaw&r=0" className='py-4' width={500} height={500} alt={'image'}></Image>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error animi assumenda numquam iste eum et sunt provident. Odio obcaecati voluptatem incidunt
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
    )
}

export default Article;
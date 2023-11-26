"use client"
import React from 'react'
import { notFound } from 'next/navigation'
import { allDocs } from 'contentlayer/generated'
import { Mdx } from '@/app/components/mdx_component'
import Image from 'next/image'
import RelatedCard from '@/app/components/related_card'
interface PageProps {
    params: {
        slug: string
    }
}

function getDocFromParams(slug: string) {
    const doc = allDocs.find(doc => doc.slugAsParams === slug)
    if (!doc) notFound()
    return doc
}


export default function page({ params }: PageProps) {

    const doc = getDocFromParams(params.slug)
    return (
        <div>
            <div className='lg:w-[60%] md:w-[100%] justify-center m-auto'>
                <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white max-w-[400px] mb-4 inline'>
                    <div>
                        <Image className='mr-4 w-16 h-16 rounded-full object-cover' src={doc.imageAuthor} width={500} height={500} alt={'image'}></Image>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold text-gray-900 text-white'>{doc.author}</h1>
                        <p className='text-base text-gray-500 dark:text-gray-400'>{doc.authorCharge}</p>
                        <p className='text-base text-gray-500 dark:text-gray-400'>{doc.published}</p>
                    </div>
                </div>
                <h1 className='text-3xl font-bold text-gray-900 text-white mb-2'>{doc.title}</h1>
                <div className='my-5'>
                    {doc.tags.slice(0,4).map((tag, index) => {
                        return <span key={index} className='text-sm bg-[#008734] rounded-xl p-1 mx-1'>{tag}</span>
                    })}
                </div>
                <Mdx code={doc.body.code} />
            </div>
            <div className='mt-12'>
                <h1 className='mb-8 text-2xl font-bold text-gray-900 text-white'> Articulos relacionados</h1>
                <div className='grid lg:gap-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                    {
                        allDocs.map((doc: any, index) => {
                            return <RelatedCard key={index} image={doc.image} title={doc.title} description={doc.description} author={doc.author} slug={doc.slug}></RelatedCard>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

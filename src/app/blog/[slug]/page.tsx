"use client"
import React from 'react'
import { notFound } from 'next/navigation'
import { allDocs } from 'contentlayer/generated'
import { Mdx } from '@/app/components/mdx_component'
interface PageProps {
    params: {
        slug: string
    }
}

async function getDocFromParams(slug: string) {
    const doc = allDocs.find(doc => doc.slugAsParams === slug)
    if (!doc) notFound()
    return doc
}

export default async function page({ params }: PageProps) {

    const doc = await getDocFromParams(params.slug)
    return (
        <div className='max-w-[60%] justify-center m-auto'>
            <Mdx code={doc.body.code} />
        </div>
    )
}

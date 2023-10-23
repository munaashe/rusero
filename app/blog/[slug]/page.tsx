import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import Article from './Article'


type Props = {
    params: { slug: string }
    children: React.ReactNode
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const slug = params.slug

    // fetch data
    const article = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/munaashe.wordpress.com/posts/slug:${slug}`).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: article.title,
        openGraph: {
            images: ['../../assets/sidesigned.png', ...previousImages],
        },
    }
}

const Page = ({ params }: { params: { slug: string } }) => {
    return (
        <div>
            <Article params={params} />
        </div>
    )
}

export default Page
import type { Metadata, ResolvingMetadata } from 'next'
import { wordPressAPI } from '../Articles'

type Props = {
    params: { slug: string }
    children: React.ReactNode
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
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
export default function BlogLayout({ children}: Props) {
    return (
        <html lang="en">
            <body >{children}</body>
        </html>
    )
}





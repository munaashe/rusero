'use client'

import React from 'react'
import Link from 'next/link';


type Article = {
    title: string,
    content: any,
    excerpt: string,
    date: string,
    ID: string,
    slug: string,
}

export const wordPressAPI = 'https://public-api.wordpress.com/rest/v1.1/sites/munaashe.wordpress.com/posts'

const SkeletonCard = () => (
    <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-1 shadow-xl rounded-xl animate-pulse">
        <div className="h-250">
            <div className="flex flex-col px-2 pt-4">
                <div className="flex-1 justify-center items-center text-center">
                    <div className="font-semibold text-lg pt-4 h-[72px] bg-gray-200"></div>
                    <div className="italic text-[14px] pt-2 bg-gray-200"></div>
                    <div className="pt-4 h-[140px] bg-gray-200"></div>
                </div>
                <div className="text-center pb-12">
                    <div className="text-[14px] text-blue-500 hover:text-blue-900 bg-gray-200"></div>
                </div>
            </div>
        </div>
    </div>
);

const Articles = () => {
    const [articles, setArticles] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [visibleArticles, setVisibleArticles] = React.useState<Article[]>([]);
    React.useEffect(() => {
        const fetchArticles = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(wordPressAPI);
                if (response.ok) {
                    const data = await response.json();
                    setArticles(data?.posts);
                    setVisibleArticles(data?.posts.slice(0, 4));
                    setIsLoading(false);
                } else {
                    throw new Error('Failed to fetch articles');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchArticles();
    }, []);
    const [loadMoreDisabled, setLoadMoreDisabled] = React.useState(false);
    const handleLoadMore = () => {
        const nextIndex = visibleArticles.length + 4;
        const nextData = articles?.slice(0, nextIndex);
        setVisibleArticles(nextData);

        if (nextData.length === articles.length) {
            setLoadMoreDisabled(true);
        }
    };

    return (
        <div className="p-12">
            <div className="font-bold pb-20 text-[32px] text-center">
                Articles
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 justify-items-center">
                {isLoading
                    ? Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />
                    ) : (
                        <React.Fragment>
                            {visibleArticles?.map((article) => {
                                const { ID, title, date, excerpt, slug } = article || {};
                                let formattedDate = new Date(date).toLocaleString('en-GB', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: false
                                });
                                return (
                                    <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-1 shadow-xl rounded-xl" key={ID}>
                                        <div className="h-250">
                                            <div className="flex flex-col px-2 pt-4">
                                                <div className="flex-1 justify-center items-center text-center">
                                                    <div className='font-semibold text-lg pt-4 h-[72px]'>
                                                        {title}
                                                    </div>
                                                    <div className="italic text-[14px] pt-2">
                                                        {formattedDate}
                                                    </div>
                                                    <div className='pt-4 h-[140px]'>
                                                        <div dangerouslySetInnerHTML={{ __html: excerpt.slice(0, 95) + '...' }} />
                                                    </div>
                                                </div>
                                                <div className="text-center pb-12">
                                                    <Link href={`/blog/${slug}`} target="_blank" rel="nonreferrer">
                                                        <div className='text-[14px] text-blue-500 hover:text-blue-900'>
                                                            read article
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </React.Fragment>
                    )}
            </div>
            {visibleArticles.length > 0 && (
                <div className="text-center pt-20">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
                        onClick={handleLoadMore}
                        disabled={loadMoreDisabled}
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    )
};
export default Articles;
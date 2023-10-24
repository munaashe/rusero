'use client'

import React from 'react';
import { wordPressAPI } from '../Articles';
import { useMediaQuery } from 'react-responsive';
import { Props } from './page';

const Article = ({ params }: Props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const [article, setArticle] = React.useState({
        title: '',
        content: '',
        excerpt: '',
        date: ''
    });

    React.useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`${wordPressAPI}/slug:${params.slug}`);
                if (response.ok) {
                    const data = await response.json();
                    setArticle(data);
                } else {
                    throw new Error('Failed to fetch article');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchArticle();
    }, [params.slug]);

    const { title, content, date, excerpt } = article || {};
    let formattedDate: string;
    console.log(article);
    date !== '' ?
        formattedDate = new Date(date).toLocaleString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        })
        : formattedDate = 'Loading'

    return (
        <div className={`flex flex-col justify-center items-center`}>
            <div className={`flex flex-col items-center justify-center pt-40 ${isMobile ? 'w-full px-12 ' : 'w-1/2'}`}>
                <div className='text-[32px] font-bold'>
                    {title}
                </div>
                <div className='italic pt-2'>
                    {formattedDate}
                </div>
                <div dangerouslySetInnerHTML={{ __html: content }} className='whitespace-normal' />
            </div >
        </div >
    )
}

export default Article

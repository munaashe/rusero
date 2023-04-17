import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { wordPressAPI } from '../../config';
import { Container, Typography } from '@mui/material';

const Article = () => {
    const params = useParams();
    const [article, setArticle] = React.useState({
        title: '',
        content: '',
        excerpt: '',
        date: ''
    });

    React.useEffect(() => {
        const fetchArticle = async () => {
            const response = await axios.get(`${wordPressAPI}/${params.ID}`);
            setArticle(response.data);
        };

        fetchArticle();
    }, []);

    const { title, content, date } = article;
    let formattedDate: string;
    {
        date !== '' ? (
            formattedDate = new Date(date).toLocaleString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            })
        ) : (
            formattedDate = 'Loading'
        )
    }
    return (
        <div style={{ minHeight: '80vh' }}>
            <Helmet>
                <title>KaBlog kaMunashe</title>
            </Helmet>
            <Container maxWidth='md' sx={{ pt: '20px' }}>
                <Typography align='center' component="div" variant="h6" sx={{ pb: '4px', fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Typography align='right' component="div" variant="subtitle2" sx={{ fontStyle: 'italic' }}>
                    {formattedDate}
                </Typography>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </Container >
        </div >
    )
}

export default Article

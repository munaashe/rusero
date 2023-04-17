import React from 'react'
import { wordPressAPI } from '../../config';
import { Typography, Grid, Card, Box, Button, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

type Article = {
    title: string,
    content: any,
    excerpt: string,
    date: string,
    ID: string,
}


const Articles = () => {
    const [articles, setArticles] = React.useState([]);
    const [visibleArticles, setVisibleArticles] = React.useState<Article[]>([]);
    React.useEffect(() => {
        const fetchArticles = async () => {
            const response = await axios.get(`${wordPressAPI}`);
            setArticles(response.data?.posts);
            setVisibleArticles(response.data?.posts.slice(0, 4));
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
        <div style={{ padding: '20px' }}>
            <Typography align='center' variant='h4' sx={{ fontWeight: 'bold', paddingBottom: '20px' }}>
                Articles
            </Typography>
            <Grid container maxWidth='lg' spacing={3} justifyContent='space-evenly' alignItems='center'>
                {visibleArticles?.map((article) => {
                    const { ID, title, date, excerpt } = article || {};
                    let formattedDate = new Date(date).toLocaleString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit',
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false
                    });
                    return (
                        <Grid item lg={3} md={4} sm={6} xs={12} key={ID}>
                            <Card sx={{ height: '250px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', px: '2px' }}>
                                    <CardContent sx={{ flex: '1 0 auto', height: '220px' }}>
                                        <Typography align='center' component="div" variant="h6">
                                            {title}
                                        </Typography>
                                        <Typography align='center' variant="subtitle2" color="text.secondary" component="div" sx={{ fontStyle: 'italic' }}>
                                            {formattedDate}
                                        </Typography>
                                        <Typography align='center' variant="subtitle1" color="text.secondary" component="div">
                                            <div dangerouslySetInnerHTML={{ __html: excerpt.slice(0, 95) + '...' }} />
                                        </Typography>
                                    </CardContent>
                                    <Box textAlign='center' sx={{ paddingBottom: '12px' }}>
                                        <Link to={`/blog/${ID}`} target='_blank' rel='nonreferrer'>
                                            <Typography variant="subtitle2" align='center' component="div">
                                                read article
                                            </Typography>
                                        </Link>
                                    </Box>
                                </Box>

                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
            {visibleArticles.length > 0 &&
                <Box textAlign='center' sx={{ pt: '20px' }}>
                    <Button variant='contained' onClick={handleLoadMore} disabled={loadMoreDisabled}>
                        Load More
                    </Button>
                </Box>
            }
        </div>
    )
}

export default Articles


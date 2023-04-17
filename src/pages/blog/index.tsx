import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from './Banner'
import Articles from './Articles'

const Blog = () => {
    return (
        <div style={{ minHeight: '80vh', background: '#f1f1f1' }}>
            <Helmet>
                <title>KaBlog kaMunashe | SiDesigned</title>
                <meta
                    name='description'
                    content='A collection of my thoughts and reflections. Some sarcastic, some more serious. Yea, that is me'
                />
            </Helmet>
            <Banner />
            <Articles />
        </div>
    )
}

export default Blog
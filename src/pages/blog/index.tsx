import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from './Banner'
import Articles from './Articles'

const Blog = () => {
    return (
        <div style={{ minHeight: '80vh', background: '#f1f1f1' }}>
            <Helmet>
                <title>KaBlog kaMunashe | SiDesigned</title>
            </Helmet>
            <Banner />
            <Articles />
        </div>
    )
}

export default Blog
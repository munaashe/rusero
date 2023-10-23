import React from 'react'
import Banner from './Banner'
import Articles from './Articles'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ka Blog Ka Munashe',
  description: 'Welcome to my blog site. I hope you wont be offended by my rumblings. Hope i at least get you closer to God',
}

const Blog = () => {
  return (
    <div className='min-h-screen'>
      <Banner />
      <Articles />
    </div>
  )
}

export default Blog
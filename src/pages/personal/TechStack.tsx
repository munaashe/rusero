import { Container, Grid, Typography, Card, CardMedia } from '@mui/material';

import react from '../../assets/react.png';
import next from '../../assets/next.png';
import firebase from '../../assets/firebase.png';
import solidity from '../../assets/solidity.png';
import typescript from '../../assets/typescript.png';
import javascript from '../../assets/javascript.png';
import mongo from '../../assets/mongo.png';
import wordpress from '../../assets/wordpress.png';
import strapi from '../../assets/strapi.png';
import express from '../../assets/express.png';
import gatsby from '../../assets/gatsby.png';
import mui from '../../assets/mui.png';
import css from '../../assets/css.png';
import postgres from '../../assets/postgres.png';
import docker from '../../assets/docker.png';
import git from '../../assets/git.png';
import tailwind from '../../assets/tailwind.png';
import node from '../../assets/node.png';
import github from '../../assets/github.png';


const tech = [
    {
        name: react,
        alt: 'react'
    },
    {
        name: next,
        alt: 'next'
    },
    {
        name: gatsby,
        alt: 'gatsby'
    },
    {
        name: firebase,
        alt: 'firebase'
    },
    {
        name: solidity,
        alt: 'solidity'
    },
    {
        name: wordpress,
        alt: 'wordpress'
    },
    {
        name: typescript,
        alt: 'typescript'
    },
    {
        name: mui,
        alt: 'mui'
    },
    {
        name: css,
        alt: 'css'
    },
    {
        name: tailwind,
        alt: 'tailwind css'
    },
    {
        name: javascript,
        alt: 'javascript'
    },
    {
        name: mongo,
        alt: 'mongo'
    },
    {
        name: postgres,
        alt: 'postgres'
    },
    {
        name: strapi,
        alt: 'strapi'
    },
    {
        name: node,
        alt: 'node'
    },
    {
        name: express,
        alt: 'express'
    },
    {
        name: docker,
        alt: 'docker'
    },
    {
        name: git,
        alt: 'git'
    },
    {
        name: github,
        alt: 'github'
    }

]

const TechStack = () => {

    return (
        <div style={{ paddingBottom: '20px' }}>
            <Container maxWidth='lg' sx={{ padding: '20px', marginY: '30px', paddingTop: '30px', borderRadius: '25px', background: '#fff', boxShadow: 1 }}>
                <Typography align='center' variant='h4' sx={{ fontWeight: 'bold', paddingBottom: '20px' }}>
                    Tech Stack
                </Typography>
                <br />
                <Container maxWidth='lg'>
                    <Grid container spacing={3}>
                        {tech.map((item, index) => {
                            const { name, alt } = item || {};
                            return (
                                <Grid item xs={6} sm={4} md={3} lg={2.4} key={index}>
                                    <Card sx={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                                        <CardMedia
                                            sx={{ objectFit: 'contain' }}
                                            height='50px'
                                            component='img'
                                            image={name}
                                            alt={alt}
                                        />
                                    </Card>
                                </Grid>
                            )
                        })}

                    </Grid>
                </Container>
            </Container>
        </div>
    )
}

export default TechStack;
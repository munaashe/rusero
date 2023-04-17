import { Container, Grid, Typography, Card, CardMedia, CardContent, Box, Button } from "@mui/material";
import React from "react";
import skyangel from "../../assets/skyangel.png";
import smhzw from "../../assets/smhzw.png";
import patriotizim from "../../assets/patriotizim.png";
import abangane from "../../assets/abangane.png";
import choicenust from "../../assets/choicenust.png";
import sneng from "../../assets/sn-eng.png";

const projects = [
  {
    name: 'Siduna & Ndou Engineering',
    description: 'Website for Siduna & Ndou Engineering (PVT) (LTD)',
    liveSite: "https://sn-eng.co.zw/",
    image: sneng
  },
  {
    name: 'SkyAngel',
    description: 'Website, and reservations system for for SkyAngel Private Jets Charters',
    liveSite: "https://skyangel.co.zw/",
    image: skyangel
  },
  {
    name: 'Choice Champions',
    description: 'Choice Champions is a peer educators organisation. Developed the website for them',
    liveSite: "https://choicechampions.org/",
    image: choicenust
  },
  {
    name: 'Student Mental Health ZW',
    description: 'Website for Student Mental Health Zimbabwe, and email hosting',
    liveSite: "https://smhzw.org.zw/",
    image: smhzw
  },
  {
    name: 'Abangane',
    description: 'Website for Abangane Platforms organisation',
    liveSite: "https://abanganeplatform.co.zw/",
    image: abangane

  },
  {
    name: 'PatriotiZim',
    description: 'Fake news site for Zimbabwe. Still work in progress',
    liveSite: "https://patriotizim.com/",
    image: patriotizim

  },
]

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = React.useState(projects.slice(0, 4));
  const [loadMoreDisabled, setLoadMoreDisabled] = React.useState(false);

  const handleLoadMore = () => {
    const nextIndex = visibleProjects.length + 4;
    const nextData = projects.slice(0, nextIndex);
    setVisibleProjects(nextData);

    if (nextData.length === projects.length) {
      setLoadMoreDisabled(true);
    }
  };
  return (
    <React.Fragment>
      <Container maxWidth='lg' sx={{ padding: '20px', paddingTop: '30px', borderRadius: '25px' }}>
        <br />
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 'bold', paddingBottom: '20px' }}
        >
          Portfolio
        </Typography>
        <Grid container spacing={3} justifyContent="space-evenly" alignItems='stretch' style={{ paddingBottom: '32px' }}>
          {visibleProjects.map((project, index) => {
            const { name, description, liveSite, image } = project || {};
            return (
              <Grid item xs={12} sm={12} md={6} lg={5} key={index}>
                <Card sx={{ display: 'flex', borderRadius: '20px', background: '#fafafa', heigh: '250px' }}>
                  <CardMedia
                    component="img"
                    sx={{ height: 180, width: 180, padding: '4px', onjectFit: 'contain' }}
                    image={image}
                    alt={name}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column', px: '2px' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h6" sx={{ pb: '4px', fontWeight: 'bold' }}>
                        {name}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {description}
                      </Typography>
                    </CardContent>
                    <Box textAlign='center' sx={{ paddingBottom: '12px' }}>
                      <a target='_blank' rel='noreferrer' href={liveSite} style={{ textDecoration: 'none' }}>
                        <Typography variant="subtitle2" align='center' component="div">
                          visit website
                        </Typography>
                      </a>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            )
          })}
        </Grid>
        <Box textAlign='center'>
          <Button variant='contained' onClick={handleLoadMore} disabled={loadMoreDisabled}>
            Load More
          </Button>
        </Box>
      </Container>
      <br />
    </React.Fragment>
  );
};

export default Portfolio;


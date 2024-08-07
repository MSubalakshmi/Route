import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Container, Box, Typography, Button } from '@mui/material';
import Illustration from '../assets/Illustration.png';
import heroImage1 from '../assets/heroImage1.jpg';
import heroImage2 from '../assets/heroImage2.jpg';
import heroImage3 from '../assets/heroImage3.jpg';

const slides = [
  {
    title: "Lessons and insights",
    subtitle: "from 8 years",
    description: "Where to grow your business as a photographer: site or social media?",
    buttonText: "Register",
    buttonLink: "#",
    image: heroImage1,
    alt: "Hero Image 1",
  },
  {
    title: "New Technology",
    subtitle: "Innovative ways",
    description: "Learning is the key way to success.",
    buttonText: "Learn More",
    buttonLink: "#",
    image: heroImage2,
    alt: "Hero Image 2",
  },
  {
    title: "Enjoyable Learning",
    subtitle: "Our students will enjoy the process learning",
    description: "Students learn the new technology with fun and innovative way.",
    buttonText: "Sign Up",
    buttonLink: "#",
    image: heroImage3,
    alt: "Hero Image 3",
  },
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            height: '100vh',
            textAlign: 'center',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Container maxWidth="xl" sx={{ height: '100%', display: 'flex', alignItems: 'center', paddingTop: '100px', color: '#f5f5f5', justifyContent: 'center', width: '100%' }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={8} sx={{ textAlign: 'left', padding: 1, borderRadius: 2 }}>
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  sx={{ color: '#4D4D4D', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, lineHeight: 1.2 }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  sx={{ color: 'green', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, lineHeight: 1.2 }}
                >
                  {slide.subtitle}
                </Typography>
                <Typography variant="h6" color="text.secondary" paragraph>
                  {slide.description}
                </Typography>
                <Button variant="contained" color="success" size="large" href={slide.buttonLink}>
                  {slide.buttonText}
                </Button>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: 'center', padding: 4 }}>
                <img
                  src={Illustration}
                  alt="Illustration"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      ))}
    </Slider>
  );
};

export default SliderComponent;


import { Box, Grid, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from 'components/block-title';
import FavoriteCard from 'components/favorite-card';
import fevCardImageOne from 'assets/fev-course-1-1.jpg';
import fevCardImageTwo from 'assets/fev-course-1-2.jpg';
import fevCardImageThree from 'assets/fev-course-1-3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

const favoriteCourseData = [
  {
    title: 'Como preparar um pequeno-almoço saudável',
    image: fevCardImageOne,
    reviewCount: '5,0 (762 avaliações)',
    watchCount: '1.365 alunos assistiram',
    videoLink: 'g9avOpUOREM',
    starCount: 5,
  },
  {
    title:
      'Preparando comida Japonesa para o lunch',
    image: fevCardImageTwo,
    reviewCount: '4,5 (983 avaliações)',
    watchCount: '2.334 alunos assistiram',
    videoLink: 'g9avOpUOREM',
    starCount: 4,
  },
  {
    title:
      'Pensando em quebrar a diante com um hambúrguer?',
    image: fevCardImageThree,
    reviewCount: '5.0 (152 avaliações)',
    watchCount: '1.152 alunos assistiram',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
  },
];

const FavoriteCourse = () => {
  const FavoriteCarousel = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      376: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  };
  return (
    <Box as="section" sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
        <BlockTitle
          sx={styles.fevCourse.blockTitle}
          tagline="Mais vistos"
          heading="Pratos que as pessoas mais adoram"
        />
        <Swiper {...FavoriteCarousel} sx={styles.carousel}>
          {favoriteCourseData.map((course, index) => (
            <SwiperSlide key={index}>
              <FavoriteCard
                starCount={course.starCount}
                title={course.title}
                image={course.image}
                reviewCount={course.reviewCount}
                watchCount={course.watchCount}
                videoLink={course.videoLink}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default FavoriteCourse;

const styles = {
  fevCourse: {
    paddingTop: ['60px', null, null, '80px', '110px'],
    pb: [null, null, null, '30px', '50px', '0'],
    container: {
      maxWidth: 1440,
      '@media(max-width:1440px)': {
        maxWidth: 1240,
      },
      '.swiper-container': {
        pb: '30px',
        overflow: [null, null, null, null, null, 'visible'],
      },
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: 30,
      '@media(max-width: 991px)': {
        gridTemplateColumns: '1fr 1fr',
      },
      '@media(max-width: 575px)': {
        gridTemplateColumns: '1fr',
      },
    },
    col: {
      display: 'flex',
    },
  },
};

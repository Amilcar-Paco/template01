import { Box, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from 'components/block-title';
import PopularCard from 'components/popular-card';

const popularCourseData = [
  {
    title:
      'Preparar um Yakitori profissional',
    reviewCount: '5.0 (392 avaliações)',
    watchCount: '2,538 visualizações',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: true,
    list: [
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
    ],
  },
  {
    title:
      'Preparar um Yakitori profissional',
    reviewCount: '5.0 (392 avaliações)',
    watchCount: '2,538 visualizações',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: true,
    list: [
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
    ],
  },
  {
    title:
      'Preparar um Yakitori profissional',
    reviewCount: '5.0 (392 avaliações)',
    watchCount: '2,538 visualizações',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: true,
    list: [
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
    ],
  },
  {
    title:
      'Preparar um Yakitori profissional',
    reviewCount: '5.0 (392 avaliações)',
    watchCount: '2,538 visualizações',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: true,
    list: [
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      },
    ],
  },
];

const PopularCourse = () => {
  return (
    <Box as="section" id="courses" sx={styles.popularCourse}>
      <Container>
        <BlockTitle
          sx={styles.popularCourse.blockTitle}
          tagline="Popular"
          heading="Os cursos mais populares"
        />
        {popularCourseData.map((course, index) => (
          <Box sx={styles.popularCourse.col} key={index}>
            <PopularCard
              key={index}
              listData={course.list}
              expanded={course.expanded}
              starCount={course.starCount}
              title={course.title}
              reviewCount={course.reviewCount}
              watchCount={course.watchCount}
              videoLink={course.videoLink}
            />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default PopularCourse;

const styles = {
  popularCourse: {
    paddingBottom: ['100px'],
    '@media(max-width: 575px)': {
      paddingBottom: '60px',
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '60px',
      '@media(max-width: 575px)': {
        marginBottom: '30px',
      },
    },
    col: {},
  },
};

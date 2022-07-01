import React, { useState } from 'react';
import { Box, Grid, Container } from 'theme-ui';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import BlockTitle from 'components/block-title';
import PriceCard from '../components/price-card';

const pricingMonthlyData = [
  {
    name: 'Grátis',
    description: 'Descrição',
    buttonText: 'Iniciar grátis',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Acesso a todos os cursos, exercícios e avaliações',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Acesso gratuito para todo tipo de correção de exercícios com downloads.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Correções de todas as avaliações',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Download ilimitado de cursos através do aplicativo móvel',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Baixe e imprima cursos e exercícios em PDF',
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Recomendado',
    name: 'Premium',
    description: 'Descrição',
    priceWithUnit: 'MZ1,500.00/',
    pricePeriod: 'm',
    buttonText: 'Inscreva-se agora',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Acesso a todos os cursos, exercícios e avaliações',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Acesso gratuito para todo tipo de correção de exercícios com downloads.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Correções de todas as avaliações',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Download ilimitado de cursos através do aplicativo móvel',
        isAvailable: true
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Baixe e imprima cursos e exercícios em PDF',
        isAvailable: true,
      },
    ],
  },
];

const pricingYearlyData = [
  {
    name: 'Grátis',
    description: 'Descrição',
    buttonText: 'Iniciar grátis',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Acesso a todos os cursos, exercícios e avaliações',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Acesso gratuito para todo tipo de correção de exercícios com downloads.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Correções de todas as avaliações',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Download ilimitado de cursos através do aplicativo móvel',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Baixe e imprima cursos e exercícios em PDF',
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Recomendado',
    name: 'Premium',
    description: 'Descrição',
    priceWithUnit: 'MZ3,500.00/',
    pricePeriod: 'a',
    buttonText: 'Inscreva-se agora',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Acesso a todos os cursos, exercícios e avaliações',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Acesso gratuito para todo tipo de correção de exercícios com downloads.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Correções de todas as avaliações',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Download ilimitado de cursos através do aplicativo móvel',
        isAvailable: true
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Baixe e imprima cursos e exercícios em PDF',
        isAvailable: true,
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState(false);
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <BlockTitle
          sx={styles.pricing.blockTitle}
          tagline="Plano de preços"
          heading="Escolha sua política de preços"
        />
        <Box sx={styles.pricing.btnWrap}>
          <Box as="ul" sx={styles.pricing.btnUl}>
            <Box
              as="li"
              className={` ${plan === false ? 'active' : ''}`}
              variant="buttons.primary"
              sx={styles.pricing.btn}
              onClick={() => {
                setPlan(false);
              }}
            >
              Plano Mensal
            </Box>
            <Box
              as="li"
              className={` ${plan === true ? 'active' : ''}`}
              variant="buttons.primary"
              sx={styles.pricing.btn}
              onClick={() => {
                setPlan(true);
              }}
            >
              Plano Anual
            </Box>
          </Box>
        </Box>

        <Grid sx={styles.pricing.wrapper}>
          {plan === true
            ? pricingYearlyData.map((price, index) => (
                <PriceCard key={index} data={price} />
              ))
            : null}
          {plan === false
            ? pricingMonthlyData.map((price, index) => (
                <PriceCard key={index} data={price} />
              ))
            : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const styles = {
  pricing: {
    paddingTop: 100,
    paddingBottom: 150,
    '@media(max-width:991px)': {
      paddingTop: 60,
      paddingBottom: 60,
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)',
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0%, 0)',
      },
    },
    '.priceFade': {
      animationName: 'fadeInUp',
      animationDuration: '1s',
    },
    blockTitle: {
      textAlign: 'center',
    },
    btnWrap: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '60px',
      marginTop: '25px',
    },
    btnUl: {
      margin: 0,
      listStyle: 'none',
      backgroundColor: '#F7F8FB',
      padding: '6px',
      borderRadius: '5px',
      display: 'inline-block',
    },
    btn: {
      color: 'black',
      padding: '10px 25px',
      fontSize: 16,
      fontWeight: 500,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      '&:hover': {
        color: 'black',
        backgroundColor: 'transparent',
      },
      '&.active': {
        backgroundColor: '#fff',
        color: 'black',
        boxShadow: '0px 3px 3.8px rgba(38, 78, 118, 0.1)',
      },
      '@media(max-width: 375px)': {
        padding: '10px 22px',
      },
    },
    wrapper: {
      display: 'grid',
      gridGap: '30px',
      gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
      marginLeft: 'auto',
      marginRight: 'auto',
      width: ['100%', null, null, null, '990px'],
    },
  },
};

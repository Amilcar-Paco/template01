import React from 'react';
import { Box, Container } from 'theme-ui';
import Accordion from 'components/accordion/accordion';
import BlockTitle from 'components/block-title';

const accordionData = [
  {
    isExpanded: false,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
    contents: (
      <div>
       Um FAQ é uma lista de perguntas frequentes (FAQs) e respostas em um determinado tópico (também conhecido como Perguntas e Respostas [Q&A] ou Perguntas frequentes). O formato é frequentemente usado em artigos, sites, listas de e-mail e fóruns on-line onde perguntas comuns tendem a recorrentes, por exemplo, por meio de postagens ou consultas de novos usuários relacionadas a lacunas do conhecimento comum. O objetivo de um FAQ geralmente é fornecer em formação.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
    contents: (
      <div>
       Um FAQ é uma lista de perguntas frequentes (FAQs) e respostas em um determinado tópico (também conhecido como Perguntas e Respostas [Q&A] ou Perguntas frequentes). O formato é frequentemente usado em artigos, sites, listas de e-mail e fóruns on-line onde perguntas comuns tendem a recorrentes, por exemplo, por meio de postagens ou consultas de novos usuários relacionadas a lacunas do conhecimento comum. O objetivo de um FAQ geralmente é fornecer em formação.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
    contents: (
      <div>
       Um FAQ é uma lista de perguntas frequentes (FAQs) e respostas em um determinado tópico (também conhecido como Perguntas e Respostas [Q&A] ou Perguntas frequentes). O formato é frequentemente usado em artigos, sites, listas de e-mail e fóruns on-line onde perguntas comuns tendem a recorrentes, por exemplo, por meio de postagens ou consultas de novos usuários relacionadas a lacunas do conhecimento comum. O objetivo de um FAQ geralmente é fornecer em formação.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
    contents: (
      <div>
       Um FAQ é uma lista de perguntas frequentes (FAQs) e respostas em um determinado tópico (também conhecido como Perguntas e Respostas [Q&A] ou Perguntas frequentes). O formato é frequentemente usado em artigos, sites, listas de e-mail e fóruns on-line onde perguntas comuns tendem a recorrentes, por exemplo, por meio de postagens ou consultas de novos usuários relacionadas a lacunas do conhecimento comum. O objetivo de um FAQ geralmente é fornecer em formação.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" id="faq" sx={styles.accordion}>
      <Container sx={styles.accordion.container}>
        <BlockTitle
          sx={styles.accordion.blockTitle}
          tagline="Pergunta frequente"
          heading="Você tem alguma pergunta?"
        />
        <Accordion items={accordionData} />
      </Container>
    </Box>
  );
};
export default FAQ;

const styles = {
  accordion: {
    container: {
      maxWidth: '900px',
    },
    blockTitle: {
      marginBottom: [25, null, null, 65],
      textAlign: 'center',
    },
  },
};

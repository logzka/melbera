import React from 'react';
import Layout from '../components/base/Layout';
import Hero from '../components/Hero';
import Description from '../components/Description';
import Preferences from '../components/Preferences';
import Opt from '../components/Opt';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Description />
      <Preferences />
      <Opt />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <meta name="copyright" content="Copyright © 2025 Melbera" />
      <meta
        name="description"
        content="Купити сигарети Melbera оптом. Замовити сигарети зараз. Доставка Новою Поштою по всім регіонам України."
      />
      <title>Melbera сигарети | Купити сигарети оптом Україна</title>
    </>
  );
};

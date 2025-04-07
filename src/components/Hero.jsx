import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ToOrder from './base/ToOrder';

const Hero = () => {
  const { file } = useStaticQuery(graphql`
    query HeroVideo {
      file(name: { eq: "melbera-hero" }) {
        publicURL
      }
    }
  `);
  return (
    <section className="hero relative h-96 mb-16 md:mb-32">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute left-0 top-0 min-w-full h-full object-cover"
        style={{ objectPosition: '50% 30%' }}
      >
        <source src={file.publicURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay absolute left-0 top-0 w-full h-full bg-stone-500/70"></div>
      <div className="hero--container container px-4 sm:px-8 xl:px-16 h-full flex items-center">
        <div className="w-full flex flex-col items-start gap-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl md:leading-[54px] xl:leading-[72px] text-slate-50">
            Cигарети ОПТ <br className="lg:hidden" />
            <span className="hidden lg:inline">●&nbsp;</span>
            Доставка&nbsp;"Новою&nbsp;Поштою"
          </h1>
          <ToOrder />
        </div>
      </div>
    </section>
  );
};

export default Hero;

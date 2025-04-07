import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Description = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query DescrQueries {
      allMarkdownRemark(
        filter: { frontmatter: { parent: { eq: "descr" } } }
        sort: { frontmatter: { order: ASC } }
      ) {
        nodes {
          id
          frontmatter {
            text
            price
            opt
            photo {
              img {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  `);
  const data = allMarkdownRemark.nodes.map(({ frontmatter, id }) => ({ ...frontmatter, id }));
  return (
    <section className="description relative mb-16 md:mb-32">
      <div className="description--container container px-4 sm:px-8 xl:px-16 h-full grid xl:grid-cols-2 items-center justify-center gap-16 md:gap-32">
        <div className="flex flex-col gap-4 sm:gap-8 justify-center md:w-9/12 xl:w-full">
          <p className="descr text-2xl sm:text-4xl font-bold">
            <span className="text-rose-900 uppercase">Melbera</span>&nbsp;сигарети - втілення
            вишуканого&nbsp;смаку
          </p>
          <p className="sm:text-2xl font-light">
            Сигарети створені з добірного тютюну, вирощеного під щедрим сонцем найкращих плантацій.
          </p>
          <p className="sm:text-2xl font-light">
            Кожне затягування - це гармонія насиченого аромату та м'якого, збалансованого смаку, що
            огортає теплом і дарує неперевершене задоволення.
          </p>
        </div>
        <div
          className="price font-[sans-serif] relative w-full grid sm:grid-cols-2 gap-16"
          style={{ height: 'inherit' }}
        >
          {data.map(({ photo, text, price, opt, id }) => (
            <div key={id} className="flex flex-col items-center">
              {photo?.img && (
                <GatsbyImage
                  image={photo.img.childImageSharp.gatsbyImageData}
                  alt="Преміум сигарети Melbera опт"
                  className="h-40 max-w-fit drop-shadow-2xl mb-4"
                  objectFit="contain"
                />
              )}
              <p className="text-sm sm:text-base">{text}</p>
              <p className="relative font-bold sm:text-lg">
                {price}
                <a className="absolute -top-1.5 -right-6" href="#opt" aria-label="Melbera opt">
                  <span className="font-bold font-[sans-serif] text-rose-900 text-2xl">{opt}</span>
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Description;

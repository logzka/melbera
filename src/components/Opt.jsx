import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import ToOrder from './base/ToOrder';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const Opt = () => {
  return (
    <section id="opt" className="opt mb-16 sm:mb-32">
      <div className="opt--container container px-4 sm:px-8 xl:px-16 h-full grid xl:grid-cols-[auto_660px] justify-center gap-16">
        <div className="flex flex-col h-full justify-between items-start md:w-9/12 xl:w-full">
          <div className="sm:text-xl flex flex-col gap-4 mb-8">
            <h2 className="text-2xl sm:text-4xl uppercase font-bold mb-4 sm:mb-8">Опт</h2>
            <div className="flex gap-4">
              <span className="font-bold font-[sans-serif] text-rose-900 text-2xl">*</span>
              <div>
                <p className="mb-2">30 грн./пачка для оптових покупців.</p>
                <p className="mb-2">
                  Пачки представлені в своєму первозданному вигляді, без додаткового огортання у
                  целофанову плівку.
                </p>
                <p className="font-bold">
                  1 коробка - 500 пачок. Мінімальне замовлення - 1 корбка.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-bold font-[sans-serif] text-rose-900 text-2xl">**</span>
              <p>25 грн./зіп-пакет для оптових покупців.</p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold font-[sans-serif] text-rose-900 text-2xl">***</span>
              <p>1 коробка - 500 сигарет. Мінімальне замовлення - 1 корбка.</p>
            </div>
          </div>
          <ToOrder />
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          className="w-full h-96 max-w-[800px]"
          wrapperClass="relative"
          //   pagination={{
          //     el: `.swiper-pagination`,
          //     type: 'progressbar',
          //     clicable: true,
          //   }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
        >
          <SwiperSlide className="">
            <StaticImage
              src="../images/opt/opt-1.webp"
              alt="Преміум сигарети"
              className="h-full w-auto"
              placeholder="blurred"
              objectFit="contain"
              style={{ borderRadius: 8 }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/opt/opt-2.webp"
              alt="Преміум сигарети"
              className="h-full w-auto "
              placeholder="blurred"
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/opt/opt-3.webp"
              alt="Преміум сигарети"
              className="h-full w-auto "
              placeholder="blurred"
              objectFit="contain"
            />
          </SwiperSlide>

          <SwiperSlide>
            <StaticImage
              src="../images/opt/opt-4.webp"
              alt="Преміум сигарети"
              className="h-full w-auto "
              placeholder="blurred"
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/opt/opt-5.webp"
              alt="Преміум сигарети"
              className="h-full w-auto "
              placeholder="blurred"
              objectFit="contain"
            />
          </SwiperSlide>
          {/* <div
            className="swiper-pagination absolute"
            style={{
              left: 'unset',
              top: 'unset',
              bottom: 0,
              width: '50%',
              height: 4,
              background: '#007aff',
            }}
          ></div> */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Opt;

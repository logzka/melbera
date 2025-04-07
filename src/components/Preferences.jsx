import React from 'react';
import CheckIcon from '../assets/icons/check.inline.svg';

const Preferences = () => {
  return (
    <section className="preferences mb-16 md:mb-32 bg-blue-500">
      <div className="preferences--container container text-slate-50 uppercase p-4 sm:p-8 xl:p-16">
        <div className="xl:w-9/12 mx-auto flex flex-wrap gap-8 items-center min-[652px]:justify-center">
          <div className="flex gap-4 items-center">
            <CheckIcon className="h-8 w-auto" />
            <p className="font-light lg:text-lg">Ідеальна щільність набивки</p>
          </div>
          <div className="flex gap-4 items-center">
            <CheckIcon className="h-8 w-auto" />
            <p className="font-light lg:text-lg">Найтонший папір преміум-класу</p>
          </div>
          <div className="flex gap-4 items-center">
            <CheckIcon className="h-8 w-auto" />
            <p className="font-light lg:text-lg">Елегантний дизайн</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preferences;

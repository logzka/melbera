import React from 'react';
import CopyIcon from '../../assets/icons/copyright.inline.svg';
import PhoneLink from '../common/PhoneLink';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer bg-slate-900 bottom-0 w-full text-slate-50">
      <div className="footer--container container px-4 sm:px-8 xl:px-16 py-6 sm:py-12 font-[sans-serif] flex justify-between">
        <div className="flex gap-2 items-center text-slate-50 text-lg font-light">
          <CopyIcon className="h-6 sm:h-8 w-auto" />
          <span className="text-sm sm:text-base font-light">
            Усі права захищені, <span>{currentYear}</span>
          </span>
        </div>
        <PhoneLink />
      </div>
    </footer>
  );
};
export default Footer;

import React from 'react';
import PhoneLink from '../common/PhoneLink';
import TgLink from '../common/TgLink';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="header sticky z-50 top-0 w-full bg-slate-300/40 backdrop-blur-xs">
      <div className="header--container container px-4 sm:px-8 xl:px-16 py-4">
        <nav className="flex items-center justify-between text-stone-700 text-lg">
          <Link to="/" className="logo uppercase font-bold text-xl sm:text-2xl mt-2 select-none">
            Melbera
          </Link>
          <div className="header--socials flex items-center gap-2 sm:gap-4">
            <PhoneLink color="#44403c" />
            <TgLink />
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;

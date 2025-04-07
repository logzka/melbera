import React from 'react';
import TgIcon from '../../assets/icons/tg.inline.svg';

const TgLink = ({ children }) => {
  return (
    <a
      className="tg-link transition-opacity hover:opacity-70"
      href="tg://resolve?domain=Aleks7353"
      target="_blank"
      rel="noreferrer"
      aria-label="Melbera telegram"
    >
      {children || <TgIcon className="h-12 w-auto" />}
    </a>
  );
};
export default TgLink;

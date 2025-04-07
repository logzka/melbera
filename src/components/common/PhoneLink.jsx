import React from 'react';
import PhoneIcon from '../../assets/icons/phone.inline.svg';

const PhoneLink = ({ color = '#f8fafc' }) => {
  return (
    <div className="phone-link">
      <a
        className="hidden sm:inline transition-opacity hover:opacity-70"
        href="tel:+380987302169"
        aria-label="Melbera phone"
      >
        +38 (098) 730-21-69
      </a>
      <a
        className="sm:hidden transition-opacity hover:opacity-70"
        href="tel:+380987302169"
        aria-label="Melbera phone"
      >
        <PhoneIcon className="h-12.5 w-auto" style={{ fill: color }} />
      </a>
    </div>
  );
};
export default PhoneLink;

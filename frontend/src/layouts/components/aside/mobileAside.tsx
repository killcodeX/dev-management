import React from "react";
import { BsChevronDoubleLeft } from "react-icons/bs";
interface IProps {
  mobileMenu: boolean;
  setMobileMenu: (value: boolean) => void;
}

export default function MobileAside({ mobileMenu, setMobileMenu }: IProps) {
  return (
    <div className="mobile-aside">
      <div className="container">
        <div data-cy="logo" className="logo">
          Sports Sprint
        </div>
        <div
            data-cy="aside-button-open"
            className="mobile-aside-close icon btn btn-icon btn-color-muted shadow-lg"
            onClick={() => setMobileMenu(!mobileMenu)}
          ><BsChevronDoubleLeft /></div>
        <div className="horizontal-line"></div>
      </div>
    </div>
  );
}

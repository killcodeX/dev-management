import React from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

export default function Aside({ asideClose, setAsideClose }: any) {
  //
  // * This function on click reduces the width of aside menu
  // * It modifies root varible width
  //
  const handleAsideClose = () => {
    if (asideClose) {
      document.documentElement.style.setProperty(
        "--appside-bar-width",
        "15rem"
      );
      document.querySelector(".rest-logo")?.classList.remove("hide");
    } else {
      document.documentElement.style.setProperty("--appside-bar-width", "5rem");
      document.querySelector(".rest-logo")?.classList.add("hide");
    }
    setAsideClose(!asideClose);
  };

  return (
    <div className="aside">
      <div className="container">
        <div data-cy="logo" className="logo">
          D<span className="rest-logo">ev Mange</span>
        </div>
        {asideClose ? (
          <div
            data-cy="aside-button-close"
            className="aside-close icon btn btn-icon btn-color-muted shadow-lg"
            onClick={handleAsideClose}
          >
            <BsChevronDoubleRight />
          </div>
        ) : (
          <div
            data-cy="aside-button-open"
            className="aside-close icon btn btn-icon btn-color-muted shadow-lg"
            onClick={handleAsideClose}
          >
            <BsChevronDoubleLeft />
          </div>
        )}
        <div className="horizontal-line"></div>
      </div>
    </div>
  );
}

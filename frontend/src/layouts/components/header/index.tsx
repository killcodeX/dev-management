import React from "react";
import { SlMenu } from "react-icons/sl";
import ThemeChange from "./themeChange";
import UserSettings from "./userSettings";
import { useWindowSize } from "../../../helpers/useWindowSize";

interface IProps {
  mobileMenu: boolean;
  setMobileMenu: (value: boolean) => void;
}

export default function Header({ mobileMenu, setMobileMenu }: IProps) {
  let width = useWindowSize().width;
  return (
    <div className="header shadow-sm">
      <div className="header-container">
        <div className="header-left">
          {width < 700 ? (
            <>
              <div
                className="hamburger"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                <SlMenu />
              </div>
              <div className="logo-mobile">Dev Mange</div>
            </>
          ) : null}
        </div>
        <div className="header-right">
          <ThemeChange />
          <UserSettings />
        </div>
      </div>
    </div>
  );
}

import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../../../helpers/useOutsideComp";

export default function UserSettings() {
  const currentComp = useRef<HTMLDivElement>(null);
  const [displaySetting, setDisplaySetting] = useState(false);
  useOnClickOutside(currentComp, () => setDisplaySetting(false));

  return (
    <div className="userSetting-header">
      <div
        className="user-profile-header"
        onClick={() => setDisplaySetting(!displaySetting)}
      >
        <img
          src="https://randomuser.me/api/portraits/women/8.jpg"
          alt="user-profile-header"
        />
      </div>
      {displaySetting ? (
        <div className="user-profile-header-options" ref={currentComp}>
          <div className="user-profile-header-top">
            <div className="user-profile-header-details">
              <div className="user-profile-header-details-image">
                <img
                  src="https://randomuser.me/api/portraits/women/8.jpg"
                  alt="user-profile-header"
                />
              </div>
              <div className="user-profile-header-details-cred">
                <div className="fs-5">Pam Beesly</div>
                <div className="fw-bold text-muted text-hover primary fs-7">
                  admin@demo.com
                </div>
              </div>
            </div>
          </div>
          <div className="horizontal-line"></div>
          <div className="user-profile-header-middle">
            <div className="user-profile-header-option fs-6">My Profile</div>
            <div className="user-profile-header-option fs-6">My Projects</div>
            <div className="user-profile-header-option fs-6">My History</div>
          </div>
          <div className="horizontal-line"></div>
          <div className="user-profile-header-bottom">
            <div className="user-profile-header-option fs-6">
              Account Setting
            </div>
            <div className="user-profile-header-option fs-6">Sign Out</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

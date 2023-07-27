import React from "react";
import "./userprofile.css";
import profile from "./profile.png";
import { AuthContext } from "../../context/AuthContext.js";
import { useContext } from "react";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="profile_container">
      <div className="profile_contents">
        <div>
          <img src={profile} className="profile_image" />
          <div className="user-name">
            <p style={{ fontSize: 23 }}>{user.username} ,</p>
            <p style={{ fontSize: 23, color: "#808080" }}> {user.age}</p>
          </div>
          <div>
            <p className="address">
              {user.city}, {user.state}
            </p>
          </div>
          {user.isSlotBooked ? (
            <>
              <div>
                <p>1 event booked</p>
                <p>Slot Id : {user.slotId}</p>
              </div>
            </>
          ) : (
            <>
              <p>0 events booked</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

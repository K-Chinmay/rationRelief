import React from "react";
import styles from "./header.module.css";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { FcOrganization } from "react-icons/fc";
import { ImUsers } from "react-icons/im";
import { FaRegAddressCard, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const Header = () => {
  return (
    <div>
      <section className={styles.events}>
        <div className={styles.event_cards}>
          <div className={styles.event_card1}>
            <FcOrganization className={styles.event_icon} />
            <h3>100+ Organizations</h3>
          </div>
          <div className={styles.event_card1}>
            <ImUsers className={styles.event_icon} />
            <h3>500+ Users</h3>
          </div>
          <div className={styles.event_card1}>
            <FaRegAddressCard className={styles.event_icon} />
            <h3>100+ beneficiaries</h3>
          </div>
          <div className={styles.event_card1}>
            <MdEmojiEvents className={styles.event_icon} />
            <h3>200+ Successful Events</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

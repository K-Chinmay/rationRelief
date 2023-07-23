import React from "react";
import styles from "./header.module.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { FcOrganization } from "react-icons/fc";
import { ImUsers } from "react-icons/im";
import { FaRegAddressCard, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const Header = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

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
        <div className={styles.searchbar}>
          <h2>Search Events</h2>
          <div className={styles.headerSearch}>
            <div className={styles.headerSearchItem}>
              <FaMapMarkerAlt className={styles.headerIcon} />
              <input
                type="text"
                placeholder="Choose city"
                className={styles.headerInput}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className={styles.headerSearchItem}>
              <SlCalender className={styles.headerIcon} />
              <input
                type="text"
                placeholder="Enter date(dd/mm/yyyy)"
                className={styles.headerInput}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className={styles.headerSearchItem}>
              <Link
                className={styles.searchButton}
                to="/consumer/events"
                state={{ city: city.toLowerCase(), date: date }}
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

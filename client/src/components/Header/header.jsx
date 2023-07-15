import React from "react";
import styles from "./header.module.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import { FcOrganization } from "react-icons/fc";
import { ImUsers } from "react-icons/im";
import { FaRegAddressCard, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const Header = () => {
  const [district, setDistrict] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      key: "selection",
    },
  ]);
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
                placeholder="Choose district"
                className={styles.headerInput}
              />
            </div>
            <div className={styles.headerSearchItem}>
              <SlCalender className={styles.headerIcon} />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerInput"
              >{`${format(date[0].startDate, "MM/dd/yyyy")}
                `}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className={styles.headerSearchItem}>
              <button className={styles.searchButton}>Search</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

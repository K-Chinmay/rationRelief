import React, { useState } from "react";
import Header from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { EventData } from "../../assets/EventData.jsx";
import eventIcon from "./Images/icon.png";
import "./EventList.css";
import useFetch from "../../hooks/useFetch.js";
import { useLocation, useNavigate } from "react-router-dom";

import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { FaRegAddressCard, FaMapMarkerAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const EventList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [district, setDistrict] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      key: "selection",
    },
  ]);
  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:8800/server/events`
  );
  console.log(district);
  const handleClick = () => {
    reFetch();
  };

  const handleCardClick = () => {
    navigate("/consumer/eventDetails");
  };

  return (
    <div>
      <Header />
      <div className="searchbg">
        <div className="searchbar">
          <h2>Search Events</h2>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FaMapMarkerAlt className="headerIcon" />
              <input
                type="text"
                placeholder="Choose district"
                className="headerInput"
                onClick={(e) => setDistrict(e.target.value)}
              />
            </div>
            <div className="headerSearchItem">
              <SlCalender className="headerIcon" />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerInput"
              >{`${format(date[0].startDate, "MM/dd/yyyy")}
                `}</span>
              <div>
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
            </div>
            <div className="headerSearchItem">
              <button className="searchButton" onClick={handleClick}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="events">
        <h1>Events</h1>
        <div className="event_grid">
          {loading ? (
            "loading"
          ) : (
            <>
              {data.map((event) => (
                <div
                  key={event._id}
                  className="event_block"
                  onClick={() => handleCardClick(event)}
                >
                  <img src={eventIcon} alt="Event Icon" />
                  <h3>{event.eventName}</h3>
                  <p>{event.eventDate}</p>
                  <p>{event.eventState}</p>
                  <p>{event.eventCity}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default EventList;

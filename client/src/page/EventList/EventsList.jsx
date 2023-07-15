import React from "react";
import Header from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { EventData } from "../../assets/EventData.jsx";
import eventIcon from "./Images/icon.png";
import "./EventList.css";

const EventList = () => {
  return (
    <div>
      <Header />
      <div className="events">
        <h1>Events</h1>
        <div className="event_grid">
          {EventData.map((event) => (
            <div
              key={event._id}
              className="event_block"
              // onClick={() => handleCardClick(event)}
            >
              <img src={eventIcon} alt="Event Icon" />
              <h3>{event.eventName}</h3>
              <p>{event.eventDate}</p>
              <p>{event.eventState}</p>
              <p>{event.eventCity}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventList;

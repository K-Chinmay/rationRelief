import React, { useState } from "react";
import Header from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { EventData } from "../../assets/EventData.jsx";
import eventIcon from "./Images/icon.png";
import "./EventList.css";
import useFetch from "../../hooks/useFetch.js";
import { useLocation, useNavigate } from "react-router-dom";

const EventList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [city, setCity] = useState(location.state.city);
  const [date, setDate] = useState(location.state.date);

  const { data, loading, error, reFetch } = useFetch(
    `https://reationrelief-server.onrender.com/server/events/?eventCity=${
      city || "city"
    }&eventDate=${date || "dd/mm/yyyy"}`
    // `http://localhost:8800/server/events/?eventCity=${
    //   city || "city"
    // }&eventDate=${date || "dd/mm/yyyy"}`
  );
  console.log(data);
  const handleCardClick = (id) => {
    console.log(id);
    navigate(`/consumer/eventDetails/${id}`);
  };

  return (
    <div>
      <Header />
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
                  onClick={() => handleCardClick(event._id)}
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

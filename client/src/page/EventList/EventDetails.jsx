import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext.js";
import { useContext, useState } from "react";
import axios from "axios";

import { ImCancelCircle } from "react-icons/im";
import Header from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import styles from "./EventDetails.module.css";

const Test = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[3];
  const { data, loading, error } = useFetch(
    `https://reationrelief-server.onrender.com/server/events/${id}`
    // `http://localhost:8800/server/events/${id}`
  );
  const { user } = useContext(AuthContext);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleBookSlot = async (e) => {
    e.preventDefault();

    try {
      console.log(data);
      if (user) {
        if (!user.isSlotBooked) {
          const slotData = {
            eventid: data._id,
            title: data.eventName,
            userId: user._id,
            userPosted: user.username,
            startTime,
            endTime,
            bookingDate: data.eventDate,
          };
          const res = await axios.post(
            `https://reationrelief-server.onrender.com/server/slot/${data._id}`,
            // `http://localhost:8800/server/slot/${data._id}`,
            slotData
          );
          console.log(res);
          navigate("/");
        } else {
          console.log("You have already booked a slot");
        }
      } else {
        navigate("/consumer/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.modal}>
        <div className={styles.modal_content}>
          <div>
            <div className={styles.cancel_btn_div}>
              {/* <ImCancelCircle
                className={styles.cancel_btn}
                // onClick={handleCloseModal}
              /> */}
            </div>
            <h2>{data.eventName}</h2>
            <p>Date: {data.eventDate}</p>
            <p>State: {data.eventState}</p>
            <p>City: {data.eventCity}</p>
            <p>Email: {data.organizationEmail}</p>
            <table className={styles.event_table}>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Provider</th>
                  <th>Mfg Date</th>
                  <th>Expiry Date</th>
                  <th>Allocated Per user</th>
                </tr>
              </thead>

              <tbody>
                {data.rationDetails?.map((object) => (
                  <tr>
                    <td>{object.item}</td>
                    <td>{object.quantity}</td>
                    <td>{object.provider}</td>
                    <td>{object.mfgDate}</td>
                    <td>{object.expiryDate}</td>
                    <td>{object.allocatedPerUser}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className={styles.event_table}>
              <thead>
                <tr>
                  <th>Start Time</th>
                  <th>End Time</th>
                </tr>
              </thead>

              <tbody>
                {data.rationSchedule?.map((object) => (
                  <tr>
                    <td>{object.startTime}</td>
                    <td>{object.endTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.book_slot}>
              <div className={styles.input_container}>
                <label htmlFor="start-time">Start Time</label>

                <input
                  type="text"
                  id="start-time"
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>

              <div className={styles.input_container}>
                <label htmlFor="end-time">End Time</label>

                <input
                  type="text"
                  id="end-time"
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>

              <button className={styles.book_button} onClick={handleBookSlot}>
                Book the Slot
              </button>
              <div id="answer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;

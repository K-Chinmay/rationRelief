import React from "react";
import { ImCancelCircle } from "react-icons/im";
import Header from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import styles from "./EventDetails.module.css";

const Test = () => {
  const EventDetails = {
    eventName: "Unity Initiative",
    eventDate: "09/05/2023",
    rationSchedule: [
      { startTime: "10am", endTime: "12pm" },
      { startTime: "1pm", endTime: "3pm" },
      { startTime: "3pm", endTime: "5pm" },
    ],
    rationDetails: [
      {
        item: "Wheat",
        quantity: { $numberInt: "80" },
        provider: "Deshpandes",
        mfgDate: "09/03/2023",
        expiryDate: "09/09/2023",
        allocatedPerUser: 10,
      },
      {
        item: "Rice",
        quantity: { $numberInt: "160" },
        provider: "Motilals",
        expiryDate: "09/10/2023",
        allocatedPerUser: { $numberInt: "20" },
      },
      {
        item: "Sugar",
        quantity: { $numberInt: "40" },
        provider: "Jayantilas",
        mfgDate: "09/02/2023",
        expiryDate: "09/10/2023",
        allocatedPerUser: { $numberInt: "5" },
      },
    ],
    eventCity: "Nashik",
    eventState: "Maharashtra",
    organizationEmail: "testmail1@gmail.com",
  };

  return (
    <div>
      <Header />
      <div className={styles.modal}>
        <div className={styles.modal_content}>
          {/* {EventDetails.map((selectedEvent) => ( */}
          <div>
            <div className={styles.cancel_btn_div}>
              {/* <ImCancelCircle
                className={styles.cancel_btn}
                // onClick={handleCloseModal}
              /> */}
            </div>

            <h2>{EventDetails.eventName}</h2>

            <p>Date: {EventDetails.eventDate}</p>

            <p>State: {EventDetails.eventState}</p>

            <p>City: {EventDetails.eventCity}</p>

            <p>Email: {EventDetails.organizationEmail}</p>

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
                {/* {EventDetails.rationDetails.map((data) => ( */}
                <tr>
                  <td>{EventDetails.rationDetails.item}</td>

                  <td>{EventDetails.rationDetails.quantity}</td>

                  <td>{EventDetails.rationDetails.provider}</td>

                  <td>{EventDetails.rationDetails.mfgDate}</td>

                  <td>{EventDetails.rationDetails.expiryDate}</td>

                  <td>{EventDetails.rationDetails.allocatedPerUser}</td>
                </tr>
                {/* ))} */}
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
                {/* {EventDetails.rationSchedule.map((data) => ( */}
                <tr>
                  <td>{EventDetails.rationSchedule.startTime}</td>
                  <td>{EventDetails.rationSchedule.endTime}</td>
                </tr>
                {/* ))} */}
              </tbody>
            </table>

            {/* <form onSubmit={handleBookSlot.bind(startTime, endTime, selectedEvent._id)}> */}

            <div className={styles.book_slot}>
              <div className={styles.input_container}>
                <label htmlFor="start-time">Start Time</label>

                <input
                  type="text"
                  id="start-time"
                  // value={startTime}
                  // onChange={handleStartTimeChange}
                />
              </div>

              <div className={styles.input_container}>
                <label htmlFor="end-time">End Time</label>

                <input
                  type="text"
                  id="end-time"
                  // value={endTime}
                  // onChange={handleEndTimeChange}
                />
              </div>

              <button
                className={styles.book_button}
                // onClick={(e) =>
                //   handleBookSlot(e, startTime, endTime, selectedEvent._id)
                // }
              >
                Book the Slot
              </button>
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Test;

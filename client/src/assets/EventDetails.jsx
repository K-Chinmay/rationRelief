import React from "react";

export const EventDetails = [
  {
    _id: { $oid: "64567949f458d0f3ec7a2054" },
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
        allocatedPerUser: { $numberInt: "10" },
        _id: { $oid: "645897b6ebe9ea875c929ee4" },
      },
      {
        item: "Rice",
        quantity: { $numberInt: "160" },
        provider: "Motilals",
        expiryDate: "09/10/2023",
        allocatedPerUser: { $numberInt: "20" },
        _id: { $oid: "645897b6ebe9ea875c929ee5" },
      },
      {
        item: "Sugar",
        quantity: { $numberInt: "40" },
        provider: "Jayantilas",
        mfgDate: "09/02/2023",
        expiryDate: "09/10/2023",
        allocatedPerUser: { $numberInt: "5" },
        _id: { $oid: "645897b6ebe9ea875c929ee6" },
      },
    ],
    eventCity: "Nashik",
    eventState: "Maharashtra",
    organizationEmail: "testmail1@gmail.com",
  },
];

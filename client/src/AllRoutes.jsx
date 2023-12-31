import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/home";
import Contact from "./page/ContactUs/contactus";
import ConsumerSignin from "../src/page/Consumer/Signin/signin";
import ConsumerSignup from "../src/page/Consumer/Signup/signup";
import EventList from "./page/EventList/EventsList";
import EventDetails from "./page/EventList/EventDetails";
import UserProfile from "./page/Userprofile/userprofile";
import Test from "./page/Test/Test";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/consumer/signin" element={<ConsumerSignin />} />
      <Route path="/consumer/signup" element={<ConsumerSignup />} />
      <Route path="/consumer/events/" element={<EventList />} />
      <Route path="/consumer/eventDetails/:id" element={<EventDetails />} />
      <Route path="/consumer/profile" element={<UserProfile />} />
    </Routes>
  );
};

export default AllRoutes;

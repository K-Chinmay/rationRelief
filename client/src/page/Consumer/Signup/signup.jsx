import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
// import Footer from "../.././components/Footer/footer";
// import Navbar from "../.././components/Navbar/navbar";
// import Dummy from "../Dummy/dummy";
import styles from "./signup.module.css";
import { isValidEmail } from "../../../utilities/isValidEmail.js";
import axios from "axios";
// import BASE_URL from "../.././pages/Utilis/helper";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");

  const submissionHandler = async (next) => {
    console.log("Entered");
    if (!username) {
      toast.error("Enter First Name");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Enter Valid Email");
      return;
    }
    if (!password) {
      toast.error("Enter Password");
      return;
    }
    if (!phone) {
      toast.error("Enter Phone");
      return;
    }
    if (!aadharNo) {
      toast.error("Enter Aadhar No");
      return;
    }
    if (!state) {
      toast.error("Enter State");
      return;
    }
    if (!city) {
      toast.error("Enter City");
      return;
    }
    if (!age) {
      toast.error("Enter Age");
      return;
    }

    const formData = {
      username,
      email,
      password,
      phone,
      aadharNo,
      state,
      city,
      age,
    };

    try {
      const url = "http://localhost:8800/server/auth/register";
      const response = await axios.post(url, formData);
      navigate("/");
      return;
    } catch (error) {
      next(error);
    }
  };
  return (
    <div>
      <div className={styles.UserRegistration}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Consumer Registration</h2>

          <form className={styles.form}>
            <div className={styles.inputField}>
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                className={styles.input}
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <label>Password</label>
              <input
                type="Password"
                placeholder="Password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <label>Phone No</label>
              <input
                type="number"
                placeholder="Phone No"
                className={styles.input}
                required={true}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <label>Aadhar No</label>
              <input
                type="number"
                placeholder="Aadhar No"
                className={styles.input}
                value={aadharNo}
                onChange={(e) => setAadharNo(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <label>State</label>
              <input
                type="text"
                placeholder="State"
                className={styles.input}
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <label>City</label>
              <input
                type="text"
                placeholder="city"
                className={styles.input}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <label>Age</label>
              <input
                type="number"
                placeholder="Age"
                className={styles.input}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <input
                type="submit"
                value="Register"
                className={styles.btn}
                onClick={submissionHandler}
              />
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

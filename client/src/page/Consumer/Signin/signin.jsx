import { useContext, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import styles from "./signin.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext.js";
import { useCookies } from "react-cookie";

const SignUp = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [formLoading, setFormLoading] = useState(false);
  // const [cookie, setCookie] = useCookies(["access_token"]);

  // const submissionHandler = async () => {
  //   console.log("Entered");

  //   if (!isValidEmail(email)) {
  //     toast.error("Enter Valid Email");
  //     return;
  //   }
  //   if (!password) {
  //     toast.error("Enter Password");
  //     return;
  //   }

  //   setFormLoading(true);

  //   const formData = {
  //     consumerEmail: email,
  //     consumerPassword: password,
  //   };

  //   try {
  //     const url = "http://localhost:8081/consumer/signin";
  //     const response = await axios.post(url, formData);

  //     if (response.status === 201) {
  //       setCookie("access_token", response.data.jwttoken);
  //       navigate("/consumer/dashboard");
  //       return;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     if (error.response.status === 400) {
  //       toast.success("user already registered");
  //       navigate("/consumer/dashboard");
  //     }
  //     if (error.response?.data?.message) {
  //       toast.error(error.response.data.message);
  //     }
  //   }

  //   setFormLoading(false);
  // };
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: null,
    password: null,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://reationrelief-server.onrender.com/server/auth/login",
        // "http://localhost:8800/server/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.data });
    }
  };

  return (
    <div>
      <div className={styles.UserRegistration}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Consumer Login</h2>

          <form className={styles.form}>
            <div className={styles.inputField}>
              <label>Username</label>
              <input
                type="username"
                placeholder="Username"
                id="username"
                className={styles.input}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputField}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className={styles.input}
                onChange={handleChange}
              />
            </div>
            <p>
              {" "}
              Don't have account! <Link to={"/consumer/signup"}>
                Signup
              </Link>{" "}
              Now
            </p>

            <div className={styles.inputField}>
              <input
                type="submit"
                value="Login"
                className={styles.btn}
                onClick={handleClick}
              />
            </div>
            {error && <span>{error.message}</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

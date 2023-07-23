import styles from "./Navbar.module.css";
// import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import { useContext } from "react";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1>
          <strong>Ration</strong>Relief
        </h1>
      </div>
      <div className={styles.buttons}>
        <Link to={"/"} className={styles.signin}>
          Home
        </Link>
        <Link to={"/Contact"} className={styles.signin}>
          Contact Us
        </Link>
        {user ? (
          user.username
        ) : (
          <Link to={"/consumer/signin"} className={styles.signup}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import styles from "./Navbar.module.css";
// import { FcLike } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import { useContext } from "react";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

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
          <>
            <Link to={"/consumer/profile"} style={{ textDecoration: "none" }}>
              {user.username}
            </Link>
            <button className={styles.signup} onClick={handleLogout}>
              Log out
            </button>
          </>
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

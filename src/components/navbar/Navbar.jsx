import "./navbar.css";
import logo from "../../assets/logo.png";
import SearchBar from "../searchBar/SearchBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  // currentUser = null;
  const currentUser = {
    result: {
      name: "pr",
      email: "pr@gmail.com",
      joinOn: "2222-07-15T09:57:23.4892",
    },
  };
  return (
    <div className="navbar-container">
      {/* <nav> */}
      <div className="left-container">
        <div className="hamburger-menu">
          <RxHamburgerMenu size={22} />
        </div>
        <div className="logo">
          <img src={logo} alt="youtube logo" />
          <h1>Youtube</h1>
        </div>
      </div>
      <SearchBar />
      <div className="right-container">
        <RiVideoAddLine size={22} />
        <div className="bentoMenu-container">
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
        </div>
        <IoMdNotificationsOutline size={22} />
        {currentUser ? (
          <div className="user-container">
            {
              <span>
                {currentUser?.result.name ? (
                  <>{currentUser?.result.name.charAt(0).toUpperCase()}</>
                ) : (
                  <>{currentUser?.result.email.charAt(0).toUpperCase()}</>
                )}
              </span>
            }
          </div>
        ) : (
          <button className="button">
            <BiUserCircle size={23} />
            Sign in
          </button>
        )}
      </div>
      {/* </nav> */}
    </div>
  );
};

export default Navbar;

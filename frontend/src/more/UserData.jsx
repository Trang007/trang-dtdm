import React, { useState } from "react";
import "./UserOption.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Support from "@material-ui/icons/ReportProblem"
import HeartIcon from "@material-ui/icons/FavoriteBorder";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';

const UserData = ({ user }) => {

  const { favouriteItems } = useSelector((state) => state.favourite);

  const [open, setOpen] = useState(false);
  const history = useHistory();

  const scroolEffect = useRef(null);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      document.querySelector(".speedDial").classList.add("active");
    }
    else {
      document.querySelector(".speedDial").classList.remove("active");
    }
  })

  const dispatch = useDispatch();

  const options = [
    { icon: <HomeIcon />, name: "Trang Chủ", func: home },
    {
      icon:
        <HeartIcon
          style={{
            color: favouriteItems.length === 0 ? "" : "tomato",
          }}
        />,
      name:
        `Yêu thích (${favouriteItems.length})`,
      func: favourite,
    },
    { icon: <PersonIcon />, name: "Hồ sơ cá nhân", func: account },
    { icon: <Support />, name: "Hỗ trợ", func: report },
    { icon: <ExitToAppIcon />, name: "Đăng xuất", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Bảng điểu khiển",
      func: dashboard,
    });
  }
  if (user.role === "student") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Bảng điểu khiển",
      func: student,
    });
  }
  function student() {
    history.push("/student");
  }
  function dashboard() {
    history.push("/dashboard");
  }
  function home() {
    history.push("/");
  }
  function favourite() {
    history.push("/favourites");
  }
  function account() {
    history.push("/me");
  }

  function report() {
    history.push("/support");
  }

  function logoutUser() {
    dispatch(logout());
    toast.success("Đăng xuất thành công");
  }

  return (
    <>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        useRef={scroolEffect}
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : ("/profile.png")}
            alt="Profile"
            style={{
              position: "fixed"
            }}
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={false}
          />
        ))}
      </SpeedDial>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default UserData;

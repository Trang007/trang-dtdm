import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import Logo from "../../Assets/logo.png"
import CategoryIcon from '@material-ui/icons/Category';
import { MenuItem } from "@material-ui/core";
const Sidebar = () => {
  const menu = [
    {
      link: "/dashboard",
      icon: DashboardIcon,
      name: "Bảng điều khiển",
    },
    {
      link: "/admin/categories",
      icon: CategoryIcon,
      name: "Tất cả danh mục",
    },
    {
      link: "/admin/projects",
      icon: PostAddIcon,
      name: "Tất cả đồ án",
    },
    {
      link: "/admin/branchs",
      icon: DashboardIcon,
      name: "Tất cả ngành",
    },
    {
      link: "/admin/classrooms",
      icon: DashboardIcon,
      name: "Tất cả lớp",
    },
    {
      link: "/admin/configs",
      icon: DashboardIcon,
      name: "Tất cả liên kết",
    },
    {
      link: "/admin/councils",
      icon: DashboardIcon,
      name: "Tất cả hợp đồng",
    },
    {
      link: "/admin/departments",
      icon: DashboardIcon,
      name: "Tất cả khoa",
    },
    {
      link: "/admin/faqs",
      icon: DashboardIcon,
      name: "Tất cả quy tắc",
    },
    {
      link: "/admin/notifys",
      icon: DashboardIcon,
      name: "Tất cả thông báo",
    },
    {
      link: "/admin/schoolyears",
      icon: DashboardIcon,
      name: "Tất cả niên khóa",
    },
    {
      link: "/admin/specializeds",
      icon: DashboardIcon,
      name: "Tất cả chuyên ngành",
    },
    {
      link: "/admin/supports",
      icon: DashboardIcon,
      name: "Tất cả hỗ trợ",
    },
    {
      link: "/admin/trainingsystems",
      icon: DashboardIcon,
      name: "Tất cả hệ đào tạo",
    },
    {
      link: "/admin/users",
      icon: PeopleIcon,
      name: "Người dùng",
    },
  ]
  return (
    <div className="sidebar">
      <Link to="/">
        <img
          src={Logo}
          style={{ cursor: "pointer" }}
          alt="Lỗi"
        />
      </Link>
      {menu.map((item) => (
        <Link to={item.link}>
          <p className="Dashboard__item">
            <item.icon /> {item.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
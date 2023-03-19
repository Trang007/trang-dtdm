import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BottomTab from "../../more/BottomTab";
import MetaData from "../../more/Metadata";
import StoreIcon from "@material-ui/icons/Shop";
import SearchIcon from "@material-ui/icons/Search";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Creator from "@material-ui/icons/Store";
import ForumIcon from "@material-ui/icons/Forum";
import Support from "@material-ui/icons/ReportProblem";
import QuestionMarkIcon from "@material-ui/icons/Cached";
import Update from "@material-ui/icons/DynamicFeedOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import TouchAppOutlinedIcon from "@material-ui/icons/TouchAppOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { logout } from "../../actions/userAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MoreOption = ({ history }) => {
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
    history.push("/login");
    toast.success ("Đăng xuất thành công");
  }

  return (
    <>
      <MetaData title="Menu" />
      <div
        className="moreOption"
        style={{
          display: "flex",
          padding: "10px",
          flexDirection: "column",
          marginBottom: "10vh",
          display: "none",
        }}
      >
        {isAuthenticated === false ? (
          ""
        ) : (
          <Link to="/me">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid rgb(0 0 0 / 25%)",
                padding: "4px 0",
                width: "100%",
              }}
            >
              <img
                src={user.avatar.url}
                alt={user.name}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "100%",
                  objectFit: "cover",
                  marginRight: "10px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    color: "#000",
                  }}
                >
                  {user.name}
                </span>
                <span
                  style={{
                    color: "#000",
                    opacity: "0.6",
                    fontSize: "14px",
                  }}
                >
                  Xem hồ sơ cá nhân
                </span>
              </div>
            </div>
          </Link>
        )}

        <Link to="/project">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 0",
            }}
          >
            <StoreIcon
              style={{
                fontSize: "30px",
                color: "#000",
                marginRight: "10px",
              }}
            />
            <span
              style={{
                color: "#000",
              }}
            >
              Đồ án
            </span>
          </div>
        </Link>

        <Link to="/search">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 0",
            }}
          >
            <SearchIcon
              style={{
                fontSize: "30px",
                color: "#000",
                marginRight: "10px",
              }}
            />
            <span
              style={{
                color: "#000",
              }}
            >
              Tìm kiếm
            </span>
          </div>
        </Link>


        <Link to="/favourites">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 0",
            }}
          >
            <FavoriteBorderIcon
              style={{
                fontSize: "30px",
                color: "#000",
                marginRight: "10px",
              }}
            />
            <span
              style={{
                color: "#000",
              }}
            >
              Yêu thích
            </span>
          </div>
        </Link>


        {isAuthenticated === false ? (
          ""
        ) : (
          <Link to="/password/update">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "7px 0",
              }}
            >
              <VpnKeyIcon
                style={{
                  fontSize: "30px",
                  color: "#000",
                  marginRight: "10px",
                }}
              />
              <span
                style={{
                  color: "#000",
                }}
              >
                Đổi mật khẩu
              </span>
            </div>
          </Link>
        )}
        {isAuthenticated === false ? (
          ""
        ) : (
          <Link to="/password/forgot">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "7px 0",
              }}
            >
              <QuestionMarkIcon
                style={{
                  fontSize: "30px",
                  color: "#000",
                  marginRight: "10px",
                }}
              />
              <span
                style={{
                  color: "#000",
                }}
              >
                Quên mât khẩu
              </span>
            </div>
          </Link>
        )}
        {isAuthenticated === false ? (
          ""
        ) : (
          <Link to="/me/update">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "7px 0",
              }}
            >
              <Update
                style={{
                  fontSize: "30px",
                  color: "#000",
                  marginRight: "10px",
                }}
              />
              <span
                style={{
                  color: "#000",
                }}
              >
                Sửa thông tin
              </span>
            </div>
          </Link>
        )}

        <Link to="/contact">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 0",
            }}
          >
            <ContactMailOutlinedIcon
              style={{
                fontSize: "30px",
                color: "#000",
                marginRight: "10px",
              }}
            />
            <span
              style={{
                color: "#000",
              }}
            >
              Liên hệ
            </span>
          </div>
        </Link>

        <Link to="/faq">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 0",
            }}
          >
            <TouchAppOutlinedIcon
              style={{
                fontSize: "30px",
                color: "#000",
                marginRight: "10px",
              }}
            />
            <span
              style={{
                color: "#000",
              }}
            >
              Quy tắc
            </span>
          </div>
        </Link>

        <Link to="/support">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 0",
            }}
          >
            <Support
              style={{
                fontSize: "30px",
                color: "#000",
                marginRight: "10px",
              }}
            />
            <span
              style={{
                color: "#000",
              }}
            >
             Trợ giúp
            </span>
          </div>
        </Link>

        {isAuthenticated === false ? (
          ""
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 0",
            }}
            onClick={logoutUser}
          >
            <ExitToAppIcon
              style={{
                fontSize: "30px",
                color: "#000",
                marginRight: "10px",
              }}
            />
            <span
              style={{
                color: "#000",
              }}
            >
              Đăng xuất
            </span>
          </div>
        )}
      </div>
      <BottomTab />
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

export default MoreOption;

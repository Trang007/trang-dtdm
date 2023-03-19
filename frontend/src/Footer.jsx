import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Assets/logo.png"
const Footer = () => {
  return (
    <div className="Footer flex space__around pz__15" style={{ "borderTop": ".3px solid rgba(21,21,21,0.5)" }}>
      {/* Footer 1st part */}
      <div className="footer1st">
        <img
          src={Logo}
          style={{ cursor: "pointer" }}
          alt="Lỗi"
        />
        <div className="location flex py__10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-geo-alt icon__color"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <strong>Địa chỉ:</strong>
          <h6>Số 18 Phố Viên - Phường Đức Thắng - Q. Bắc Từ Liêm - Hà Nội</h6>
        </div>

        <div className="location flex py__10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-geo-alt icon__color"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
          <strong>Email:</strong>
          <h6><a style={{ color: "black" }} href="mailto:hanhchinhtonghop@humg.edu.vn">hanhchinhtonghop@humg.edu.vn</a></h6>
        </div>

        <div className="location flex py__10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-geo-alt icon__color"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
          </svg>
          <strong>Điện thoại:</strong>
          <h6><a style={{ color: "black" }} href="tel:0338389633">03 3838 9633</a></h6>
        </div>

        <div className="location flex py__10">
          <strong>Bản quyền thuộc về Trường Đại học Mỏ - Địa chất </strong>
        </div>
      </div>
      {/* Footer 2nd part */}
      <div className="mobile">
        <div className="footer__2nd__part">
          <h5>Tài khoản</h5>
          <Link to="/login"><h5>Đăng nhập</h5></Link>
          <Link to="/password/forgot"><h5>Quên mật khẩu</h5></Link>
        </div>
        {/* Footer 3rd part */}
        <div className="footer__2nd__part">
          <h5>Theo dõi</h5>
          <a href="https://www.facebook.com/humg.edu" target="_blank">
            <h5>Facebook</h5>
          </a>
          <a href="https://www.youtube.com/c/Tr%C6%B0%E1%BB%9Dng%C4%90HM%E1%BB%8F%C4%90%E1%BB%8Bach%E1%BA%A5t-HUMG/videos" target="_blank">
            <h5>Youtube</h5>
          </a>
          <a href="https://www.instagram.com/humg.edu.vn/" target="_blank">
            <h5>Instargam</h5>
          </a>
          <a href="https://www.tiktok.com/@daihocmodiachat/" target="_blank">
            <h5>Tiktok</h5>
          </a>
        </div>
        {/* Footer 4th part */}
        <div className="footer__3rd__part">
          <h5>Sinh viên</h5>
          <Link to="/project"><h5>Đồ án</h5></Link>
          <Link to="/support"><h5>Phản hồi</h5></Link>
        </div>
        {/* Footer 5th part */}
        <div className="footer__4th__part">
          <h5>Về chúng tôi </h5>
          <Link to="/faq"><h5>Quy tắc</h5></Link>
          <Link to="/contact"><h5>Liên hệ</h5></Link>
          <Link to="/about"><h5>Giới thiệu</h5></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  const [date, setDate] = useState();
  const getCurrentYear = () => {
    setDate(new Date().getFullYear());
  };
  useEffect(() => {
    getCurrentYear();
  }, []);
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
      }}
      class=" py-16 pl-10 lg:pl-40 "
    >
      <div className="footer text-center">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="mt-10  items-center text-center mr-32">
              <p>Copyright © {date}- All right reserved by Sazzad-ur-Rahman </p>
      </div>
    </footer>
  );
};

export default Footer;

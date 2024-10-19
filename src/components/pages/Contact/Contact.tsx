import React from "react";
import scss from "./Contact.module.scss";
import Image from "next/image";
import Icon from "../../../assets/icons/contacticon.svg";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { MdOutlineAddIcCall } from "react-icons/md";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <section id="contact" className={scss.Contact}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <Image src={Icon} alt="icon" />
            <h1>
              Join Us for <br />
              Happy Hours
            </h1>
            <div className={scss.neighborhood}>
              <h3>Your neighborhood</h3>
              <p>
                225$.Lake Ave.Suite 1150 <br />
                Pasadena,CA 911101
              </p>
            </div>
            <div className={scss.opening}>
              <h3>Opening Hours</h3>
              <p>Mon-Thu: 10:00 am - 01:00 am</p>
              <p>Fri-Sun: 10:00 am - 02:00 am</p>
            </div>
            <div className={scss.btn}>
              <button></button>
            </div>
          </div>
          <div className={scss.map_div}>
            <div className={scss.map_text}>
              <h3>Contact Info</h3>
              <a>
                <MdOutlineAddIcCall />
                <span>+771219900</span>
              </a>
              <a>
                <CgMail />
                <span>motionweb312@gmail.com</span>
              </a>
              <div className={scss.mess}>
                <a href="">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
            <div className={scss.map}>
              <iframe
                src="https://www.google.com/maps/@42.8868752,74.6061824,14z?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D"
                width="400"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

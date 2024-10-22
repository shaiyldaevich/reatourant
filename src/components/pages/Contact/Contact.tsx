import React from "react";
import scss from "./Contact.module.scss";
import Image from "next/image";
import Icon from "../../../assets/icons/contacticon.svg";
import {
  FaTelegramPlane,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { MdOutlineAddIcCall } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { Typography } from "@/UI/Typography/Typography";

const Contact = () => {
  return (
    <section id="contacts" className={scss.Contact}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <Image src={Icon} alt="icon" />
            <Typography variant="h2" weight="regular" fontFamily="playfair_display">
              Join Us for <br />
              Happy Hours
            </Typography>
            <div className={scss.neighborhood}>
              <Typography variant="h5" weight="bold" fontFamily="spartan">Your neighborhood</Typography>
              <Typography variant="bodyL" weight="bold" fontFamily="spartan">
                225$.Lake Ave.Suite 1150 <br />
                Pasadena,CA 911101
              </Typography>
            </div>
            <div className={scss.opening}>
              <Typography variant="h5" weight="bold" fontFamily="spartan">Opening Hours</Typography>
              <Typography variant="bodyL" weight="light" fontFamily="spartan">Mon-Thu: 10:00 am - 01:00 am</Typography>
              <Typography variant="bodyL" weight="light" fontFamily="spartan">Fri-Sun: 10:00 am - 02:00 am</Typography>
            </div>
            <div className={scss.btn}>
              <div className={scss.topLine}></div>
              <button className={scss.customButton}>
                PURCHASE GIFT CARD
                <span className={scss.arrow}><FaArrowRight/> </span>
              </button>
              <div className={scss.bottomLine}></div>
            </div>
          </div>
          <div className={scss.map_div}>
            <div className={scss.map_text}>
              <h3>Contact Info</h3>
              <a href="tel:+771219900">
                <MdOutlineAddIcCall />
                <span>+771219900</span>
              </a>
              <a href="mailto:motionweb312@gmail.com">
                <CgMail />
                <span>motionweb312@gmail.com</span>
              </a>
              <div className={scss.mess}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
            <div className={scss.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77824579958!2d2.2646349671527934!3d48.858938434575734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z0J_QsNGA0LjQtiwg0KTRgNCw0L3RhtC40Y8!5e0!3m2!1sru!2skg!4v1729316091447!5m2!1sru!2skg"
                width="400"
                height="200"
              ></iframe>
            </div>
          </div>
          <div className={scss.onlyMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77824579958!2d2.2646349671527934!3d48.858938434575734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z0J_QsNGA0LjQtiwg0KTRgNCw0L3RhtC40Y8!5e0!3m2!1sru!2skg!4v1729316091447!5m2!1sru!2skg"
              width="400"
              height="150"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

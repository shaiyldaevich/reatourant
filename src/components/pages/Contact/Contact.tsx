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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77824579958!2d2.2646349671527934!3d48.858938434575734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z0J_QsNGA0LjQtiwg0KTRgNCw0L3RhtC40Y8!5e0!3m2!1sru!2skg!4v1729316091447!5m2!1sru!2skg"
                                width="550"
                                height="250"
                                // style="border:0;"
                                // allowfullscreen=""
                                loading="lazy"
                                // referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

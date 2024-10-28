"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import styles from "./ModalWindow.module.scss";
import UserModal from "@/assets/icons/UserModal";
import { Typography } from "@/UI/Typography/Typography";
import PhoneModal from "@/assets/icons/PhoneModal";

interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    setIsValid(name.trim() !== "" && phone.trim() !== "");
  }, [name, phone]);

  const handleClose = () => {
    setName("");
    setPhone("");
    onClose();
  };

  if (!isMounted || !isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isValid) {
      handleClose();
    } else {
      alert("Заполните все поля.");
    }
  };

  return (
    <div onClick={handleOverlayClick} className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.mainModal}>
        <div className={styles.modalUser}>
          <div className={styles.userIcon}>
            <UserModal />
          </div>
          <div className={styles.modalText}>
            <Typography variant="bodyXM" weight="light" fontFamily="spartan">
              NAME
            </Typography>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
        </div>
        <div className={styles.modalPhone}>
          <div className={styles.phoneIcon}>
            <PhoneModal />
          </div>
          <div className={styles.modalText}>
            <Typography variant="bodyXM" weight="light" fontFamily="spartan">
              PHONE
            </Typography>
            <input
              type="number"
              placeholder="Enter your phone"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
        </div>
        <button type="submit" className={styles.btn}>
          Сontact
        </button>
      </form>
    </div>
  );
};

export default ModalWindow;

"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";
import { useGetProductQuery } from "@/redux/api/todo";

interface LayoutType {
  children: ReactNode;
}

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <div className={scss.Layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

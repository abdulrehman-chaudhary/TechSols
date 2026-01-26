import React from "react";
import Header from "../ui/Header";
import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;

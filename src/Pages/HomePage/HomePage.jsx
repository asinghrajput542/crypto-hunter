import { Container, Typography } from "@mui/material";
import React from "react";
import "./homePage.css";
import Banner from "../../Components/banner/Banner";
import CoinsTable from "../../Components/coinsTable/CoinsTable";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <CoinsTable />
    </div>
  );
};

export default HomePage;

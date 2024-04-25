import React from 'react';
import Header from "../components/header/Header";
import UrlShorter from "../components/url-shoter/UrlShorter";
import Footer from "../components/footer/Footer";
import {Box} from "@mui/material";

const Main = () => {
  return (
    <Box sx={{ high: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Header />
      <UrlShorter />
      <Footer />
    </Box>
  );
};

export default Main;
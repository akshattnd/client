import { Outlet } from "react-router-dom";
import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/common/Header";

const Layout: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      maxWidth={"48rem"}
      minWidth={"100%"}
      overflow={"hidden"}
      marginX={"auto"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;

import { Stack } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
const Header: React.FC = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        width={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
        position={"sticky"}
        top={0}
        py={1}
      >
        <img
          src="/Threads-logo-black-bg.webp"
          alt="Logo"
          className="w-14 h-12"
        />
        <Stack
          flexDirection={"row"}
          width={"34.5rem"}
          height={"5rem"}
          justifyContent={"space-around"}
          alignItems={"center"}
          zIndex={2}
          bgcolor={"aliceblue"}
        >
          <Navbar />
        </Stack>
        Menu
      </Stack>
    </>
  );
};

export default Header;
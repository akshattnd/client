import React from "react";
import { Stack } from "@mui/material";
import InputThread from "../../components/InputThread";
const Home: React.FC = () => {
  return (
    <>
      <InputThread />
      <Stack flexDirection={"column"} gap={2} mb={10}></Stack>
    </>
  );
};

export default Home;

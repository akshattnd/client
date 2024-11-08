import { PersonOutlineOutlined } from "@mui/icons-material";
import { Stack, Avatar } from "@mui/material";
import React from "react";

const InputThread: React.FC = () => {
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"40%"}
      height={"3.5rem"}
      my={5}
      border={"2px solid gray"}
    >
      <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
        <Avatar alt="user-logo">
          <PersonOutlineOutlined />
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default InputThread;

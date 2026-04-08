import React from "react";
import { CommonGrid2, CustomDiv } from "../../../common-components/style";
import { Box, Typography } from "@mui/material";

export default function About() {
  return (

    <CommonGrid2
      width={"80%"}
      height={"auto"}
      textAlign={"center"}
      id="about"
      customStyle={{
        scrollMarginTop: "80px",
      }}
    >
      <Typography variant="h4" fontWeight={700} color="#fff">About Me</Typography>
      <Typography style={{ color: "#94a3b8", marginTop: 8 }}>
        Frontend Developer with strong knowledge of modern web technologies including React.js, React Native, Redux
        Toolkit, and TypeScript. Focused on building responsive and user-friendly applications using component-based
        architecture and reusable UI design. Familiar with React 18 and REST API integration. Passionate about writing
        clean code, optimizing performance, and continuously learning new technologies </Typography>

    </CommonGrid2>


  );
}

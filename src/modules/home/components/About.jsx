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
        scrollMarginTop: "100px",
      }}
    >
      <Typography variant="h4" fontWeight={700} color="#fff">About Me</Typography>
      <Typography style={{ color: "#94a3b8", marginTop: 8 }}>
        Having 6+months of experience in frontend development,I am a passionate and detail-oriented Web Developer with a strong foundation in modern technologies such as React, JavaScript, and the MERN stack. I enjoy building responsive, user-friendly, and performance-driven web applications that solve real-world problems. With a keen interest in continuous learning, I actively enhance my skills in frontend and backend development. I have developed projects in domains like e-commerce, agriculture, and portfolio design, demonstrating my ability to translate ideas into functional solutions. I am eager to contribute to innovative teams and grow as a software professional.
         </Typography>

    </CommonGrid2>


  );
}

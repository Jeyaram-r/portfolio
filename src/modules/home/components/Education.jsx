import React from "react";
import { CommonGrid2 } from "../../../common-components/style";
import { Typography } from "@mui/material";

export default function Education({ educationData }) {
  console.log("Education data received:", educationData);
  return (
    <CommonGrid2
      width="50%"
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      gap="20px"
      id="education"
      customStyle={{
        scrollMarginTop: "80px",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ color: "#fff", textAlign: "center", marginBottom: "10px" }}
      >
        Education
      </Typography>

      {educationData.map((edu, index) => (
        <CommonGrid2
          key={index}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent={"center"}
          gap="16px"
          padding="20px"
          borderRadius="12px"
          backgroundColor="#252e3f"
          customStyle={{
            border: "1px solid rgba(255,255,255,0.08)",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Icon Section */}
          <CommonGrid2
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="50px"
            height="50px"
            borderRadius="50%"
            backgroundColor="#1e293b"
          >
            {edu.icon}
          </CommonGrid2>

          {/* Content Section */}
          <CommonGrid2 display="flex" flexDirection="column" gap="6px" justifyContent={"center"} alignItems={"center"}>
            <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600 }}>
              {edu.title}
            </Typography>

            <Typography variant="body2" sx={{ color: "#94a3b8" }}>
              {edu.institution}
            </Typography>

            <Typography variant="body2" sx={{ color: "#38bdf8" }}>
              {edu.year}
            </Typography>

            <Typography variant="body2" sx={{ color: "#cbd5f5" }}>
              {edu.info}
            </Typography>
          </CommonGrid2>
        </CommonGrid2>
      ))}
    </CommonGrid2>
  );
}

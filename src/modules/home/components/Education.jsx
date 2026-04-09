import React from "react";
import { CommonGrid2 } from "../../../common-components/style";
import { Typography, useTheme, useMediaQuery } from "@mui/material";

export default function Education({ educationData }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <CommonGrid2
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap="20px"
      id="education"
      customStyle={{
        scrollMarginTop: "100px",
        width: isMobile ? "92%" : isTablet ? "75%" : "55%",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h4"}
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
          justifyContent="flex-start"
          gap={isMobile ? "12px" : "16px"}
          padding={isMobile ? "14px" : "20px"}
          borderRadius="12px"
          backgroundColor="#252e3f"
          customStyle={{
            border: "1px solid rgba(255,255,255,0.08)",
            transition: "all 0.3s ease",
            cursor: "pointer",
            boxSizing: "border-box",
            width: "100%",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
            e.currentTarget.style.borderColor = "#38bdf8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          }}
        >
          {/* Icon */}
          <CommonGrid2
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="50%"
            backgroundColor="#1e293b"
            customStyle={{
              width: isMobile ? "40px" : "50px",
              height: isMobile ? "40px" : "50px",
              flexShrink: 0,
            }}
          >
            {edu.icon}
          </CommonGrid2>

          {/* Content */}
          <CommonGrid2
            display="flex"
            flexDirection="column"
            gap="5px"
            customStyle={{ flex: 1, minWidth: 0 }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: isMobile ? "14px" : "16px",
                lineHeight: 1.3,
              }}
            >
              {edu.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#94a3b8",
                fontSize: isMobile ? "12px" : "14px",
                lineHeight: 1.4,
                wordBreak: "break-word",
              }}
            >
              {edu.institution}
            </Typography>

            <CommonGrid2
              display="flex"
              gap="10px"
              justifyContent={"flex-end"}
              customStyle={{ flexWrap: "wrap", alignItems: "center" }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#38bdf8",
                  fontSize: isMobile ? "12px" : "13px",
                  fontWeight: 500,
                }}
              >
                {edu.year}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#cbd5e1",
                  fontSize: isMobile ? "12px" : "13px",
                }}
              >
                · {edu.info}
              </Typography>
            </CommonGrid2>
          </CommonGrid2>
        </CommonGrid2>
      ))}
    </CommonGrid2>
  );
}
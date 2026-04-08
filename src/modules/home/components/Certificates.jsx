import React from "react";
import { Box, Typography } from "@mui/material";
import { CommonGrid2 } from "../../../common-components/style";

export default function Certificates({ certificateData }) {
  return (
    <CommonGrid2
      width="80%"
      display="flex"
      flexDirection="column"
      gap="25px"
      customStyle={{
        scrollMarginTop: "80px",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{
          textAlign: "center",
          color: "#fff",
          letterSpacing: "1px",
        }}
      >
        Certificates
      </Typography>

      {/* Grid */}
      <CommonGrid2
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(260px, 1fr))"
        gap="20px"
      >
        {certificateData.map((cert, index) => (
          <CommonGrid2
            key={index}
            padding="20px"
            borderRadius="16px"
            display="flex"
            flexDirection="column"
            gap="10px"
            background="linear-gradient(135deg, #0b1220, #1e293b)"
            customStyle={{
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 15px 35px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Glow Effect */}
            <CommonGrid2
              customStyle={{
                position: "absolute",
                width: "120px",
                height: "120px",
                background: "rgba(56,189,248,0.15)",
                borderRadius: "50%",
                top: "-30px",
                right: "-30px",
                filter: "blur(40px)",
              }}
            />
            <CommonGrid2
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="120px"
              customStyle={{ zIndex: 1 }}
            >
              <Box
                component="img"
                src={cert.image}
                alt={cert.title}
                sx={{
                  width: 80,
                  height: 80,
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
            </CommonGrid2>

            {/* Title */}
            <Typography
              variant="h6"
              sx={{ color: "#fff", fontWeight: 600, zIndex: 1 }}
            >
              {cert.title}
            </Typography>

            {/* Issuer */}
            <Typography
              variant="body2"
              sx={{ color: "#38bdf8", zIndex: 1 }}
            >
              {cert.issuer}
            </Typography>
          </CommonGrid2>
        ))}
      </CommonGrid2>
    </CommonGrid2>
  );
}

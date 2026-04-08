import React from "react";
import { CommonGrid2 } from "../../../common-components/style";
import { Box, Typography } from "@mui/material";

export default function Skills({ skillsData }) {
  return (
    <CommonGrid2
      width="85%"
      display="flex"
      flexDirection="column"
      gap="30px"
      customStyle={{
        scrollMarginTop: "80px",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        sx={{
          color: "#fff",
          letterSpacing: "1px",
        }}
      >
        Skills & Expertise
      </Typography>

      {/* Grid */}
      <CommonGrid2
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
        gap="24px"
      >
        {skillsData.map((item, index) => (
          <CommonGrid2
            key={index}
            sx={{
              p: "24px",
              borderRadius: "20px",
              backdropFilter: "blur(12px)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.35s ease",
              cursor: "pointer",

              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "20px",
                padding: "1px",
                background:
                  "linear-gradient(120deg, transparent, #38bdf8, transparent)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                opacity: 0,
                transition: "0.4s",
              },

              "&:hover": {
                transform: "translateY(-10px) scale(1.02)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
              },

              "&:hover::before": {
                opacity: 1,
              },
            }}
          >
            {/* Title */}
            <Typography
              variant="h6"
              sx={{
                color: "#38bdf8",
                fontWeight: 600,
                mb: 2,
              }}
            >
              {item.title}
            </Typography>

            {/* Skills */}
            <CommonGrid2 display="flex" flexDirection="column" gap="14px">
              {item.skills.map((skill, i) => (
                <Box key={i}>

                  {/* Skill Name */}
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "#e2e8f0",
                      mb: "4px",
                    }}
                  >
                    {skill.name}
                  </Typography>

                  {/* Progress Bar */}
                  <Box
                    sx={{
                      height: "6px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.08)",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: `${skill.level}%`,
                        height: "100%",
                        borderRadius: "10px",
                        background:
                          "linear-gradient(90deg, #38bdf8, #6366f1)",
                        transition: "width 0.6s ease",
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </CommonGrid2>
          </CommonGrid2>
        ))}
      </CommonGrid2>
    </CommonGrid2>
  );
}

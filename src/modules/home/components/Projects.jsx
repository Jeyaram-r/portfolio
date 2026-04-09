import React from "react";
import { CommonGrid2 } from "../../../common-components/style";
import { Button, Typography } from "@mui/material";
export default function Project({ projects }) {
  return (
    <CommonGrid2 width={"80%"}
      id="projects"
      customStyle={{
        scrollMarginTop: "100px",
      }}
    >
      <Typography variant="h4" fontWeight={700} sx={{ color: "#fff", textAlign: "center", marginBottom: "10px" }}>
        My Projects
      </Typography>

      <CommonGrid2
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          alignItems: "stretch",
        }}

      >
        {projects.map((p, i) => (
          <CommonGrid2
            key={i}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "#1e293b",
              borderRadius: "18px",
              overflow: "hidden",
              minHeight: "520px", // 🔥 ensures equal height
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
              },
            }}
          >
            {/* IMAGE */}
            <CommonGrid2
              sx={{
                width: "100%",
                height: "180px",
                background: "#0f172a",
              }}
            >
              <img
                src={p.image}
                alt={p.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  e.target.src = "/fallback.png";
                }}
              />
            </CommonGrid2>

            {/* BODY */}
            <CommonGrid2
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                padding: "16px",
                gap: "12px",
              }}
            >
              {/* TITLE */}
              <Typography
                variant="h6"
                sx={{ color: "#38bdf8", fontWeight: 600 }}
              >
                {p.name}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                variant="body2"
                sx={{
                  color: "#cbd5e1",
                  lineHeight: 1.6,
                  flexGrow: 1, // 🔥 pushes buttons down evenly
                }}
              >
                {p.description}
              </Typography>

              {/* TECH */}
              <CommonGrid2
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {p.tech.map((t, idx) => (
                  <Typography
                    key={idx}
                    variant="caption"
                    sx={{
                      padding: "4px 10px",
                      borderRadius: "20px",
                      background: "rgba(56,189,248,0.15)",
                      color: "#e2e8f0",
                      border: "1px solid rgba(56,189,248,0.3)",
                    }}
                  >
                    {t}
                  </Typography>
                ))}
              </CommonGrid2>

              {/* BUTTONS */}
              <CommonGrid2
                sx={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <Button
                  component="a"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  sx={{
                    backgroundColor: "#94a3b8",
                    color: "#fff",
                    textTransform: "none",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#0ea5e9",
                    },
                  }}
                >
                  GitHub
                </Button>

                {p.live && (
                  <Button
                    component="a"
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    sx={{
                      backgroundColor: "#38bdf8",
                      color: "#fff",
                      textTransform: "none",
                      borderRadius: "10px",
                      "&:hover": {
                        backgroundColor: "#0ea5e9",
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                )}
              </CommonGrid2>
            </CommonGrid2>
          </CommonGrid2>
        ))}
      </CommonGrid2>

      <CommonGrid2 className="projects-footer">
        <a
          href="https://github.com/Jeyaram-r?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 24px",
            background: "#38bdf8",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: 600,
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#0ea5e9",
            },
          }}
        >
          View all projects on GitHub →
        </a>
      </CommonGrid2>
    </CommonGrid2>
  );
}

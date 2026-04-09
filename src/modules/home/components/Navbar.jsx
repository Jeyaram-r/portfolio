import { useState } from "react";
import { Typography, Drawer, IconButton, List, ListItem, ListItemText, Divider, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { CommonGrid2 } from "../../../common-components/style";
import { useMediaQuery, useTheme } from "@mui/material";

const navItems = ["About", "Education", "Projects", "Contact"];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavClick = () => setDrawerOpen(false);

  return (
    <>
      <CommonGrid2
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={isMobile ? "12px 20px" : "16px 40px"}
        width="100%"
        position="sticky"
        top="0"
        backgroundColor="#0f1724"
        zIndex={1000}
        customStyle={{
          boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
          boxSizing: "border-box",
        }}
      >
        {/* BRAND */}
        <Typography fontSize={isMobile ? 18 : 22} fontWeight={700} color="#fff">
          Jeyaram R
        </Typography>

        {isMobile ? (
          /* ── Mobile: hamburger button ── */
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ color: "#fff", padding: "6px" }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          /* ── Desktop: marquee + nav links ── */
          <CommonGrid2
            display="flex"
            gap="24px"
            alignItems="center"
            customStyle={{ flex: 1, marginLeft: "32px", overflow: "hidden" }}
          >
            <Box sx={{ flex: 1, overflow: "hidden" }}>
              <marquee behavior="scroll" direction="left" style={{ color: "#94a3b8", fontSize: 14 }}>
                Welcome to my portfolio! Explore my projects, skills, and experience as a passionate frontend developer. Let's build something amazing together! 🚀
              </marquee>
            </Box>

            <CommonGrid2 display="flex" gap="24px" alignItems="center" customStyle={{ flexShrink: 0 }}>
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    textDecoration: "none",
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: 500,
                    transition: "color 0.3s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#38bdf8")}
                  onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                >
                  {item}
                </a>
              ))}
            </CommonGrid2>
          </CommonGrid2>
        )}
      </CommonGrid2>

      {/* ── Mobile Drawer ── */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            background: "#0f1724",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Typography fontSize={18} fontWeight={700} color="#fff">
            Jeyaram R
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#94a3b8" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Marquee inside drawer */}
        <Box sx={{ padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <marquee behavior="scroll" direction="left" style={{ color: "#64748b", fontSize: 12 }}>
            Frontend Developer · React · React Native · TypeScript · MUI 🚀
          </marquee>
        </Box>

        {/* Nav Links */}
        <List sx={{ padding: "12px 0", flex: 1 }}>
          {navItems.map((item, index) => (
            <ListItem
              key={item}
              component="a"
              href={`#${item.toLowerCase()}`}
              onClick={handleNavClick}
              sx={{
                padding: "14px 24px",
                textDecoration: "none",
                color: "#cbd5e1",
                fontSize: 16,
                fontWeight: 500,
                borderLeft: "3px solid transparent",
                transition: "all 0.25s ease",
                animationDelay: `${index * 0.05}s`,
                "&:hover": {
                  color: "#38bdf8",
                  borderLeftColor: "#38bdf8",
                  backgroundColor: "rgba(56,189,248,0.06)",
                  paddingLeft: "30px",
                },
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "inherit",
                }}
              />
            </ListItem>
          ))}
        </List>

        {/* Drawer Footer */}
        <Divider sx={{ borderColor: "rgba(255,255,255,0.06)" }} />
        <Box sx={{ padding: "16px 24px" }}>
          <Typography fontSize={12} color="#475569" textAlign="center">
            © 2024 Jeyaram R · All rights reserved
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
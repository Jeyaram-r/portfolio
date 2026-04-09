import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
  Snackbar,
  Alert,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CommonGrid2, CustomDiv } from "../../../common-components/style";

export default function Contact() {
  const form = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_r36my2f",
        "template_to31fb9",
        form.current,
        "RKcrZkSA2MtniZW4S"
      )
      .then(() => {
        setFormValues({ user_name: "", user_email: "", message: "" });
        setSnackbar({
          open: true,
          message: "Message sent successfully! I'll get back to you soon. 🎉",
          severity: "success",
        });
      })
      .catch((err) => {
        console.error(err);
        setSnackbar({
          open: true,
          message: "Failed to send message. Please try again.",
          severity: "error",
        });
      })
      .finally(() => setLoading(false));
  };

  const handleSnackbarClose = (_, reason) => {
    if (reason === "clickaway") return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ color: "#38bdf8", fontSize: isMobile ? 20 : 24 }} />,
      label: "Email",
      content: (
        <Link href="mailto:jeyaramr8652@gmail.com" underline="hover" sx={{ color: "#38bdf8", fontSize: isMobile ? 13 : 15, wordBreak: "break-all" }}>
          jeyaramr8652@gmail.com
        </Link>
      ),
    },
    {
      icon: <PhoneIcon sx={{ color: "#38bdf8", fontSize: isMobile ? 20 : 24 }} />,
      label: "Phone",
      content: (
        <Typography sx={{ fontSize: isMobile ? 13 : 15, color: "#cbd5e1" }}>
          +91 6380826142
        </Typography>
      ),
    },
    {
      icon: <LinkedInIcon sx={{ color: "#38bdf8", fontSize: isMobile ? 20 : 24 }} />,
      label: "LinkedIn",
      content: (
        <Link href="https://www.linkedin.com/in/jeyaramr07/" target="_blank" underline="hover" sx={{ color: "#38bdf8", fontSize: isMobile ? 13 : 15, wordBreak: "break-all" }}>
          linkedin.com/in/jeyaramr07
        </Link>
      ),
    },
    {
      icon: <LocationOnIcon sx={{ color: "#38bdf8", fontSize: isMobile ? 20 : 24 }} />,
      label: "Location",
      content: (
        <Typography sx={{ fontSize: isMobile ? 13 : 15, color: "#cbd5e1" }}>
          Tenkasi, Tamil Nadu
        </Typography>
      ),
    },
  ];

  return (
    <CustomDiv
      id="contact"
      display="flex"
      justifyContent="center"
      customStyle={{
        scrollMarginTop: "100px",
        padding: isMobile ? "24px 16px" : "48px 24px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box width="100%" maxWidth="100%" >

        {/* Title */}
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight={700}
          textAlign="center"
          mb={isMobile ? 3 : 5}
          sx={{ color: "#fff" }}
        >
          Contact Me
        </Typography>

        {/* Cards wrapper */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "20px" : "28px",
            alignItems: "stretch",
          }}
        >
          {/* ── LEFT: Form ── */}
          <Box sx={{ flex: isMobile ? "unset" : "1 1 50%" }}>
            <Paper
              elevation={0}
              sx={{
                p: isMobile ? 2.5 : 4,
                borderRadius: 3,
                background: "#1e293b",
                border: "1px solid rgba(255,255,255,0.08)",
                height: "100%",
              }}
            >
              <Typography
                variant="h6"
                mb={2.5}
                sx={{ color: "#fff", fontSize: isMobile ? 16 : 18 }}
              >
                Send a Message
              </Typography>

              <form ref={form} onSubmit={sendEmail}>
                <Stack spacing={2}>
                  <TextField
                    label="Your Name"
                    name="user_name"
                    value={formValues.user_name}
                    onChange={handleChange}
                    fullWidth
                    required
                    size={isMobile ? "small" : "medium"}
                    sx={fieldStyle}
                  />
                  <TextField
                    label="Email"
                    name="user_email"
                    type="email"
                    value={formValues.user_email}
                    onChange={handleChange}
                    fullWidth
                    required
                    size={isMobile ? "small" : "medium"}
                    sx={fieldStyle}
                  />
                  <TextField
                    label="Message"
                    name="message"
                    multiline
                    rows={isMobile ? 4 : 5}
                    value={formValues.message}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={fieldStyle}
                  />

                  <Button
                    variant="contained"
                    size={isMobile ? "medium" : "large"}
                    type="submit"
                    disabled={loading}
                    fullWidth
                    sx={{
                      mt: 1,
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: isMobile ? 14 : 16,
                      background: "#38bdf8",
                      color: "#0f172a",
                      "&:hover": { background: "#0ea5e9" },
                      "&:disabled": { background: "#334155", color: "#64748b" },
                    }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Box>

          {/* ── RIGHT: Contact Info ── */}
          <Box sx={{ flex: isMobile ? "unset" : "1 1 50%" }}>
            <Paper
              elevation={0}
              sx={{
                p: isMobile ? 2.5 : 4,
                borderRadius: 3,
                background: "#1e293b",
                border: "1px solid rgba(255,255,255,0.08)",
                height: "100%",
              }}
            >
              <Typography
                variant="h6"
                mb={2.5}
                sx={{ color: "#fff", fontSize: isMobile ? 16 : 18 }}
              >
                Contact Information
              </Typography>

              <Stack spacing={isMobile ? 2 : 3}>
                {contactInfo.map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      background: "rgba(56,189,248,0.05)",
                      border: "1px solid rgba(56,189,248,0.12)",
                      transition: "border-color 0.3s",
                      "&:hover": { borderColor: "#38bdf8" },
                    }}
                  >
                    <Box mt="2px">{item.icon}</Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 11,
                          color: "#64748b",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          mb: "2px",
                        }}
                      >
                        {item.label}
                      </Typography>
                      {item.content}
                    </Box>
                  </Box>
                ))}
              </Stack>

              {/* Availability badge */}
              <Box
                sx={{
                  mt: 3,
                  padding: "10px 16px",
                  borderRadius: "10px",
                  background: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    width: 9, height: 9, borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 6px #22c55e",
                    flexShrink: 0,
                  }}
                />
                <Typography sx={{ fontSize: 13, color: "#86efac" }}>
                  Available for freelance & full-time opportunities
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          vertical: isMobile ? "top" : "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          variant="filled"
          sx={{
            width: isMobile ? "90vw" : "auto",
            fontSize: isMobile ? 13 : 14,
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      
    </CustomDiv>
  );
}

// Shared TextField dark theme styles
const fieldStyle = {
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    borderRadius: "10px",
    "& fieldset": { borderColor: "rgba(255,255,255,0.12)" },
    "&:hover fieldset": { borderColor: "#38bdf8" },
    "&.Mui-focused fieldset": { borderColor: "#38bdf8" },
  },
  "& .MuiInputLabel-root": { color: "#64748b" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#38bdf8" },
};
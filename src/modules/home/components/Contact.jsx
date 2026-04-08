import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Link
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CommonGrid2, CustomDiv } from "../../../common-components/style";

export default function Contact() {
  emailjs.init("RKcrZkSA2MtniZW4S");

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    // replace placeholders with your EmailJS values
    emailjs.sendForm("service_r36my2f", "template_to31fb9", form.current, "RKcrZkSA2MtniZW4S")
      .then(() => alert("Message sent!"))
      .catch(err => { console.error(err); alert("Failed to send."); });
  }

  return (
    <CustomDiv
      id="contact"
      className="section"
      display="flex"
      justifyContent="center"
      padding={4}
      customStyle={{
        scrollMarginTop: "80px",
      }}
    >
      <Box width="100%" maxWidth="1100px">

        {/* Title */}
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          Contact Me
        </Typography>

        <CommonGrid2 container spacing={4} alignItems="stretch" background="transparent">

          {/* LEFT - FORM */}
          <CommonGrid2 item xs={12} md={2} width={"50%"}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h6" mb={2}>
                Send a Message
              </Typography>

              <form ref={form} onSubmit={sendEmail}>
                <Stack spacing={2}>
                  <TextField
                    label="Your Name"
                    name="user_name"
                    fullWidth
                    required
                  />
                  <TextField
                    label="Email"
                    name="user_email"
                    type="email"
                    fullWidth
                    required
                  />
                  <TextField
                    label="Message"
                    name="message"
                    multiline
                    rows={5}
                    fullWidth
                    required
                  />

                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{
                      mt: 1,
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: 600
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Paper>
          </CommonGrid2>

          {/* RIGHT - CONTACT INFO */}
          <CommonGrid2 item xs={12} md={6} width={"40%"}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h6" mb={2}>
                Contact Information
              </Typography>

              <Stack spacing={2}>

                <Stack direction="row" spacing={2} alignItems="center">
                  <EmailIcon color="primary" />
                  <Typography>
                    <strong>Email:</strong>{" "}
                    <Link href="mailto:jeyaramr8652@gmail.com" underline="hover">
                      jeyaramr8652@gmail.com
                    </Link>
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <PhoneIcon color="primary" />
                  <Typography>
                    <strong>Phone:</strong> +91 6380826142
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <LinkedInIcon color="primary" />
                  <Typography>
                    <strong>LinkedIn:</strong>{" "}
                    <Link
                      href="https://www.linkedin.com/in/jeyaramr07/"
                      target="_blank"
                      underline="hover"
                    >
                      linkedin.com/in/jeyaramr07
                    </Link>
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <LocationOnIcon color="primary" />
                  <Typography>
                    <strong>Location:</strong> Tenkasi, Tamil Nadu
                  </Typography>
                </Stack>

              </Stack>
            </Paper>
          </CommonGrid2>

        </CommonGrid2>
      </Box>
    </CustomDiv>


  );
}

import React from "react";
import { CommonGrid2, CustomDiv } from "../common-components/style";
import ProfilePic from "../assets/images/Profile.jpeg";
import { Button, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import AIFluency from "../assets/images/AI_Fluency.png";
import AWS from "../assets/images/AWS.png";
import Claude from "../assets/images/Claude_Code_in_Action.png";
import CloudeGoogle from "../assets/images/Cloud_Google.png";
import UIDev from "../assets/images/UI_Developer.png";
import FrontEnd from "../assets/images/Front_end_Certificate.png";
import { Box } from "@mui/material";
import CropRecommendation from "../assets/images/crop-recommendation.png";
import Helmet from "../assets/images/helmetImg.png";
import HotelApp from "../assets/images/Hotel-App.jpeg";
export default function Hero() {
  const educationData = [
    {
      title: "B.E Computer Science Engineering",
      institution: "Kamaraj College of Engineering and Technology, Virudhunagar",
      year: "2022 – 2026",
      info: "Current CGPA: 8.2",
      icon: <SchoolIcon />,
    },
    {
      title: "Higher Secondary (HSC)",
      institution: "SMA Matriculation Higher Secondary School",
      year: "2022",
      info: "Percentage: 87%",
      icon: <MenuBookTwoToneIcon />,
    },
    {
      title: "Secondary School (SSLC)",
      institution: "SMA Matriculation Higher Secondary School",
      year: "2020",
      info: "Percentage: 89%",
      icon: <MenuBookTwoToneIcon />,
    },
  ];
  const skillsData = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
    },
    {
      title: "Mobile Development",
      skills: ["React Native", "TypeScript", "Expo", "Flutter"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "PHP"],
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Version Control"],
    },
    {
      title: "Other Skills",
      skills: ["UI/UX", "RPA Basics", "Problem-Solving"],
    },
  ];
  const projects = [
    {
      name: "Crop Recomendation and Guidance",
      description:
        "This project is a web-based system that helps farmers select the best crop based on soil fertility and environmental conditions. Users can enter soil details such as pH, NPK values, and moisture to get suitable crop recommendations using machine learning. The system also provides market price information to support better farming decisions. It improves productivity through data-driven agriculture.",
      image: CropRecommendation,
      github: "https://github.com/Jeyaram-r/crop_predict_soil_fertility",
      live: "https://crop-predict-soil-fertility.onrender.com/",
      tech: ["Python", "Django", "Render", "Machine Learning"],
    },
    {
      name: "Helmet Shop (MERN)",
      description:
        "A full-stack e-commerce web application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse helmet products, view details, and add items to a shopping cart. The app includes a secure checkout process and user-friendly interface. An admin panel is available for managing products and orders. Designed to deliver a smooth and responsive online shopping experience.",
      image: Helmet,
      github: "https://github.com/Jeyaram-r/helmet-shop",

      tech: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      name: "Hotel App",
      description:
        "A Hotel Booking and Ordering App developed using Flutter, providing a smooth and responsive cross-platform user experience. The application integrates Firebase Authentication for secure user login and registration. Users can browse hotel details, view menus, and place orders directly through the app. All order data is stored and managed in Firebase Firestore for real-time updates. The system ensures efficient data handling and a seamless booking and ordering process. It is designed with a user-friendly interface to enhance customer convenience and engagement.",
      image: HotelApp,
      github: "https://github.com/Jeyaram-r/sriram",
      tech: ["Flutter", "Firebase"],
    },

  ];
  const certificateData = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "AWS",
      image: AWS
    },
    {
      title: "Front End Developer(React)",
      issuer: "HackerRank",
      image: FrontEnd
    },
    {
      title: "UI Developer",
      issuer: "Infosys Springboard",
      image: UIDev
    },
    {
      title: "Claude Code in Action",
      issuer: "Anthropic",
      image: Claude
    },
    {
      title: "AI Fluency and Frameworks",
      issuer: "Anthropic",
      image: AIFluency
    },
    {
      title: " Google Cloud career readliness Cloud Digital Leader track",
      issuer: "Google Cloud",
      image: CloudeGoogle
    },
  ];
  return (
    <CustomDiv
      width="100%"
      display="flex"
      customStyle={{
        justifyContent: "center",
        alignItems: "center",

        textAlign: "center",
        flexDirection: "column"
      }}
      gap="40px"
    >
      <header className="navbar">
        <div className="brand">Jeyaram</div>
        <nav className="links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      {/* Profile Section */}
      <CommonGrid2
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="20px"
        marginTop={"50px"}
      >
        <h1 style={{ fontSize: "32px", margin: 0 }}>
          Hi, I'm Jeyaram R👋
        </h1>
        <img
          src={ProfilePic}
          alt="Profile"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <Typography
          fontSize={24}
          fontWeight={600}
        >
          Front End Developer || Devops Engineer
        </Typography>



      </CommonGrid2>

      {/* Buttons */}
      <CustomDiv style={{ marginTop: "30px" }}>
        <CommonGrid2
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
          }}
        >
          <a
            href="#projects"
            style={{
              padding: "12px 24px",
              background: "#38bdf8",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            View My Work
          </a>

          <a
            href="#contact"
            style={{
              padding: "12px 24px",
              border: "2px solid #38bdf8",
              color: "#38bdf8",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Contact Me
          </a>
        </CommonGrid2>
      </CustomDiv>
      <CommonGrid2
        width={"80%"}
        height={"auto"}
        textAlign={"center"}
      >
        <Typography variant="h4" fontWeight={700}>About Me</Typography>
        <Typography style={{ color: "#94a3b8", marginTop: 8 }}>
          Frontend Developer with strong knowledge of modern web technologies including React.js, React Native, Redux
          Toolkit, and TypeScript. Focused on building responsive and user-friendly applications using component-based
          architecture and reusable UI design. Familiar with React 18 and REST API integration. Passionate about writing
          clean code, optimizing performance, and continuously learning new technologies </Typography>
      </CommonGrid2>
      <CommonGrid2
        width="50%"
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        gap="20px"
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

      {/* Skills Section */}
      <CommonGrid2
        width="80%"
        display="flex"
        flexDirection="column"
        gap="25px"
      >
        {/* Title */}
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ color: "#fff", textAlign: "center", marginBottom: "10px" }}
        >
          Skills
        </Typography>

        {/* Grid */}
        <CommonGrid2
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          gap="20px"
        >
          {skillsData.map((item, index) => (
            <CommonGrid2
              key={index}
              padding="20px"
              borderRadius="16px"
              display="flex"
              flexDirection="column"
              gap="12px"
              backgroundColor="#0b1220"
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
              {/* Title */}
              <Typography
                variant="h6"
                sx={{ color: "#38bdf8", fontWeight: 600 }}
              >
                {item.title}
              </Typography>

              {/* Skills Chips */}
              <CommonGrid2 display="flex" flexWrap="wrap" gap="8px">
                {item.skills.map((skill, i) => (
                  <Typography
                    key={i}
                    sx={{
                      fontSize: "13px",
                      padding: "6px 10px",
                      borderRadius: "20px",
                      background: "rgba(56,189,248,0.15)",
                      color: "#e2e8f0",
                      border: "1px solid rgba(56,189,248,0.3)",
                    }}
                  >
                    {skill}
                  </Typography>
                ))}
              </CommonGrid2>
            </CommonGrid2>
          ))}
        </CommonGrid2>
      </CommonGrid2>
      {/* Projects Section */}
      <CommonGrid2 width={"80%"}>
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
          >
            View all projects on GitHub →
          </a>
        </CommonGrid2>
      </CommonGrid2>
      {/* Certifications Section */}
      <CommonGrid2
        width="80%"
        display="flex"
        flexDirection="column"
        gap="25px"
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
      <CommonGrid2>
        <Typography>
          My Journey
        </Typography>
      </CommonGrid2>
      <CommonGrid2>
        <Typography>
          Work Experience
        </Typography>
      </CommonGrid2>
      <CommonGrid2>
        <Typography>
          Hobbies & Interests
        </Typography>
      </CommonGrid2>
    </CustomDiv>
  );
}
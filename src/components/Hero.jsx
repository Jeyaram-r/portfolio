import React from "react";
import { CommonGrid2, CustomDiv } from "../common-components/style";
import ProfilePic from "../assets/images/Profile.jpeg";
import { Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
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
      title: "Backend",
      skills: ["Node.js", "Express.js", "PHP"],
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      title: "Other Skills",
      skills: ["UI/UX", "RPA Basics", "Problem-Solving"],
    },
  ];
  const projects = [
  {
    name: "Helmet Shop (MERN)",
    description:
      "Full-stack e-commerce app built with React, Node.js, Express and MongoDB. Features product listing, cart, checkout and admin panel.",
    image: "/public/images/helmetshop.png",
    github: "https://github.com/jeyaramr/mern_healmet-shop-main",
    live: "https://helmetshop.vercel.app",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "E-Learning Dashboard",
    description:
      "Personalized learning platform with quizzes, resources and progress tracking built using PHP & MySQL.",
    image: "/public/images/elearning.png",
    github: "https://github.com/jeyaramr/elearning-dashboard",
    tech: ["PHP", "MySQL", "JavaScript"],
  },
  {
    name: "Crop Recomendation and Guidance",
    description:
      "This project is a web-based system that helps farmers select the best crop based on soil fertility and environmental conditions. Users can enter soil details such as pH, NPK values, and moisture to get suitable crop recommendations using machine learning. The system also provides market price information to support better farming decisions. It improves productivity through data-driven agriculture.",
    image: "/public/images/fitness.png",
    github: "https://github.com/Jeyaram-r/crop_predict_soil_fertility",
    live: "https://crop-predict-soil-fertility.onrender.com/",
    tech: ["Python", "Django", "Render","Machine Learning"],
  },
];
const certificateData = [
  {
    title: "Zoho CRM Training",
    issuer: "Zoho",
  },
  {
    title: "Internship – Web Development",
    issuer: "Internship Completion",
  },
  {
    title: "RPA Training",
    issuer: "Robotic Process Automation Basics",
  },
  {
    title: "Python Programming (Beginner)",
    issuer: "Course Completion",
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
      {/* Profile Section */}
      <CommonGrid2
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="20px"
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
        width="100%"
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
      <CommonGrid2 className="projects-container">
        <Typography variant="h4" sx={{ color: "#fff", textAlign: "center", marginBottom: "10px" }}>
          My Projects
        </Typography>

        <CommonGrid2 className="projects-grid">
          {projects.map((p, i) => (
            <article key={i} className="project-card">
              {p.image ? (
                <CommonGrid2 className="project-image-wrap">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="project-image"
                    onError={(e) => {
                      e.target.style.display = "none";
                      // optional: e.target.parentNode.classList.add('no-image');
                    }}
                  />
                </CommonGrid2>
              ) : null}

              <CommonGrid2 className="project-body">
                <Typography variant="h6" sx={{ color: "#38bdf8", fontWeight: 600 }}>
                  {p.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#cbd5e1" }}>
                  {p.description}
                </Typography>

                <CommonGrid2 className="project-tech">
                  {p.tech.map((t, idx) => (
                    <Typography
                      key={idx}
                      variant="caption"
                      sx={{
                        padding: "4px 8px",
                        borderRadius: "16px",
                        background: "rgba(56,189,248,0.15)",
                        color: "#e2e8f0",
                        border: "1px solid rgba(56,189,248,0.3)",
                      }}
                    >
                      {t}
                    </Typography>
                  ))}
                </CommonGrid2>

                <CommonGrid2 className="project-links">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    GitHub
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                  )}
                </CommonGrid2>
              </CommonGrid2>
            </article>
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
      width="100%"
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
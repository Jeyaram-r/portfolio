import ComputerIcon from '@mui/icons-material/Computer';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import SchoolIcon from '@mui/icons-material/School';
import { Typography } from "@mui/material";
import { CommonGrid2, CustomDiv } from "../../common-components/style";
import AIFluency from "../../assets/images/AI_Fluency.png";
import AWS from "../../assets/images/AWS.png";
import Claude from "../../assets/images/Claude_Code_in_Action.png";
import CloudeGoogle from "../../assets/images/Cloud_Google.png";
import CropRecommendation from "../../assets/images/crop-recommendation.png";
import crop from "../../assets/images/crop.jpeg";
import FrontEnd from "../../assets/images/Front_end_Certificate.png";
import Helmet from "../../assets/images/helmetImg.png";
import HotelApp from "../../assets/images/Hotel-App.jpeg";
import UIDev from "../../assets/images/UI_Developer.png";
// import Certifications from "../home/components/Certificates";
// import Education from "../home/components/Education";
// import Projects from "../home/components/Projects";
// import Skills from "../home/components/Skills";
// import Contact from "../home/components/Contact";
// import About from './components/About';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
// import WorkExperience from './components/WorkExperience';
import { useEffect, useRef, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import React, { lazy, Suspense } from "react";
import ImageWithLoader from "../../common-components/ImageWithLoader";
const Certifications = lazy(() =>
    import("../home/components/Certificates")
);
const Education = lazy(() =>
    import("../home/components/Education")
);
const Projects = lazy(() =>
    import("../home/components/Projects")
);
const Skills = lazy(() =>
    import("../home/components/Skills")
);
const Contact = lazy(() =>
    import("../home/components/Contact")
);
const About = lazy(() =>
    import("./components/About")
);
const WorkExperience = lazy(() =>
    import("./components/WorkExperience")
);
const Navbar = lazy(() =>
    import("./components/Navbar")
);
const Loader = () => (
    <Typography
        align="center"
        sx={{ color: "#38bdf8", padding: "20px" }}
    >
        Loading...
    </Typography>
);
function useScrollAnim(delay = 0) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setVisible(true), delay);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return [ref, visible];
}
function AnimatedSection({ children, delay = 0, direction = "up", style = {} }) {
    const [ref, visible] = useScrollAnim(delay);

    const transforms = {
        up: "translateY(36px)",
        left: "translateX(-36px)",
        right: "translateX(36px)",
        scale: "translateY(24px) scale(0.96)",
    };

    return (
        <div
            ref={ref}
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                opacity: visible ? 1 : 0,
                transform: visible ? "translate(0) scale(1)" : transforms[direction],
                transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
                ...style,
            }}
        >
            {children}
        </div>
    );
}
export default function Hero() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));
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
            skills: [
                { name: "React", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "MUI", level: 80 },
                { name: "HTML", level: 85 },
                { name: "CSS", level: 85 },
            ],
        },
        {
            title: "Mobile Development",
            skills: [
                { name: "React Native", level: 75 },
                { name: "TypeScript", level: 75 },
                { name: "Flutter", level: 70 },
                { name: "Expo", level: 70 },

            ],
        },
        {
            title: "Programming",
            skills: [
                { name: "Java", level: 80 },
                { name: "Python", level: 70 },
                { name: "C++", level: 60 },
            ],
        },
        {
            title: "Database",
            skills: [
                { name: "SQL", level: 90 },
                { name: "MongoDB", level: 85 },
            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Express.js", level: 80 },
                { name: "PHP", level: 70 },
            ],
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "Git", level: 90 },
                { name: "GitHub", level: 85 },
                { name: "Version Control", level: 80 },
            ],
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
    const experienceData = [
        {
            year: "2025-present",
            position: "Frontend Developer",
            company: "Icanio Technologies",
            location: "Tirunelveli, India",
            responsibilities: "As a Frontend Developer at Icanio Technologies, I design and develop responsive, user-centric web applications using modern frameworks such as React.js. I collaborate closely with designers and backend developers to deliver seamless and scalable digital solutions. My role involves building reusable components, optimizing application performance, and ensuring cross-browser compatibility. I focus on writing clean, maintainable code while adhering to industry best practices. Through this experience, I have strengthened my expertise in UI/UX development, state management, and API integration.",
            techStack: ["React", "MUI", "JavaScript", "REST API"],
        },
        {
            year: "2024-25",
            position: "FullStack Developer Intern",
            company: "Vetri Technologies",
            location: "Surandai, Tenkasi, India",
            responsibilities: "As a Full Stack Developer Intern at Vetri Technologies, I gained hands-on experience in developing and deploying dynamic web applications using the MERN stack. I contributed to both frontend and backend development, creating responsive user interfaces with React and building robust RESTful APIs using Node.js and Express. My responsibilities included integrating databases with MongoDB, implementing authentication features, and optimizing application performance. I collaborated with senior developers in an agile environment, enhancing my problem-solving and debugging skills. This internship strengthened my understanding of end-to-end development and industry best practices in scalable software design.",
            techStack: ["React", "Node.js", "Express", "MongoDB"],
        },

    ];
    const [heroVisible, setHeroVisible] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setHeroVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <CustomDiv>
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

                <CommonGrid2
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    padding="16px 40px"
                    width="100%"
                    position="sticky"
                    top="0"
                    backgroundColor="#0f1724"
                    zIndex={1000}
                    customStyle={{
                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                    }}
                ><Suspense fallback={<Loader />}>
                        <Navbar />
                    </Suspense>

                </CommonGrid2>


                {/* Profile Section */}
                {/* ── Profile Section ── */}
                <CommonGrid2
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    gap={isMobile ? "12px" : "16px"}
                    customStyle={{
                        opacity: heroVisible ? 1 : 0,
                        transform: heroVisible ? "translateY(0)" : "translateY(40px)",
                        transition: "opacity 0.8s ease, transform 0.8s ease",
                        padding: isMobile ? "0 16px" : "0 24px",
                        width: "100%",
                        boxSizing: "border-box",
                    }}
                >
                    {/* PROFILE IMAGE */}
                  <ImageWithLoader
    src={crop}
    alt="Profile"
    width={isMobile ? "140px" : "200px"}
    height={isMobile ? "140px" : "200px"}
    borderRadius="10%"
    style={{
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        transform: heroVisible ? "scale(1)" : "scale(0.88)",
        transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
    }}
/>

                    {/* ROLE SECTION */}
                    <CommonGrid2
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={isMobile ? "6px" : "10px"}
                        customStyle={{
                            flexWrap: "wrap",
                            textAlign: "center",
                            padding: isMobile ? "0 8px" : "0",
                        }}
                    >
                        <Typography
                            fontSize={isMobile ? 22 : isTablet ? 28 : 34}
                            fontWeight={700}
                            style={{
                                margin: 0,
                                opacity: heroVisible ? 1 : 0,
                                transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                                transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
                                whiteSpace: isMobile ? "normal" : "nowrap",
                                textAlign: "center",
                            }}
                        >
                            Hi, I'm Jeyaram R 👋
                        </Typography>

                        <ComputerIcon sx={{ fontSize: isMobile ? 20 : 28 }} />

                        <Typography
                            fontSize={isMobile ? 18 : isTablet ? 24 : 30}
                            fontWeight={700}
                            style={{
                                opacity: heroVisible ? 1 : 0,
                                transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                                transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
                                color: "#38bdf8",
                            }}
                        >
                            Frontend Developer
                        </Typography>
                    </CommonGrid2>

                    {/* TAGLINE */}
                    <Typography
                        fontSize={isMobile ? 13 : isTablet ? 14 : 16}
                        color="#94a3b8"
                        style={{
                            textAlign: "center",
                            maxWidth: isMobile ? "95%" : isTablet ? "85%" : "75%",
                            lineHeight: 1.7,
                            opacity: heroVisible ? 1 : 0,
                            transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
                        }}
                    >
                        Frontend Developer with strong knowledge of modern web technologies including React.js,
                        React Native, Redux Toolkit, and TypeScript. Focused on building responsive and
                        user-friendly applications using component-based architecture and reusable UI design.
                        Familiar with React 18 and REST API integration. Passionate about writing clean code,
                        optimizing performance, and continuously learning new technologies.
                    </Typography>
                </CommonGrid2>
                <CustomDiv
                    style={{
                        marginTop: isMobile ? "16px" : "30px",
                        opacity: heroVisible ? 1 : 0,
                        transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.7s ease 0.65s, transform 0.7s ease 0.65s",
                        width: "100%",
                        boxSizing: "border-box",
                        padding: isMobile ? "0 24px" : "0",
                    }}
                >
                    <CommonGrid2
                        style={{
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            gap: isMobile ? "12px" : "15px",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href="#projects"
                            style={{
                                padding: isMobile ? "11px 0" : "12px 24px",
                                width: isMobile ? "100%" : "auto",
                                textAlign: "center",
                                background: "#38bdf8",
                                color: "#0f172a",
                                borderRadius: "8px",
                                textDecoration: "none",
                                fontWeight: "600",
                                fontSize: isMobile ? 14 : 16,
                                boxSizing: "border-box",
                                display: "block",
                                transition: "background 0.3s",
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.background = "#0ea5e9")}
                            onMouseOut={(e) => (e.currentTarget.style.background = "#38bdf8")}
                        >
                            View My Work
                        </a>

                        <a
                            href="#contact"
                            style={{
                                padding: isMobile ? "11px 0" : "12px 24px",
                                width: isMobile ? "100%" : "auto",
                                textAlign: "center",
                                border: "2px solid #38bdf8",
                                color: "#38bdf8",
                                borderRadius: "8px",
                                textDecoration: "none",
                                fontWeight: "600",
                                fontSize: isMobile ? 14 : 16,
                                boxSizing: "border-box",
                                display: "block",
                                transition: "background 0.3s, color 0.3s",
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = "#38bdf8";
                                e.currentTarget.style.color = "#0f172a";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#38bdf8";
                            }}
                        >
                            Contact Me
                        </a>
                    </CommonGrid2>
                </CustomDiv>
                <Suspense fallback={<Loader />}>
                    <AnimatedSection direction="up" delay={0}>
                        <About />
                    </AnimatedSection>

                    <AnimatedSection direction="left" delay={0}>
                        <Education educationData={educationData} />
                    </AnimatedSection>

                    <AnimatedSection direction="right" delay={0}>
                        <WorkExperience experienceData={experienceData} />
                    </AnimatedSection>
                    {/* Skills Section */}
                    <AnimatedSection direction="up" delay={0}>
                        <Skills skillsData={skillsData} />
                    </AnimatedSection>
                    {/* Projects Section */}
                    <AnimatedSection direction="scale" delay={0}>
                        <Projects projects={projects} />
                    </AnimatedSection>
                    {/* Certifications Section */}
                    <AnimatedSection direction="up" delay={0}>
                        <Certifications certificateData={certificateData} />
                    </AnimatedSection>
                </Suspense>
            </CustomDiv>
            <Suspense fallback={<Loader />}>
                <Contact />
            </Suspense>
        </CustomDiv>

    );
}
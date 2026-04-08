import React from "react";
import { CommonGrid2, CustomDiv } from "../../../common-components/style";
import { Box, Typography } from "@mui/material";
export default function WorkExperience({ experienceData }) {

    return (
        <CommonGrid2>
            <Box
                width="80%"
                margin="0 auto"
                display="flex"
                flexDirection="column"
                gap="50px"
                id="experience"
            >
                <Typography
                    variant="h4"
                    fontWeight={700}
                    textAlign="center"
                    color="#fff"
                    sx={{ mb: 4 }}
                >
                    Work Experience
                </Typography>

                <Box position="relative" sx={{
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        left: "60px",
                        top: 0,
                        bottom: 0,
                        width: "4px",
                        backgroundColor: "#52b8cf",
                        borderRadius: "2px",
                    }
                }}>
                    {experienceData.map((exp, index) => (
                        <Box
                            key={index}
                            display="flex"
                            alignItems="flex-start"
                            gap={3}
                            mb={10}
                            position="relative"
                        >
                            {/* Duration Circle */}
                            <Box
                                sx={{
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "50%",
                                    backgroundColor: "#238ed1",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#fff",
                                    fontWeight: 700,
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    fontSize: "14px",
                                }}
                            >
                                {exp.year}
                            </Box>

                            {/* Content Card */}
                            <Box ml="100px" p={4} borderRadius="16px" sx={{
                                background: "rgba(99,102,241,0.05)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(99,102,241,0.2)",
                                transition: "all 0.3s ease",
                                cursor: "pointer",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                    boxShadow: "0 15px 40px rgba(0,0,0,0.3)"
                                }
                            }}>
                                <Typography variant="h6" fontWeight={600} color="#238ed1">
                                    {exp.position} @ {exp.company}
                                </Typography>
                                <Typography variant="body2" color="#6b7280" mt={0.5}>
                                    {exp.location}
                                </Typography>
                                <Typography variant="body2" color="#c5c5c5" mt={1}>
                                    {exp.responsibilities}
                                </Typography>
                                {exp.techStack && (
                                    <Box display="flex" flexWrap="wrap" gap="8px" mt={2}>
                                        {exp.techStack.map((tech, i) => (
                                            <Box
                                                key={i}
                                                sx={{
                                                    px: 2,
                                                    py: 0.5,
                                                    borderRadius: "12px",
                                                    backgroundColor: "rgba(99,102,241,0.15)",
                                                    color: "#4f46e5",
                                                    fontSize: "12px",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {tech}
                                            </Box>
                                        ))}
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </CommonGrid2>

    );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects, projectsHeader } from "@/lib/data";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
                        <span className="text-accent">01.</span> {projectsHeader.title}
                    </h2>
                    <p className="text-textMuted max-w-2xl text-lg">
                        {projectsHeader.description}
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                techStack={project.techStack}
                                link={project.link}
                                repoLink={project.link} // Assuming link is repo link for now
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
                        <span className="text-accent">03.</span> Skills & Expertise
                    </h2>
                    <p className="text-textMuted max-w-2xl text-lg">
                        A comprehensive overview of my technical abilities and domain knowledge.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {skills.data.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SkillCard
                                title={skill.title}
                                skills={skill.skills}
                                softwareSkills={skill.softwareSkills}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;

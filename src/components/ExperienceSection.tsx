"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 relative bg-surface/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
                        <span className="text-accent">02.</span> {experience.title}
                    </h2>
                    <p className="text-textMuted max-w-2xl text-lg">
                        {experience.description}
                    </p>
                </motion.div>

                {/* Experience Lists */}
                <div className="space-y-16">
                    {experience.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                            <h3 className="text-2xl font-bold text-textPrimary mb-8 flex items-center gap-3">
                                {section.title}
                                <span className="h-[1px] flex-grow bg-borderSoft" />
                            </h3>

                            <div className="space-y-0">
                                {section.experiences.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <ExperienceCard
                                            title={exp.title}
                                            company={exp.company}
                                            company_url={exp.company_url}
                                            duration={exp.duration}
                                            location={exp.location}
                                            description={exp.description}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;

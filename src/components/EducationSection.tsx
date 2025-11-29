"use client";

import React from "react";
import { motion } from "framer-motion";
import { degrees } from "@/lib/data";
import EducationCard from "./EducationCard";

const EducationSection = () => {
    return (
        <section id="education" className="py-24 relative bg-surface/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
                        <span className="text-accent">03.</span> Education
                    </h2>
                    <p className="text-textMuted max-w-2xl text-lg">
                        My academic background and qualifications.
                    </p>
                </motion.div>

                {/* Education List */}
                <div className="space-y-0">
                    {degrees.degrees.map((degree, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <EducationCard
                                title={degree.title}
                                subtitle={degree.subtitle}
                                duration={degree.duration}
                                descriptions={degree.descriptions}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;

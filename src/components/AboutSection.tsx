"use client";

import React from "react";
import { motion } from "framer-motion";
import { greeting } from "@/lib/data";

const AboutSection = () => {
    return (
        <section id="about" className="py-24 relative bg-surface/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">
                        <span className="text-accent">04.</span> About Me
                    </h2>

                    <div className="relative inline-block">
                        <p className="text-xl md:text-2xl text-textMuted leading-relaxed font-light">
                            "I am a curious person who likes to understand what's under the hood. I find joy in building end-to-end solutions and mentoring others."
                        </p>
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-accent rounded-full shadow-[0_0_15px_rgba(0,217,141,0.5)]" />
                    </div>

                    <p className="text-textMuted max-w-2xl mx-auto pt-8">
                        {greeting.subTitle}. Based in India, I specialize in building scalable AI systems and full-stack applications. My journey involves continuous learning and applying cutting-edge technologies to solve real-world problems.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;

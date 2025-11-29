"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { greeting } from "@/lib/data";
import AnimatedVisual from "./AnimatedVisual";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 z-10"
                >


                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-textPrimary">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                            {greeting.title}
                        </span>
                    </h1>

                    <p className="text-xl text-textMuted max-w-lg">
                        {greeting.subTitle}. {greeting.logo_name} builds scalable AI systems and full-stack applications.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#projects"
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-black font-medium shadow-[0_0_20px_rgba(0,217,141,0.4)] hover:shadow-[0_0_30px_rgba(0,217,141,0.6)] hover:-translate-y-1 transition-all"
                        >
                            View Projects
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href={greeting.resumeLink}
                            className="flex items-center gap-2 px-6 py-3 rounded-full border border-borderSoft text-textPrimary hover:border-accent hover:text-accent transition-colors"
                        >
                            <FileText size={18} />
                            Resume
                        </a>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] md:h-[600px] w-full"
                >
                    <AnimatedVisual />
                </motion.div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
};

export default Hero;

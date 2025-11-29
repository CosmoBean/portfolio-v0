"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";

interface ProjectProps {
    title: string;
    description: string;
    techStack: string[];
    link?: string;
    repoLink?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, techStack, link, repoLink }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative h-full p-6 rounded-2xl bg-gradient-to-b from-surface to-background border border-borderSoft hover:border-accent hover:shadow-[0_0_30px_rgba(0,217,141,0.15)] transition-all duration-300 flex flex-col"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black transition-colors">
                    <Code size={24} />
                </div>
                <div className="flex gap-2">
                    {repoLink && (
                        <a
                            href={repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full text-textMuted hover:text-accent hover:bg-surface transition-colors"
                        >
                            <Github size={20} />
                        </a>
                    )}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full text-textMuted hover:text-accent hover:bg-surface transition-colors"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-textPrimary mb-2 group-hover:text-accent transition-colors">
                {title}
            </h3>
            <p className="text-textMuted text-sm mb-6 flex-grow leading-relaxed">
                {description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-auto">
                {techStack.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-surface border border-borderSoft text-textMuted group-hover:border-accent/30 transition-colors"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Decorative Gradient Line */}
            <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    );
};

export default ProjectCard;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Cloud, Database } from "lucide-react";

interface SkillProps {
    title: string;
    skills: string[];
    softwareSkills: {
        skillName: string;
    }[];
}

const SkillCard: React.FC<SkillProps> = ({ title, skills, softwareSkills }) => {
    const getIcon = (title: string) => {
        if (title.includes("Full Stack")) return <Cpu size={24} />;
        if (title.includes("Cloud")) return <Cloud size={24} />;
        if (title.includes("Data")) return <Database size={24} />;
        return <Cpu size={24} />;
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="h-full p-6 rounded-2xl border border-borderSoft bg-gradient-to-b from-surface to-background hover:border-accent hover:shadow-[0_0_30px_rgba(0,217,141,0.1)] transition-all"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    {getIcon(title)}
                </div>
                <h3 className="text-xl font-bold text-textPrimary">{title}</h3>
            </div>

            <div className="space-y-6">
                {/* Skill Points */}
                <ul className="space-y-3">
                    {skills.map((skill, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-textMuted">
                            <span className="text-accent mt-1">⚡</span>
                            <span>{skill.replace("⚡", "").trim()}</span>
                        </li>
                    ))}
                </ul>

                {/* Tech Icons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-borderSoft">
                    {softwareSkills.map((tech, index) => (
                        <div
                            key={index}
                            className="group relative p-2 rounded-lg bg-surface border border-borderSoft hover:border-accent transition-colors cursor-help"
                        >
                            <span className="text-xs font-mono text-textMuted group-hover:text-accent transition-colors">
                                {tech.skillName}
                            </span>

                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-accent text-black text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                {tech.skillName}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default SkillCard;

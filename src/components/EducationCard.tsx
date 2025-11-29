"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface EducationProps {
    title: string;
    subtitle: string;
    duration: string;
    descriptions: string[];
}

const EducationCard: React.FC<EducationProps> = ({
    title,
    subtitle,
    duration,
    descriptions,
}) => {
    return (
        <div className="relative pl-8 pb-12 border-l border-borderSoft last:pb-0">
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,217,141,0.5)]" />

            <motion.div
                whileHover={{ x: 5 }}
                className="p-6 rounded-2xl border border-borderSoft bg-surface hover:border-accent/50 transition-all"
            >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                    <div>
                        <h3 className="text-xl font-bold text-textPrimary flex items-center gap-2">
                            {title}
                        </h3>
                        <p className="text-accent font-medium">{subtitle}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end text-xs text-textMuted font-mono gap-1">
                        <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            {duration}
                        </div>
                    </div>
                </div>

                <ul className="space-y-2 mt-4">
                    {descriptions.map((desc, index) => (
                        <li key={index} className="text-textMuted text-sm leading-relaxed flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                            <span>{desc.replace("⚡ ", "")}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default EducationCard;

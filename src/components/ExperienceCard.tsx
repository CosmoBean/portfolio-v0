"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceProps {
    title: string;
    company: string;
    company_url: string;
    duration: string;
    location: string;
    description: string;
    logo_path?: string;
}

const ExperienceCard: React.FC<ExperienceProps> = ({
    title,
    company,
    company_url,
    duration,
    location,
    description,
}) => {
    return (
        <div className="relative pl-8 pb-12 border-l border-borderSoft last:pb-0">
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,217,141,0.5)]" />

            <motion.div
                whileHover={{ x: 5 }}
                className="p-6 rounded-2xl border border-borderSoft bg-surface hover:border-accent/50 transition-all"
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                        <h3 className="text-xl font-bold text-textPrimary">{title}</h3>
                        <a
                            href={company_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline font-medium"
                        >
                            {company}
                        </a>
                    </div>
                    <div className="flex flex-col items-start md:items-end text-xs text-textMuted font-mono gap-1">
                        <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            {duration}
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin size={12} />
                            {location}
                        </div>
                    </div>
                </div>

                <p className="text-textMuted text-sm leading-relaxed">
                    {description}
                </p>
            </motion.div>
        </div>
    );
};

export default ExperienceCard;

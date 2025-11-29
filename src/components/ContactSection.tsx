"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { contactPageData, socialMediaLinks } from "@/lib/data";

const ContactSection = () => {
    const getIcon = (name: string) => {
        switch (name.toLowerCase()) {
            case "github": return <Github size={24} />;
            case "linkedin": return <Linkedin size={24} />;
            case "gmail": return <Mail size={24} />;
            case "twitter": return <Twitter size={24} />;
            default: return <Mail size={24} />;
        }
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">
                        <span className="text-accent">05.</span> {contactPageData.contactSection.title}
                    </h2>

                    <p className="text-textMuted max-w-2xl mx-auto text-lg">
                        {contactPageData.contactSection.description}
                    </p>

                    <div className="flex justify-center gap-6 pt-8">
                        {socialMediaLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5 }}
                                className="p-4 rounded-full bg-surface border border-borderSoft text-textMuted hover:text-accent hover:border-accent hover:shadow-[0_0_20px_rgba(0,217,141,0.3)] transition-all"
                            >
                                {getIcon(social.name)}
                            </motion.a>
                        ))}
                    </div>

                    <div className="pt-16 text-sm text-textMuted font-mono">
                        <p>Designed & Built by Sri Datta Bandreddi</p>
                        <p className="opacity-50">© {new Date().getFullYear()}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;

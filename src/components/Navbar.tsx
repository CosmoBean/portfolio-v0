"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { greeting } from "@/lib/data";

interface NavbarProps {
    onOpenTerminal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-md border-b border-borderSoft py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tighter text-textPrimary group-hover:text-accent transition-colors">
                        {greeting.logo_name}
                    </span>
                    <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-textMuted hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <button
                        onClick={onOpenTerminal}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-borderSoft text-textPrimary text-sm font-mono hover:border-accent hover:shadow-[0_0_15px_rgba(0,217,141,0.3)] transition-all group"
                    >
                        <Terminal size={16} className="text-accent group-hover:rotate-12 transition-transform" />
                        <span>Open Terminal</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-textPrimary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface border-b border-borderSoft overflow-hidden"
                    >
                        <div className="px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-textMuted hover:text-accent transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    onOpenTerminal();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-background border border-borderSoft text-textPrimary text-sm font-mono hover:border-accent transition-all w-full justify-center"
                            >
                                <Terminal size={16} className="text-accent" />
                                <span>Open Terminal</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

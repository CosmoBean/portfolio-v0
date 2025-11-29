"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Terminal as TerminalIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { greeting, skills, experience, projects, socialMediaLinks } from "@/lib/data";

interface TerminalOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const TerminalOverlay: React.FC<TerminalOverlayProps> = ({ isOpen, onClose }) => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<Array<{ type: "input" | "output"; content: React.ReactNode }>>([
        { type: "output", content: "Welcome to the portfolio terminal. Type 'help' to see available commands." },
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, { type: "input" as const, content: cmd }];

        let response: React.ReactNode = "";

        switch (cleanCmd) {
            case "help":
                response = (
                    <div className="space-y-1">
                        <p>Available commands:</p>
                        <ul className="list-disc list-inside pl-2 text-accent">
                            <li>about - Who am I?</li>
                            <li>projects - View my work</li>
                            <li>experience - My career path</li>
                            <li>skills - What I know</li>
                            <li>contact - Get in touch</li>
                            <li>clear - Clear terminal</li>
                            <li>exit - Close terminal</li>
                        </ul>
                    </div>
                );
                break;
            case "about":
                response = (
                    <div>
                        <p className="text-accent font-bold">{greeting.title}</p>
                        <p>{greeting.subTitle}</p>
                        <p className="mt-2 text-textMuted">AI Engineer & Full Stack Developer based in India.</p>
                    </div>
                );
                break;
            case "projects":
                response = (
                    <div className="space-y-2">
                        <p>Recent Projects:</p>
                        {projects.map((p, i) => (
                            <div key={i} className="pl-2 border-l-2 border-accent/30">
                                <p className="text-accent">{p.title}</p>
                                <p className="text-xs text-textMuted">{p.description}</p>
                            </div>
                        ))}
                    </div>
                );
                break;
            case "experience":
                response = (
                    <div className="space-y-2">
                        <p>Experience:</p>
                        {experience.sections[0].experiences.map((exp, i) => (
                            <div key={i} className="pl-2 border-l-2 border-accent/30">
                                <p className="text-accent">{exp.title} @ {exp.company}</p>
                                <p className="text-xs text-textMuted">{exp.duration}</p>
                            </div>
                        ))}
                    </div>
                );
                break;
            case "skills":
                response = (
                    <div className="space-y-2">
                        <p>Skills:</p>
                        {skills.data.map((s, i) => (
                            <div key={i}>
                                <p className="text-accent">{s.title}:</p>
                                <p className="text-xs text-textMuted">{s.softwareSkills.map(sk => sk.skillName).join(", ")}</p>
                            </div>
                        ))}
                    </div>
                );
                break;
            case "contact":
                response = (
                    <div>
                        <p>Contact me at: <a href={`mailto:${socialMediaLinks[2].link}`} className="text-accent underline">sridatta.bandreddi@gmail.com</a></p>
                        <p>GitHub: <a href={greeting.githubProfile} target="_blank" className="text-accent underline">{greeting.githubProfile}</a></p>
                    </div>
                );
                break;
            case "clear":
                setHistory([]);
                setInput("");
                return;
            case "exit":
                onClose();
                return;
            case "":
                response = "";
                break;
            default:
                response = <span className="text-red-400">Command not found: {cmd}. Type 'help' for options.</span>;
        }

        setHistory([...newHistory, { type: "output", content: response }]);
        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleCommand(input);
        } else if (e.key === "Escape") {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="w-full max-w-3xl h-[600px] bg-[#0c0c0c] border border-accent/50 rounded-lg shadow-[0_0_50px_rgba(0,217,141,0.15)] overflow-hidden flex flex-col font-mono text-sm md:text-base"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-borderSoft">
                            <div className="flex items-center gap-2">
                                <TerminalIcon size={16} className="text-accent" />
                                <span className="text-textMuted">guest@sridatta-portfolio:~</span>
                            </div>
                            <button onClick={onClose} className="text-textMuted hover:text-white transition-colors" aria-label="Close Terminal">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Terminal Body */}
                        <div className="flex-1 p-4 overflow-y-auto font-mono" onClick={() => inputRef.current?.focus()}>
                            {history.map((entry, i) => (
                                <div key={i} className="mb-2">
                                    {entry.type === "input" ? (
                                        <div className="flex items-center gap-2 text-textMuted">
                                            <span className="text-accent">➜</span>
                                            <span>~</span>
                                            <span className="text-white">{entry.content}</span>
                                        </div>
                                    ) : (
                                        <div className="ml-6 text-textPrimary/90 whitespace-pre-wrap">{entry.content}</div>
                                    )}
                                </div>
                            ))}

                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-accent">➜</span>
                                <span className="text-textMuted">~</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 bg-transparent border-none outline-none text-white caret-accent"
                                    autoFocus
                                />
                            </div>
                            <div ref={bottomRef} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TerminalOverlay;

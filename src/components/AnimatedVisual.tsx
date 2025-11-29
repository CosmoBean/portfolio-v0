"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedVisual = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            </div>
        );
    }

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Glowing Orb */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute w-64 h-64 bg-accent/20 rounded-full blur-3xl"
            />

            {/* Rotating Rings */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 10 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className={`absolute border border-accent/20 rounded-full`}
                    style={{
                        width: `${300 + i * 100}px`,
                        height: `${300 + i * 100}px`,
                        borderStyle: i % 2 === 0 ? "solid" : "dashed",
                    }}
                />
            ))}

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    animate={{
                        x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                        y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                    }}
                    className="absolute w-1 h-1 bg-accent rounded-full"
                    style={{
                        left: `${50 + (Math.random() * 40 - 20)}%`,
                        top: `${50 + (Math.random() * 40 - 20)}%`,
                    }}
                />
            ))}

            {/* Central Code Block / Neural Node */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 p-6 bg-surface/50 backdrop-blur-xl border border-borderSoft rounded-2xl shadow-[0_0_30px_rgba(0,217,141,0.1)]"
            >
                <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="space-y-2 font-mono text-xs text-textMuted">
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-accent">const</span> <span className="text-white">engineer</span> = <span className="text-accent">new</span> <span className="text-yellow-400">AIEngineer</span>();
                    </motion.div>
                    <div>
                        <span className="text-white">engineer</span>.<span className="text-blue-400">optimize</span>(<span className="text-green-400">"neural_net"</span>);
                    </div>
                    <div>
                        <span className="text-white">engineer</span>.<span className="text-blue-400">deploy</span>(<span className="text-green-400">"production"</span>);
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AnimatedVisual;

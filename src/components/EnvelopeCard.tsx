import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EmbossedPattern } from './EmbossedPattern';
import { Butterflies } from './Butterflies';
import { WaxSeal } from './WaxSeal';
import { BismillahHeader } from './BismillahHeader';
import { WeddingContent } from '../data/content';

interface EnvelopeCardProps {
    content: WeddingContent;
    onOpen: () => void;
    isRTL?: boolean;
}

export const EnvelopeCard: React.FC<EnvelopeCardProps> = ({ content, onOpen, isRTL }) => {
    // Staged timing states: 'idle' -> 'cord-snap' -> 'seal-crack' -> 'flap-peel' -> 'done'
    const [animStage, setAnimStage] = useState<'idle' | 'cord-snap' | 'seal-crack' | 'flap-peel' | 'done'>('idle');

    const handleTapToOpen = () => {
        // Re-tap / double-trigger prevention lock
        if (animStage !== 'idle') return;

        // Stage 1: 0.0s - 0.6s -> Cord snaps & swings away
        setAnimStage('cord-snap');

        // Stage 2: 0.5s - 1.4s -> Wax seal cracks apart
        setTimeout(() => {
            setAnimStage('seal-crack');
        }, 550);

        // Stage 3: 1.2s - 2.6s -> Envelope flap peels back & card lifts open
        setTimeout(() => {
            setAnimStage('flap-peel');
        }, 1300);

        // Stage 4: 2.6s - 3.2s -> Fully transition to reveal page
        setTimeout(() => {
            setAnimStage('done');
            onOpen();
        }, 2800);
    };

    return (
        <div className="relative w-full max-w-md mx-auto min-h-[640px] h-[85vh] max-h-[760px] flex flex-col items-center justify-between p-4 sm:p-6 select-none">

            {/* 1. Bismillah Header above envelope */}
            <BismillahHeader text={content.bismillah} isRTL={isRTL} />

            {/* 2. Main Envelope Card Container */}
            <motion.div
                initial={{ scale: 0.96, opacity: 0, y: 20 }}
                animate={{
                    scale: animStage === 'flap-peel' || animStage === 'done' ? 0.92 : 1,
                    opacity: animStage === 'done' ? 0 : 1,
                    y: animStage === 'flap-peel' ? 30 : 0,
                }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full flex-1 my-2 bg-[#F2ECE3] rounded-2xl shadow-envelope border border-[#E5DDCF] flex flex-col items-center justify-between overflow-hidden paper-emboss"
            >
                {/* Subtle Embossed Islamic Geometric Background */}
                <EmbossedPattern />

                {/* Scattered Gold Butterflies in Top Third */}
                <Butterflies />

                {/* Top Half: Diamond Flap Shape (peels back open upward) */}
                <div className="absolute top-0 inset-x-0 h-1/2 pointer-events-none overflow-hidden z-10">
                    <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="none" className="w-full h-full">
                        <defs>
                            <filter id="fold-shadow-top-v2" x="-10%" y="-10%" width="120%" height="120%">
                                <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#3A2E26" floodOpacity="0.22" />
                            </filter>
                        </defs>

                        {/* Peeling Diamond Flap Path Animation */}
                        <motion.path
                            d="M 0 0 L 200 170 L 400 0 Z"
                            fill="#FAF7F2"
                            stroke="#D8CEBD"
                            strokeWidth="1"
                            filter="url(#fold-shadow-top-v2)"
                            animate={{
                                d: animStage === 'flap-peel' || animStage === 'done'
                                    ? "M 0 0 L 200 -140 L 400 0 Z"
                                    : "M 0 0 L 200 170 L 400 0 Z",
                                opacity: animStage === 'flap-peel' || animStage === 'done' ? 0.15 : 1,
                            }}
                            transition={{ duration: 1.4, ease: [0.34, 1.2, 0.64, 1] }}
                        />

                        {/* Flap Gold Accent Dashed Line */}
                        <motion.path
                            d="M 15 0 L 200 158 L 385 0"
                            fill="none"
                            stroke="#C5A059"
                            strokeWidth="0.75"
                            strokeDasharray="4 2"
                            opacity="0.6"
                            animate={{
                                opacity: animStage === 'flap-peel' || animStage === 'done' ? 0 : 0.6,
                            }}
                            transition={{ duration: 0.5 }}
                        />
                    </svg>
                </div>

                {/* Bottom Half: Scallop Arc Envelope Flap */}
                <div className="absolute bottom-0 inset-x-0 h-1/2 pointer-events-none overflow-hidden z-10">
                    <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="none" className="w-full h-full">
                        <defs>
                            <filter id="fold-shadow-bottom-v2" x="-10%" y="-10%" width="120%" height="120%">
                                <feDropShadow dx="0" dy="-3" stdDeviation="4" floodColor="#3A2E26" floodOpacity="0.14" />
                            </filter>
                        </defs>
                        <path
                            d="M 0 300 L 0 150 C 120 230, 280 230, 400 150 L 400 300 Z"
                            fill="#EFE7DA"
                            stroke="#D8CEBD"
                            strokeWidth="1"
                            filter="url(#fold-shadow-bottom-v2)"
                        />
                    </svg>
                </div>

                {/* Diagonal Antique Gold Cord / String */}
                <AnimatePresence>
                    {animStage === 'idle' && (
                        <motion.div
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 pointer-events-none z-15 flex items-center justify-center"
                        >
                            <svg width="100%" height="100%" className="absolute inset-0">
                                <defs>
                                    <linearGradient id="gold-cord-v2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#F8E8C7" />
                                        <stop offset="50%" stopColor="#C5A059" />
                                        <stop offset="100%" stopColor="#8B6914" />
                                    </linearGradient>
                                </defs>
                                <line
                                    x1="0"
                                    y1="35%"
                                    x2="100%"
                                    y2="65%"
                                    stroke="url(#gold-cord-v2)"
                                    strokeWidth="2.8"
                                    strokeDasharray="6 2"
                                    className="drop-shadow-[0_3px_6px_rgba(0,0,0,0.35)]"
                                />
                            </svg>
                        </motion.div>
                    )}

                    {/* Staged Cord Snapping & Swing-Away Animation */}
                    {animStage !== 'idle' && animStage !== 'done' && (
                        <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
                            {/* Left Cord Half Swinging Down & Outward */}
                            <motion.div
                                initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                                animate={{ x: -160, y: 60, opacity: 0, rotate: -45 }}
                                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                                className="absolute top-[35%] left-0 w-1/2 h-[3px] bg-gradient-to-r from-gold-light via-gold-antique to-gold-dark shadow-md"
                            />
                            {/* Right Cord Half Swinging Up & Outward */}
                            <motion.div
                                initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                                animate={{ x: 160, y: -60, opacity: 0, rotate: 45 }}
                                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                                className="absolute top-[65%] right-0 w-1/2 h-[3px] bg-gradient-to-r from-gold-dark via-gold-antique to-gold-light shadow-md"
                            />
                        </div>
                    )}
                </AnimatePresence>

                {/* Center Content: Wax Seal Container */}
                <div className="relative z-30 flex-1 flex flex-col items-center justify-center my-auto">
                    <WaxSeal
                        monogram={content.monogram}
                        isCracking={animStage === 'seal-crack' || animStage === 'flap-peel' || animStage === 'done'}
                        onClick={handleTapToOpen}
                    />
                </div>

                {/* Bottom Bar: TAP TO OPEN Button */}
                <motion.div
                    animate={{
                        scale: animStage === 'idle' ? [1, 1.03, 1] : 0.95,
                        opacity: animStage === 'idle' ? 1 : 0,
                    }}
                    transition={{
                        scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                        opacity: { duration: 0.4 },
                    }}
                    onClick={handleTapToOpen}
                    className="relative z-30 w-full pb-8 pt-4 flex flex-col items-center justify-center cursor-pointer group"
                >
                    {/* Thin Horizontal Gold Rules framing text */}
                    <div className="flex items-center justify-center space-x-3 w-4/5 max-w-[240px]">
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gold-antique to-gold-amber" />

                        <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold-dark group-hover:text-gold transition-colors duration-300">
                            {content.tapToOpen}
                        </span>

                        <div className="flex-1 h-[1px] bg-gradient-to-r from-gold-amber via-gold-antique to-transparent" />
                    </div>

                    <span className="text-[10px] text-gray-400 font-sans tracking-widest mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                        FARHAN & AMANI
                    </span>
                </motion.div>

            </motion.div>

        </div>
    );
};

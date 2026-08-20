import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WaxSealProps {
    monogram?: string;
    isCracking?: boolean;
    onClick?: () => void;
}

export const WaxSeal: React.FC<WaxSealProps> = ({
    monogram = 'F & A',
    isCracking = false,
    onClick,
}) => {
    return (
        <div className="relative flex items-center justify-center cursor-pointer select-none group">
            {/* Soft Gold Glow on Hover */}
            <div className="absolute -inset-4 bg-gold/25 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {!isCracking ? (
                <motion.div
                    whileHover={{ scale: 1.04, rotate: 1 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={onClick}
                    className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center filter drop-shadow-[0_14px_28px_rgba(3,24,16,0.65)]"
                >
                    <svg viewBox="0 0 140 140" className="absolute inset-0 w-full h-full">
                        <defs>
                            {/* 3D Glossy Light Gradient for Raised Organic Wax Surface */}
                            <radialGradient id="wax-gloss-3d" cx="30%" cy="25%" r="75%">
                                <stop offset="0%" stopColor="#258866" />
                                <stop offset="25%" stopColor="#155D44" />
                                <stop offset="65%" stopColor="#0B3B2B" />
                                <stop offset="90%" stopColor="#052219" />
                                <stop offset="100%" stopColor="#02120D" />
                            </radialGradient>

                            {/* Poured Antique Gold Metallic Border */}
                            <linearGradient id="poured-gold-edge" x1="10%" y1="10%" x2="90%" y2="90%">
                                <stop offset="0%" stopColor="#F8E8C7" />
                                <stop offset="35%" stopColor="#D4AF37" />
                                <stop offset="70%" stopColor="#997010" />
                                <stop offset="100%" stopColor="#5E4305" />
                            </linearGradient>

                            {/* Engraved / Recessed Depth Filter */}
                            <filter id="engraved-recess" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="1" dy="1.5" stdDeviation="0.8" floodColor="#000000" floodOpacity="0.85" />
                                <feDropShadow dx="-0.8" dy="-0.8" stdDeviation="0.5" floodColor="#D4AF37" floodOpacity="0.4" />
                            </filter>
                        </defs>

                        {/* 1. Outer Uneven Organic Melted Wax Edge (Physical Stamp Look) */}
                        <path
                            d="M 70 6
                 C 92 4, 110 14, 122 28
                 C 134 42, 138 62, 134 82
                 C 130 102, 118 122, 98 132
                 C 78 142, 54 138, 36 130
                 C 18 122, 6 104, 4 84
                 C 2 64, 10 44, 24 28
                 C 38 12, 48 8, 70 6 Z"
                            fill="url(#wax-gloss-3d)"
                            stroke="url(#poured-gold-edge)"
                            strokeWidth="2.8"
                            strokeLinejoin="round"
                        />

                        {/* 2. Secondary Pressed Inner Ridge (Rough Hand-pressed Ring) */}
                        <path
                            d="M 70 14
                 C 88 13, 104 20, 114 34
                 C 124 48, 126 66, 122 82
                 C 118 98, 106 112, 90 120
                 C 74 128, 52 124, 38 116
                 C 24 108, 14 94, 13 78
                 C 12 62, 18 46, 30 34
                 C 42 22, 52 15, 70 14 Z"
                            fill="none"
                            stroke="url(#poured-gold-edge)"
                            strokeWidth="1.2"
                            opacity="0.75"
                            strokeDasharray="18 2 8 3"
                        />

                        {/* 3. Inner Recessed Well (Darkened Wax Depression) */}
                        <circle cx="70" cy="70" r="46" fill="#072B1F" opacity="0.4" />
                        <circle cx="70" cy="70" r="45" fill="none" stroke="#03150E" strokeWidth="1.8" opacity="0.9" />

                        {/* 4. Engraved Laurel Leaf Wreath pressed INTO wax */}
                        <g stroke="url(#poured-gold-edge)" fill="none" strokeWidth="1.4" strokeLinecap="round" filter="url(#engraved-recess)">
                            {/* Left Laurel Branch */}
                            <path d="M 38 70 C 35 48, 50 32, 70 32" />
                            <path d="M 40 54 Q 32 50 34 44" />
                            <path d="M 46 42 Q 40 36 44 32" />
                            <path d="M 56 34 Q 52 26 58 24" />

                            {/* Right Laurel Branch */}
                            <path d="M 102 70 C 105 48, 90 32, 70 32" />
                            <path d="M 100 54 Q 108 50 106 44" />
                            <path d="M 94 42 Q 100 36 96 32" />
                            <path d="M 84 34 Q 88 26 82 24" />

                            {/* Bottom Decorative Bow Accent */}
                            <path d="M 48 104 Q 70 110 92 104" />
                            <circle cx="70" cy="107" r="2.2" fill="url(#poured-gold-edge)" />
                        </g>
                    </svg>

                    {/* 5. Center Recessed Monogram Text */}
                    <div className="relative z-10 text-center flex flex-col items-center justify-center pt-1">
                        <span
                            className="font-serif font-bold text-xl sm:text-2xl tracking-widest text-gold-light"
                            style={{
                                filter: 'drop-shadow(1px 1.5px 2px rgba(0,0,0,0.9)) drop-shadow(-0.5px -0.5px 0.5px rgba(255,248,220,0.5))',
                                background: 'linear-gradient(180deg, #FFF8DC 0%, #D4AF37 60%, #8B6914 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {monogram}
                        </span>
                    </div>

                    {/* Glossy Curved Highlight Overlay top-left */}
                    <div className="absolute top-3 left-4 w-12 h-6 bg-gradient-to-b from-white/25 to-transparent rounded-full transform -rotate-45 pointer-events-none blur-[1px]" />
                </motion.div>
            ) : (
                /* Staggered Crack Explosion Animation (3-Piece Shatter) */
                <AnimatePresence>
                    <div className="relative w-36 h-36">
                        {/* Fragment 1 - Left Segment */}
                        <motion.div
                            initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
                            animate={{ x: -55, y: -20, rotate: -35, scale: 1.1, opacity: 0 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                            className="absolute inset-0 w-1/2 h-full overflow-hidden"
                        >
                            <div className="w-36 h-36 bg-emerald-seal border-2 border-gold-antique/70 rounded-full flex items-center justify-center shadow-2xl">
                                <span className="font-serif font-bold text-gold-light text-2xl pl-4">F</span>
                            </div>
                        </motion.div>

                        {/* Fragment 2 - Top Right Segment */}
                        <motion.div
                            initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
                            animate={{ x: 60, y: -40, rotate: 40, scale: 1.15, opacity: 0 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                            className="absolute top-0 right-0 w-1/2 h-1/2 overflow-hidden"
                        >
                            <div className="w-36 h-36 -ml-18 bg-emerald-seal border-2 border-gold-antique/70 rounded-full shadow-2xl" />
                        </motion.div>

                        {/* Fragment 3 - Bottom Segment */}
                        <motion.div
                            initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
                            animate={{ x: 15, y: 65, rotate: 20, scale: 1.1, opacity: 0 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                            className="absolute bottom-0 left-1/4 w-3/4 h-1/2 overflow-hidden"
                        >
                            <div className="w-36 h-36 -ml-9 -mt-18 bg-emerald-seal border-2 border-gold-antique/70 rounded-full shadow-2xl" />
                        </motion.div>
                    </div>
                </AnimatePresence>
            )}
        </div>
    );
};

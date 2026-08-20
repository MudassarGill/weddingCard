import React from 'react';
import { motion } from 'framer-motion';

// Gold Butterfly SVG Component
const GoldButterfly: React.FC<{ size: number; rotation: number; id: number }> = ({ size, rotation, id }) => {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className="drop-shadow-[0_2px_4px_rgba(197,160,89,0.4)]"
            style={{ rotate: `${rotation}deg` }}
        >
            <defs>
                <linearGradient id={`gold-wing-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F8E8C7" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#AA820A" />
                </linearGradient>
            </defs>

            {/* Left Wing */}
            <motion.g
                animate={{ scaleX: [1, 0.25, 1], rotateY: [0, 45, 0] }}
                transition={{
                    duration: 0.6 + (id % 3) * 0.2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: id * 0.15,
                }}
                style={{ transformOrigin: '50% 50%' }}
            >
                <path
                    d="M50 50 C30 20 5 25 10 45 C12 55 35 60 50 52 Z"
                    fill={`url(#gold-wing-${id})`}
                    stroke="#8B6914"
                    strokeWidth="1.5"
                />
                <path
                    d="M50 52 C32 55 12 65 20 82 C28 92 42 75 50 55 Z"
                    fill={`url(#gold-wing-${id})`}
                    stroke="#8B6914"
                    strokeWidth="1.2"
                />
                {/* Decorative inner wing dots */}
                <circle cx="25" cy="38" r="2.5" fill="#FFF8DC" opacity="0.8" />
                <circle cx="30" cy="70" r="2" fill="#FFF8DC" opacity="0.7" />
            </motion.g>

            {/* Right Wing */}
            <motion.g
                animate={{ scaleX: [1, 0.25, 1], rotateY: [0, -45, 0] }}
                transition={{
                    duration: 0.6 + (id % 3) * 0.2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: id * 0.15,
                }}
                style={{ transformOrigin: '50% 50%' }}
            >
                <path
                    d="M50 50 C70 20 95 25 90 45 C88 55 65 60 50 52 Z"
                    fill={`url(#gold-wing-${id})`}
                    stroke="#8B6914"
                    strokeWidth="1.5"
                />
                <path
                    d="M50 52 C68 55 88 65 80 82 C72 92 58 75 50 55 Z"
                    fill={`url(#gold-wing-${id})`}
                    stroke="#8B6914"
                    strokeWidth="1.2"
                />
                {/* Decorative inner wing dots */}
                <circle cx="75" cy="38" r="2.5" fill="#FFF8DC" opacity="0.8" />
                <circle cx="70" cy="70" r="2" fill="#FFF8DC" opacity="0.7" />
            </motion.g>

            {/* Butterfly Body & Antennae */}
            <path d="M50 35 L50 65" stroke="#5C4033" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="50" cy="33" r="2.5" fill="#5C4033" />
            <path d="M49 32 Q42 22 38 20" stroke="#8B6914" strokeWidth="1" fill="none" />
            <path d="M51 32 Q58 22 62 20" stroke="#8B6914" strokeWidth="1" fill="none" />
        </motion.svg>
    );
};

export const Butterflies: React.FC = () => {
    // Scatter configuration for 8 butterflies near top third of card
    const butterflyConfigs = [
        { id: 1, top: '8%', left: '18%', size: 38, rotation: -18, floatDuration: 4.2 },
        { id: 2, top: '6%', left: '72%', size: 44, rotation: 22, floatDuration: 5.1 },
        { id: 3, top: '15%', left: '30%', size: 30, rotation: -8, floatDuration: 3.8 },
        { id: 4, top: '14%', left: '62%', size: 36, rotation: 15, floatDuration: 4.7 },
        { id: 5, top: '22%', left: '14%', size: 32, rotation: -28, floatDuration: 5.5 },
        { id: 6, top: '24%', left: '78%', size: 40, rotation: 12, floatDuration: 4.0 },
        { id: 7, top: '10%', left: '46%', size: 26, rotation: 5, floatDuration: 3.5 },
        { id: 8, top: '28%', left: '48%', size: 34, rotation: -12, floatDuration: 4.9 },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            {butterflyConfigs.map((b) => (
                <motion.div
                    key={b.id}
                    className="absolute"
                    style={{ top: b.top, left: b.left }}
                    animate={{
                        y: [0, -12, 0, -6, 0],
                        x: [0, 6, -4, 2, 0],
                        rotate: [b.rotation, b.rotation + 6, b.rotation - 4, b.rotation],
                    }}
                    transition={{
                        duration: b.floatDuration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: b.id * 0.2,
                    }}
                >
                    <GoldButterfly size={b.size} rotation={0} id={b.id} />
                </motion.div>
            ))}
        </div>
    );
};

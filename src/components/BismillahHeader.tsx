import React from 'react';
import { motion } from 'framer-motion';

interface BismillahHeaderProps {
    text?: string;
    isRTL?: boolean;
}

export const BismillahHeader: React.FC<BismillahHeaderProps> = ({ text = '﷽', isRTL }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col items-center justify-center pt-4 pb-2 z-20 select-none cursor-default pointer-events-none"
        >
            <span className="font-arabic text-3xl sm:text-4xl text-gold-dark drop-shadow-sm hover:scale-105 transition-transform duration-300 font-bold tracking-wide">
                {text}
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gold-antique to-transparent mt-1 opacity-70" />
        </motion.div>
    );
};

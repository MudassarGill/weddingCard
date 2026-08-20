import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
    isPlaying: boolean;
    onToggle: () => void;
    soundOnLabel?: string;
    soundOffLabel?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
    isPlaying,
    onToggle,
    soundOnLabel = 'Audio Playing',
    soundOffLabel = 'Audio Muted',
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="fixed bottom-5 right-5 z-50 flex items-center space-x-2 select-none"
        >
            <button
                onClick={onToggle}
                aria-label={isPlaying ? soundOnLabel : soundOffLabel}
                title={isPlaying ? soundOnLabel : soundOffLabel}
                className="relative group p-3 rounded-full bg-[#FAF7F2]/90 border border-gold-antique/50 text-gold-dark shadow-lg backdrop-blur-md hover:bg-gold-antique hover:text-white transition-all duration-300 active:scale-95 flex items-center justify-center"
            >
                {isPlaying ? (
                    <Volume2 className="w-5 h-5 animate-pulse" />
                ) : (
                    <VolumeX className="w-5 h-5 text-gray-400 group-hover:text-white" />
                )}

                {/* Pulse ring when playing audio */}
                {isPlaying && (
                    <span className="absolute -inset-1 rounded-full border border-gold/40 animate-ping pointer-events-none" />
                )}
            </button>
        </motion.div>
    );
};

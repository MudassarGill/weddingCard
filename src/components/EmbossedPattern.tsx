import React from 'react';

export const EmbossedPattern: React.FC = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.14] mix-blend-multiply">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="islamic-geometric" width="60" height="60" patternUnits="userSpaceOnUse">
                        {/* Tone-on-tone embossed geometric star & arabesque lines */}
                        <path
                            d="M 30 0 L 60 30 L 30 60 L 0 30 Z"
                            fill="none"
                            stroke="#8B7355"
                            strokeWidth="0.75"
                        />
                        <circle cx="30" cy="30" r="12" fill="none" stroke="#8B7355" strokeWidth="0.5" />
                        <path
                            d="M 30 18 L 30 42 M 18 30 L 42 30"
                            stroke="#8B7355"
                            strokeWidth="0.5"
                        />
                        <path
                            d="M 21.5 21.5 L 38.5 38.5 M 21.5 38.5 L 38.5 21.5"
                            stroke="#8B7355"
                            strokeWidth="0.5"
                        />
                        <rect x="0" y="0" width="60" height="60" fill="none" stroke="#8B7355" strokeWidth="0.25" opacity="0.5" />
                        <polygon points="30,5 37,23 55,30 37,37 30,55 23,37 5,30 23,23" fill="none" stroke="#8B7355" strokeWidth="0.4" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#islamic-geometric)" />
            </svg>
        </div>
    );
};

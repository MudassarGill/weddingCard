import React from 'react';
import { motion } from 'framer-motion';
import { SupportedLanguage, LANGUAGES } from '../data/content';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
    currentLang: SupportedLanguage;
    onSelectLang: (lang: SupportedLanguage) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
    currentLang,
    onSelectLang,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-4 right-4 z-50 flex items-center bg-[#FAF7F2]/80 backdrop-blur-md p-1 rounded-full border border-gold-antique/40 shadow-sm"
        >
            <div className="pl-2 pr-1 text-gold-dark opacity-70">
                <Globe className="w-3.5 h-3.5" />
            </div>

            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {LANGUAGES.map((lang) => {
                    const isActive = currentLang === lang.code;
                    return (
                        <button
                            key={lang.code}
                            onClick={() => onSelectLang(lang.code)}
                            className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${isActive
                                    ? 'bg-gold-antique text-white shadow-sm'
                                    : 'text-gray-600 hover:text-gold-dark hover:bg-gold-light/40'
                                }`}
                        >
                            {lang.label}
                        </button>
                    );
                })}
            </div>
        </motion.div>
    );
};

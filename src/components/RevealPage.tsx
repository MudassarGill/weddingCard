import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WeddingContent, MAIN_BACKGROUND_VIDEO_URL } from '../data/content';
import { CalendarGrid } from './CalendarGrid';

interface RevealPageProps {
    content: WeddingContent;
    isRTL?: boolean;
}

// Photo maps for Part 2 Section Backgrounds (spaces encoded as %20, parentheses as %28 / %29)
const SECTION_BG_PHOTOS = {
    nikkah: '/photos/WhatsApp%20Image%202026-08-19%20at%207.12.28%20AM.jpeg',
    invitation: '/photos/WhatsApp%20Image%202026-08-19%20at%207.12.28%20AM%20(1).jpeg',
    countdown: '/photos/WhatsApp%20Image%202026-08-19%20at%207.12.29%20AM.jpeg',
    verse: '/photos/WhatsApp%20Image%202026-08-19%20at%207.12.29%20AM%20(1).jpeg',
    venue: '/photos/WhatsApp%20Image%202026-08-19%20at%207.12.29%20AM%20(2).jpeg',
    programme: '/photos/WhatsApp%20Image%202026-08-19%20at%207.12.30%20AM.jpeg',
    blessed: '/photos/WhatsApp%20Image%202026-08-19%20at%207.12.28%20AM.jpeg',
    request: '/photos/WhatsApp%20Image%202026-08-19%20at%207.12.28%20AM%20(1).jpeg',
    rsvp: '/photos/WhatsApp%20Image%202026-08-19%20at%207.12.29%20AM.jpeg',
};

// Elegant Gold Line Icon Helper Component
const GoldIcon: React.FC<{ name: string; className?: string }> = ({ name, className = "w-5 h-5 stroke-[#D4AF37]" }) => {
    switch (name) {
        case 'glass':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4m-5-17h10l-1 8a4 4 0 01-8 0L7 4z" />
                </svg>
            );
        case 'sparkles':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            );
        case 'rings':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a4 4 0 100-8 4 4 0 000 8zm6 8a4 4 0 100-8 4 4 0 000 8zM12 9l2-3m-4 0l2 3" />
                </svg>
            );
        case 'mosque':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 0a4 4 0 00-4 4v10h8V10a4 4 0 00-4-4zM6 20V12a2 2 0 012-2h8a2 2 0 012 2v8M4 20h16" />
                </svg>
            );
        case 'cutlery':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v7a3 3 0 003 3v6m3-16v16m7-16v8a2 2 0 01-2 2h-1v6" />
                </svg>
            );
        case 'cake':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.5v2a2.5 2.5 0 01-2.5 2.5H5.5A2.5 2.5 0 013 17.5v-2m18 0H3m18 0a2 2 0 00-2-2H5a2 2 0 00-2 2m14-5.5v2M7 10v2m5-6v8m0-8a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
            );
        case 'heart':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            );
        case 'map':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            );
        case 'calendar':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            );
        case 'flower':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
            );
        case 'crown':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18L19 7l-5 4-2-6-2 6-5-4-2 11z" />
                </svg>
            );
        case 'whatsapp':
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            );
        default:
            return null;
    }
};

export const RevealPage: React.FC<RevealPageProps> = ({ content, isRTL = false }) => {
    // Live Countdown Logic to Target Date (Sat 10 Oct 2026 12:00 PM)
    const targetDate = new Date('2026-10-10T12:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    // Calendar File Generator (.ics)
    const handleAddToCalendar = () => {
        const icsData = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Farhan and Amani Wedding//NONSGML v1.0//EN',
            'BEGIN:VEVENT',
            'SUMMARY:Farhan & Amani Nikkah & Walima',
            'DESCRIPTION:Nikkah & Walima of Farhan Hussain & Amani Abd',
            'LOCATION:Badsha Palace Restaurant, Walsall Road, Birmingham, B42 1LR',
            'DTSTART:20261010T120000Z',
            'DTEND:20261010T170000Z',
            'END:VEVENT',
            'END:VCALENDAR',
        ].join('\n');

        const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', 'Farhan_Amani_Wedding.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleRSVPWhatsApp = () => {
        const phone = '447828931050';
        const text = encodeURIComponent(content.rsvpPrefilledMessage);
        window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    };

    const sectionVariant = {
        hidden: { opacity: 0, y: 35 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
    };

    return (
        <div className={`w-full min-h-screen bg-[#F5ECE3] text-gray-800 font-serif leading-relaxed ${isRTL ? 'rtl' : 'ltr'}`}>

            {/* HERO BANNER SECTION WITH MAIN BACKGROUND VIDEO */}
            <div className="relative w-full h-[85vh] sm:h-screen overflow-hidden flex items-center justify-center">
                {/* Main Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-[0.85] contrast-[1.05]"
                >
                    <source src={MAIN_BACKGROUND_VIDEO_URL} type="video/mp4" />
                    <source src="/videos/mainbackgroundvideo.mp4" type="video/mp4" />
                </video>

                {/* Elegant Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#082017] via-black/40 to-black/30" />

                {/* Hero Overlay Content */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white flex flex-col items-center justify-center space-y-4"
                >
                    {/* Full Bismillah String with generous height & padding to prevent clipping */}
                    <div className="py-4 px-4 block overflow-visible max-w-full" dir="rtl">
                        <span className="text-2xl sm:text-3xl md:text-4xl text-[#D4AF37] font-serif leading-[2] drop-shadow-md block h-auto overflow-visible select-none py-1">
                            {content.bismillah}
                        </span>
                    </div>

                    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-1" />

                    <h2 className="text-xs sm:text-sm tracking-[0.35em] text-[#F8E8C7] uppercase font-sans font-medium">
                        {content.nikkahHeaderTitle}
                    </h2>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-wide text-white drop-shadow-lg font-normal my-2">
                        {content.groomName} <span className="text-[#D4AF37] italic font-light">&</span> {content.brideName}
                    </h1>

                    <p className="text-sm sm:text-base tracking-widest text-[#F8E8C7]/90 font-serif italic max-w-lg">
                        {content.date} · {content.time}
                    </p>

                    <p className="text-xs sm:text-sm tracking-wider text-white/80 font-sans uppercase">
                        {content.venueName} · {content.venueAddress}
                    </p>

                    {/* Scroll Down Indicator */}
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                        className="pt-8 opacity-80"
                    >
                        <div className="w-6 h-10 border border-[#D4AF37]/60 rounded-full flex items-start justify-center p-1.5 mx-auto">
                            <div className="w-1.5 h-3 bg-[#D4AF37] rounded-full" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>


            {/* SECTION 1: NIKKAH HEADING & DUA */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat relative border-b border-[#D4AF37]/20 py-20 px-4 flex items-center min-h-[70vh]"
                style={{ backgroundImage: `url("${SECTION_BG_PHOTOS.nikkah}")` }}
            >
                {/* Left-aligned content scrim: fades out to transparent on the right to expose photo borders */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5ECE3]/85 via-[#F5ECE3]/60 to-[#F5ECE3]/40 md:to-transparent" />
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={sectionVariant}
                    className="relative z-10 w-full max-w-6xl mx-auto flex justify-center md:justify-start"
                >
                    <div className="w-full max-w-2xl bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/30 shadow-md text-center space-y-4">
                        <span className="text-sm tracking-[0.3em] uppercase text-[#997010] font-sans">
                            — {content.eventTitle} —
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif text-[#052219]">
                            {content.groomName} <span className="text-[#D4AF37]">&</span> {content.brideName}
                        </h2>

                        <div className="text-xs sm:text-sm text-gray-600 space-y-1 font-sans">
                            <p>{content.groomParents}</p>
                            <p className="text-[#D4AF37] font-serif text-base italic">&</p>
                            <p>{content.brideParents}</p>
                        </div>

                        <div className="py-6 px-4 my-6 bg-[#FAF6F0] rounded-2xl border border-[#D4AF37]/20 shadow-sm space-y-3">
                            <p className="text-2xl sm:text-3xl font-serif text-[#0B3B2B] leading-relaxed dir-rtl" dir="rtl">
                                {content.nikkahDuaArabic}
                            </p>
                            <p className="text-xs sm:text-sm italic text-[#7A5A0B] font-serif">
                                {content.nikkahDuaTransliteration}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-700 font-sans">
                                {content.nikkahDuaTranslation}
                            </p>
                        </div>
                    </div>
                </motion.section>
            </div>


            {/* SECTION 2: THE INVITATION */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat relative border-b border-[#D4AF37]/20 py-20 px-4 flex items-center min-h-[60vh]"
                style={{ backgroundImage: `url("${SECTION_BG_PHOTOS.invitation}")` }}
            >
                {/* Right-aligned content scrim: fades out to transparent on the left */}
                <div className="absolute inset-0 bg-gradient-to-l from-[#F5ECE3]/85 via-[#F5ECE3]/60 to-[#F5ECE3]/40 md:to-transparent" />
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={sectionVariant}
                    className="relative z-10 w-full max-w-6xl mx-auto flex justify-center md:justify-end"
                >
                    <div className="w-full max-w-2xl bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/30 shadow-md text-center space-y-6">
                        <div className="space-y-1">
                            <span className="text-xs tracking-[0.25em] text-[#997010] font-sans uppercase">the</span>
                            <h3 className="text-2xl sm:text-3xl font-serif tracking-wider text-[#052219] uppercase">
                                {content.invitationHeading}
                            </h3>
                            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
                        </div>

                        <p className="text-lg text-[#0B3B2B] font-serif italic">
                            {content.invitationGreeting}
                        </p>

                        <div className="text-sm sm:text-base text-gray-700 font-sans leading-relaxed whitespace-pre-line max-w-xl mx-auto space-y-4">
                            {content.invitationBody}
                        </div>
                    </div>
                </motion.section>
            </div>


            {/* SECTION 3: OUR SPECIAL DAY (COUNTDOWN & CALENDAR GRID) */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat relative border-b border-[#D4AF37]/20 py-20 px-4 flex items-center min-h-[70vh]"
                style={{ backgroundImage: `url("${SECTION_BG_PHOTOS.countdown}")` }}
            >
                {/* Centered content scrim: lighter overall color filter */}
                <div className="absolute inset-0 bg-[#F5ECE3]/45" />
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={sectionVariant}
                    className="relative z-10 w-full max-w-6xl mx-auto"
                >
                    <div className="w-full bg-white/95 backdrop-blur-md p-8 sm:p-10 md:p-12 rounded-3xl border border-[#D4AF37]/30 shadow-md text-center space-y-8">
                        <div className="space-y-1">
                            <span className="text-xs tracking-[0.25em] text-[#997010] font-sans uppercase">our</span>
                            <h3 className="text-2xl sm:text-3xl font-serif tracking-wider text-[#052219] uppercase">
                                {content.countdownHeaderTitle}
                            </h3>
                            <p className="text-xs text-[#7A5A0B] tracking-widest font-sans uppercase pt-1">
                                {content.date} · {content.time}
                            </p>
                            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
                        </div>

                        {/* Flex container mapping Calendar and Digit Countdown side-by-side on desktop */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
                            <CalendarGrid />

                            <div className="flex flex-col justify-center space-y-6 w-full max-w-md">
                                <h4 className="font-serif text-sm tracking-widest text-[#052219] font-bold uppercase text-center md:text-left">
                                    — {content.countdownSubtitle} —
                                </h4>

                                {/* LIVE DIGIT COUNTDOWN GRID */}
                                <div className="grid grid-cols-4 gap-2">
                                    {[
                                        { label: content.daysLabel, val: timeLeft.days },
                                        { label: content.hoursLabel, val: timeLeft.hours },
                                        { label: content.minutesLabel, val: timeLeft.minutes },
                                        { label: content.secondsLabel, val: timeLeft.seconds },
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-[#FAF6F0] p-3 rounded-xl border border-[#D4AF37]/25 shadow-sm flex flex-col items-center justify-center"
                                        >
                                            <span className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#052219]">
                                                {String(item.val).padStart(2, '0')}
                                            </span>
                                            <span className="text-[8px] sm:text-[10px] tracking-widest text-[#997010] font-sans uppercase mt-1">
                                                {item.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs sm:text-sm italic text-gray-600 font-sans text-center md:text-left leading-relaxed">
                                    {content.countdownFooterNote}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>


            {/* SECTION 4: A VERSE FOR MARRIAGE */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat relative border-b border-[#D4AF37]/20 py-20 px-4 flex items-center min-h-[50vh]"
                style={{ backgroundImage: `url("${SECTION_BG_PHOTOS.verse}")` }}
            >
                {/* Left-aligned content scrim */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5ECE3]/85 via-[#F5ECE3]/60 to-[#F5ECE3]/40 md:to-transparent" />
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={sectionVariant}
                    className="relative z-10 w-full max-w-6xl mx-auto flex justify-center md:justify-start"
                >
                    <div className="w-full max-w-2xl bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/30 shadow-md text-center space-y-6">
                        <div className="py-2 px-4 bg-[#FAF6F0] rounded-2xl border border-[#D4AF37]/20 shadow-sm space-y-4">
                            <p className="text-xl sm:text-2xl font-serif text-[#0B3B2B] leading-loose" dir="rtl">
                                {content.verseArabic}
                            </p>
                            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto" />
                            <p className="text-sm sm:text-base text-gray-700 font-serif leading-relaxed italic">
                                "{content.verseTranslation.replace(content.verseHighlightedPart, '')}"
                                <span className="text-[#997010] font-bold not-italic px-1">
                                    {content.verseHighlightedPart}
                                </span>
                                .
                            </p>
                            <p className="text-xs text-[#7A5A0B] font-sans tracking-widest uppercase">
                                {content.verseSource}
                            </p>
                        </div>
                    </div>
                </motion.section>
            </div>


            {/* SECTION 5: THE VENUE & GOOGLE MAPS */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat relative border-b border-[#D4AF37]/20 py-20 px-4 flex items-center min-h-[70vh]"
                style={{ backgroundImage: `url("${SECTION_BG_PHOTOS.venue}")` }}
            >
                {/* Right-aligned content scrim */}
                <div className="absolute inset-0 bg-gradient-to-l from-[#F5ECE3]/85 via-[#F5ECE3]/60 to-[#F5ECE3]/40 md:to-transparent" />
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={sectionVariant}
                    className="relative z-10 w-full max-w-6xl mx-auto flex justify-center md:justify-end"
                >
                    <div className="w-full max-w-2xl bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/30 shadow-md text-center space-y-6">
                        <div className="space-y-1">
                            <span className="text-xs tracking-[0.25em] text-[#997010] font-sans uppercase">the</span>
                            <h3 className="text-2xl sm:text-3xl font-serif tracking-wider text-[#052219] uppercase">
                                {content.venueHeaderTitle}
                            </h3>
                            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-xl sm:text-2xl font-serif text-[#052219] font-bold">
                                {content.venueName}
                            </h4>
                            <p className="text-sm sm:text-base text-gray-600 font-sans">
                                {content.venueAddress}
                            </p>
                            <p className="text-xs text-[#997010] font-sans font-medium tracking-wider">
                                {content.date} · From 12:00 PM
                            </p>
                        </div>

                        {/* Map & Calendar Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                            <a
                                href="https://maps.app.goo.gl/XrQtdbP22oBJzSeK9?g_st=ic"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-6 py-3 border border-[#D4AF37] text-[#052219] hover:bg-[#D4AF37] hover:text-white transition-all duration-300 text-xs tracking-widest font-sans uppercase rounded-full shadow-sm flex items-center justify-center space-x-2"
                            >
                                <GoldIcon name="map" className="w-4 h-4 stroke-current" />
                                <span>{content.openInMapsLabel}</span>
                            </a>
                            <button
                                onClick={handleAddToCalendar}
                                className="w-full sm:w-auto px-6 py-3 border border-[#D4AF37] text-[#052219] hover:bg-[#D4AF37] hover:text-white transition-all duration-300 text-xs tracking-widest font-sans uppercase rounded-full shadow-sm flex items-center justify-center space-x-2"
                            >
                                <GoldIcon name="calendar" className="w-4 h-4 stroke-current" />
                                <span>{content.addToCalendarLabel}</span>
                            </button>
                        </div>

                        {/* Embedded Google Map iframe */}
                        <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#D4AF37]/45 shadow-inner mt-4">
                            <iframe
                                title="Wedding Venue Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.3824510793616!2d-1.9287313233182813!3d52.52622763574163!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bd20d180f907%3A0xe54d924d55b08dfc!2sBadsha%20Palace%20Restaurant!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                                className="w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </motion.section>
            </div>


            {/* SECTION 6: DRESS CODE */}
            <div
                className="w-full bg-[#FAF6F0] py-20 px-4 border-b border-[#D4AF37]/20"
            >
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={sectionVariant}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    <div className="space-y-1">
                        <span className="text-xs tracking-[0.25em] text-[#997010] font-sans uppercase">— DRESS CODE —</span>
                        <h3 className="text-2xl sm:text-3xl font-serif tracking-wider text-[#052219] uppercase">
                            {content.dressCodeHeaderTitle}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 font-sans max-w-md mx-auto whitespace-pre-line pt-2">
                            {content.dressCodeIntro}
                        </p>
                    </div>

                    {/* Two-Panel Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* LADIES PANEL */}
                        <div className="p-8 rounded-3xl bg-gradient-to-b from-[#FDF0ED] to-[#F5ECE3] border border-[#E8C2B8] shadow-sm space-y-4">
                            <div className="w-12 h-12 rounded-full bg-[#E8C2B8]/30 border border-[#E8C2B8] flex items-center justify-center mx-auto">
                                <GoldIcon name="flower" className="w-6 h-6 stroke-[#7A3A35]" />
                            </div>
                            <h4 className="text-xl font-serif text-[#7A3A35] font-bold uppercase tracking-wider">
                                {content.ladiesTitle}
                            </h4>
                            <div className="inline-block px-4 py-1 rounded-full bg-[#E8C2B8]/50 text-[#7A3A35] text-xs font-sans font-bold tracking-widest uppercase">
                                {content.ladiesColors}
                            </div>
                            <p className="text-sm text-gray-700 font-serif">
                                {content.ladiesItems}
                            </p>
                            <p className="text-xs text-gray-500 italic font-sans">
                                {content.ladiesNote}
                            </p>
                        </div>

                        {/* GENTLEMEN PANEL */}
                        <div className="p-8 rounded-3xl bg-gradient-to-b from-[#FDF9ED] to-[#F5ECE3] border border-[#E3D4B8] shadow-sm space-y-4">
                            <div className="w-12 h-12 rounded-full bg-[#E3D4B8]/30 border border-[#E3D4B8] flex items-center justify-center mx-auto">
                                <GoldIcon name="crown" className="w-6 h-6 stroke-[#65502B]" />
                            </div>
                            <h4 className="text-xl font-serif text-[#65502B] font-bold uppercase tracking-wider">
                                {content.gentlemenTitle}
                            </h4>
                            <div className="inline-block px-4 py-1 rounded-full bg-[#E3D4B8]/50 text-[#65502B] text-xs font-sans font-bold tracking-widest uppercase">
                                {content.gentlemenColors}
                            </div>
                            <p className="text-sm text-gray-700 font-serif">
                                {content.gentlemenItems}
                            </p>
                            <p className="text-xs text-gray-500 italic font-sans">
                                {content.dressCodeOutro}
                            </p>
                        </div>
                    </div>
                </motion.section>
            </div>


            {/* SECTION 7: PROGRAMME (THE DAY) */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat relative border-b border-[#D4AF37]/20 py-20 px-4 flex items-center min-h-[60vh] "
                style={{ backgroundImage: `url("${SECTION_BG_PHOTOS.programme}")` }}
            >
                {/* Left-aligned content scrim */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5ECE3]/85 via-[#F5ECE3]/60 to-[#F5ECE3]/40 md:to-transparent" />
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={sectionVariant}
                    className="relative z-10 w-full max-w-6xl mx-auto flex justify-center md:justify-start"
                >
                    <div className="w-full max-w-2xl bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/30 shadow-md text-center space-y-6">
                        <div className="space-y-1">
                            <span className="text-xs tracking-[0.25em] text-[#997010] font-sans uppercase">the day</span>
                            <h3 className="text-2xl sm:text-3xl font-serif tracking-wider text-[#052219] uppercase">
                                {content.programmeHeaderTitle}
                            </h3>
                            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
                        </div>

                        <div className="space-y-4 max-w-xl mx-auto">
                            {content.programmeItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between p-4 bg-white/70 rounded-2xl border border-[#D4AF37]/25 shadow-sm text-left hover:border-[#D4AF37] transition-all duration-300"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-full bg-[#FAF3F0] border border-[#D4AF37]/40 flex items-center justify-center">
                                            <GoldIcon name={item.icon} className="w-5 h-5 stroke-[#997010]" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-serif font-bold text-[#052219]">
                                                {item.title}
                                            </h4>
                                            <span className="text-xs text-[#997010] font-sans">
                                                {item.time}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            </div>


            {/* SECTION 8: WALIMA MENU */}
            <div
                className="w-full bg-[#FAF6F0] py-20 px-4 border-b border-[#D4AF37]/20"
            >
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={sectionVariant}
                    className="py-16 px-6 max-w-3xl mx-auto text-center space-y-8"
                >
                    <div className="p-8 sm:p-12 bg-white/95 rounded-3xl border-2 border-[#D4AF37]/40 shadow-xl space-y-8 relative overflow-hidden">
                        {/* Decorative background visual flourishes */}
                        <div className="absolute -top-12 -left-12 w-28 h-28 rounded-full border border-[#D4AF37]/15" />
                        <div className="absolute -bottom-12 -right-12 w-28 h-28 rounded-full border border-[#D4AF37]/15" />

                        <div className="space-y-1 relative z-10">
                            <span className="text-xs tracking-[0.25em] text-[#997010] font-sans uppercase">the</span>
                            <h3 className="text-2xl sm:text-3xl font-serif tracking-wider text-[#052219] uppercase font-bold">
                                {content.menuHeaderTitle}
                            </h3>
                            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
                        </div>

                        <div className="space-y-6 relative z-10">
                            {/* STARTERS */}
                            <div className="space-y-1">
                                <h4 className="text-xs tracking-[0.2em] font-sans text-[#997010] font-bold uppercase">
                                    — {content.startersTitle} —
                                </h4>
                                <p className="text-sm sm:text-base text-gray-800 font-serif leading-relaxed">
                                    {content.startersItems}
                                </p>
                            </div>

                            {/* MAINS */}
                            <div className="space-y-1">
                                <h4 className="text-xs tracking-[0.2em] font-sans text-[#997010] font-bold uppercase">
                                    — {content.mainsTitle} —
                                </h4>
                                <p className="text-sm sm:text-base text-gray-800 font-serif leading-relaxed">
                                    {content.mainsItems}
                                </p>
                            </div>

                            {/* DESSERTS */}
                            <div className="space-y-1">
                                <h4 className="text-xs tracking-[0.2em] font-sans text-[#997010] font-bold uppercase">
                                    — {content.dessertsTitle} —
                                </h4>
                                <p className="text-sm sm:text-base text-gray-800 font-serif leading-relaxed font-normal">
                                    {content.dessertsItems}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>


            {/* SECTION 9: A BLESSED BEGINNING */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat relative border-b border-[#D4AF37]/20 py-20 px-4 flex items-center min-h-[70vh]"
                style={{ backgroundImage: `url("${SECTION_BG_PHOTOS.blessed}")` }}
            >
                {/* Right-aligned content scrim */}
                <div className="absolute inset-0 bg-gradient-to-l from-[#F5ECE3]/85 via-[#F5ECE3]/60 to-[#F5ECE3]/40 md:to-transparent" />
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={sectionVariant}
                    className="relative z-10 w-full max-w-6xl mx-auto flex justify-center md:justify-end"
                >
                    <div className="w-full max-w-2xl bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/30 shadow-md text-center space-y-6">
                        <div className="space-y-1">
                            <span className="text-xs tracking-[0.25em] text-[#997010] font-sans uppercase">qur'an verse</span>
                            <h3 className="text-2xl sm:text-3xl font-serif tracking-wider text-[#052219] uppercase font-bold">
                                {content.blessedBeginningHeaderTitle}
                            </h3>
                            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
                        </div>

                        <div className="p-6 bg-[#FAF6F0] rounded-2xl border border-[#D4AF37]/25 space-y-2 max-w-xl mx-auto shadow-sm">
                            <p className="text-2xl font-serif text-[#052219]" dir="rtl">
                                {content.blessedVerseArabic}
                            </p>
                            <p className="text-sm italic text-gray-700 font-serif leading-relaxed">
                                {content.blessedVerseTranslation}
                            </p>
                            <p className="text-xs text-[#997010] font-sans uppercase tracking-[0.1em]">
                                {content.blessedVerseSource}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 text-left max-w-3xl mx-auto">
                            {content.blessedPoints.map((pt, idx) => (
                                <div key={idx} className="p-5 bg-white/80 rounded-2xl border border-[#D4AF37]/15 shadow-sm space-y-1 hover:border-[#D4AF37] transition-colors duration-300">
                                    <h4 className="text-xs tracking-wider font-sans font-bold text-[#997010] uppercase">
                                        {pt.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-gray-700 font-sans leading-relaxed">
                                        {pt.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="text-base sm:text-lg font-serif text-[#052219] italic pt-2 font-bold">
                            {content.blessedDua}
                        </p>
                    </div>
                </motion.section>
            </div>


            {/* SECTION 10: A KIND REQUEST */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat relative border-b border-[#D4AF37]/20 py-20 px-4 flex items-center min-h-[50vh]"
                style={{ backgroundImage: `url("${SECTION_BG_PHOTOS.request}")` }}
            >
                {/* Left-aligned content scrim */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5ECE3]/85 via-[#F5ECE3]/60 to-[#F5ECE3]/40 md:to-transparent" />
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={sectionVariant}
                    className="relative z-10 w-full max-w-6xl mx-auto flex justify-center md:justify-start"
                >
                    <div className="w-full max-w-2xl bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/30 shadow-md text-center space-y-6">
                        <div className="space-y-4">
                            <span className="text-xs tracking-[0.25em] text-[#997010] font-sans uppercase block">
                                {content.kindRequestSubtitle}
                            </span>
                            <h3 className="text-2xl font-serif text-[#052219] uppercase font-bold">
                                {content.kindRequestHeaderTitle}
                            </h3>
                            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto" />
                            <p className="text-sm text-gray-700 font-sans leading-relaxed whitespace-pre-line max-w-lg mx-auto">
                                {content.kindRequestBody}
                            </p>
                            <p className="text-sm text-[#052219] font-serif italic pt-2 font-bold">
                                {content.kindRequestJazakallah}
                            </p>
                        </div>
                    </div>
                </motion.section>
            </div>


            {/* SECTION 11: RSVP */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat relative border-b border-[#D4AF37]/20 py-20 px-4 flex items-center min-h-[60vh]"
                style={{ backgroundImage: `url("${SECTION_BG_PHOTOS.rsvp}")` }}
            >
                {/* Centered content scrim */}
                <div className="absolute inset-0 bg-[#F5ECE3]/45" />
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={sectionVariant}
                    className="relative z-10 w-full max-w-6xl mx-auto flex justify-center"
                >
                    <div className="w-full max-w-2xl bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/30 shadow-md text-center space-y-6">
                        {/* Decorative Gold Monogram Seal Badge */}
                        <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] flex items-center justify-center mx-auto bg-[#FAF6F0] shadow-md">
                            <span className="font-serif font-bold text-[#D4AF37] text-lg tracking-wider">
                                {content.monogram}
                            </span>
                        </div>

                        <div className="space-y-4">
                            {/* Full Bismillah String with generous height & padding to prevent clipping */}
                            <div className="py-2 inline-block overflow-visible max-w-full" dir="rtl">
                                <span className="text-xl sm:text-2xl text-[#997010] font-serif leading-[2] drop-shadow-sm select-none">
                                    {content.rsvpBismillah}
                                </span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-serif tracking-wider text-[#052219] uppercase font-bold">
                                {content.rsvpSubtitle}
                            </h3>
                            <p className="text-sm text-gray-600 font-sans max-w-md mx-auto whitespace-pre-line leading-relaxed">
                                {content.rsvpInstructions}
                            </p>
                        </div>

                        <button
                            onClick={handleRSVPWhatsApp}
                            className="px-8 py-4 bg-[#052219] text-[#F8E8C7] hover:bg-[#0B3B2B] hover:scale-105 active:scale-95 transition-all duration-300 text-xs tracking-widest font-sans uppercase rounded-full shadow-lg border border-[#D4AF37] flex items-center justify-center mx-auto space-x-2"
                        >
                            <GoldIcon name="whatsapp" className="w-5 h-5 stroke-[#F8E8C7]" />
                            <span>{content.rsvpButtonLabel}</span>
                        </button>
                    </div>
                </motion.section>
            </div>


            {/* SECTION 12: DARK EMERALD FOOTER */}
            <footer className="w-full bg-[#031810] text-white py-16 px-6 text-center border-t-2 border-[#D4AF37]/50 space-y-8">
                <div className="max-w-3xl mx-auto space-y-6">
                    {/* Full Bismillah String with generous height & padding to prevent clipping */}
                    <div className="py-2 inline-block overflow-visible max-w-full" dir="rtl">
                        <span className="text-2xl sm:text-3xl text-[#D4AF37] font-serif leading-[2] drop-shadow-md select-none">
                            {content.bismillah}
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-serif tracking-widest text-white">
                        {content.footerTitle}
                    </h2>
                    <p className="text-xs tracking-widest text-[#F8E8C7]/80 font-sans">
                        10 · 10 · 2026
                    </p>

                    <div className="py-4 border-y border-[#D4AF37]/30 max-w-lg mx-auto space-y-2">
                        <p className="text-xl sm:text-2xl font-serif text-[#F8E8C7] leading-relaxed" dir="rtl">
                            {content.footerDuaArabic}
                        </p>
                        <p className="text-xs text-white/70 italic font-sans">
                            {content.footerDuaTranslation}
                        </p>
                    </div>

                    <div className="space-y-3 pt-4">
                        <span className="text-xs tracking-[0.25em] text-[#D4AF37] font-sans uppercase">
                            {content.footerFamilyGratitude}
                        </span>
                        <h4 className="text-lg font-serif italic text-white/90 font-bold">
                            {content.footerJazakallah}
                        </h4>
                        <p className="text-xs sm:text-sm text-white/70 font-sans max-w-lg mx-auto leading-relaxed whitespace-pre-line">
                            {content.footerClosingBody}
                        </p>
                        <p className="text-sm font-serif italic text-[#F8E8C7] pt-2">
                            {content.footerLookingForward}
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

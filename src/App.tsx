import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTENT, SupportedLanguage, NASHEED_AUDIO_URL } from './data/content';
import { RevealPage } from './components/RevealPage';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { AudioPlayer } from './components/AudioPlayer';

/*
  FLOW:
  1) Landing = clickbutton.mp4 video, paused on frame 1, fullscreen.
     User taps -> video plays with sound.
  2) When video ends -> cross-fade into RevealPage (mainbackgroundvideo.mp4 bg).
  3) No coded envelope, no wax seal, no butterflies — just the video.
*/

export const App: React.FC = () => {
    const [lang, setLang] = useState<SupportedLanguage>('en');
    const [isOpened, setIsOpened] = useState(false);
    const [hasStartedVideo, setHasStartedVideo] = useState(false);
    const [isPlayingAudio, setIsPlayingAudio] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const introVideoRef = useRef<HTMLVideoElement | null>(null);

    const currentContent = CONTENT[lang];
    const isRTL = lang === 'ar';

    // Tap anywhere on first screen -> play the clickbutton video
    const handleTapToPlay = () => {
        if (hasStartedVideo) return; // prevent double-tap
        setHasStartedVideo(true);

        if (introVideoRef.current) {
            introVideoRef.current.currentTime = 0;
            introVideoRef.current.muted = true; // Always muted
            introVideoRef.current
                .play()
                .catch((err) => {
                    console.log('Video autoplay error:', err);
                    setIsOpened(true);
                });

            // Keep playback brief - transition after 3.5 seconds
            setTimeout(() => {
                handleVideoEnded();
            }, 3500);
        }
    };

    // Intro video finished -> transition to main reveal page
    const handleVideoEnded = () => {
        setIsOpened((prev) => {
            if (prev) return prev; // prevent duplicate transition

            // Golden confetti burst
            try {
                confetti({
                    particleCount: 65,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#D4AF37', '#F8E8C7', '#AA820A', '#C5A059', '#155D44'],
                });
            } catch (e) {
                console.log('Confetti error:', e);
            }

            // Start background nasheed audio
            if (audioRef.current) {
                audioRef.current.volume = 0.45;
                audioRef.current
                    .play()
                    .then(() => setIsPlayingAudio(true))
                    .catch((err) => {
                        console.log('Audio autoplay prevented:', err);
                        setIsPlayingAudio(false);
                    });
            }

            return true;
        });
    };

    // Toggle nasheed audio
    const handleToggleAudio = () => {
        if (!audioRef.current) return;
        if (isPlayingAudio) {
            audioRef.current.pause();
            setIsPlayingAudio(false);
        } else {
            audioRef.current.volume = 0.45;
            audioRef.current
                .play()
                .then(() => setIsPlayingAudio(true))
                .catch((err) => console.log('Audio play error:', err));
        }
    };

    // RTL sync
    useEffect(() => {
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }, [lang, isRTL]);

    return (
        <div className={`min-h-screen w-full bg-black relative overflow-x-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
            {/* Background Nasheed Audio */}
            <audio ref={audioRef} src={NASHEED_AUDIO_URL} loop preload="auto" />

            {/* Language Switcher */}
            <LanguageSwitcher
                currentLang={lang}
                onSelectLang={(selected) => setLang(selected)}
            />

            {/* ============================================ */}
            {/* STATE 1 & STATE 2 Flow managed with AnimatePresence */}
            {/* ============================================ */}
            <AnimatePresence mode="wait">
                {!isOpened ? (
                    <motion.div
                        key="intro-landing-screen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: 'easeIn' }}
                        onClick={handleTapToPlay}
                        className="fixed inset-0 z-40 bg-black w-screen h-dvh flex items-center justify-center cursor-pointer select-none overflow-hidden"
                        style={{ height: '100dvh' }}
                    >
                        {/* The intro video - fills viewport on mobile cleanly */}
                        <video
                            ref={introVideoRef}
                            playsInline
                            preload="auto"
                            muted
                            onEnded={handleVideoEnded}
                            className="w-full h-full object-cover"
                            style={{ height: '100dvh', width: '100vw' }}
                        >
                            <source src="/videos/clickbutton.mp4" type="video/mp4" />
                            <source src="/click button.mp4" type="video/mp4" />
                        </video>

                        {/* "TAP TO OPEN" hint overlay - only before user taps */}
                        {!hasStartedVideo && (
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-24 pointer-events-none">
                                <div className="animate-pulse text-center bg-black/25 backdrop-blur-[1px] px-6 py-3 rounded-full border border-white/10">
                                    <p className="text-[11px] tracking-[0.4em] text-[#F8E8C7] uppercase font-serif drop-shadow-md">
                                        {currentContent.tapToOpen}
                                    </p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <motion.main
                        key="wedding-contents"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.0, ease: 'easeOut' }}
                        className="min-h-screen w-full"
                    >
                        <RevealPage content={currentContent} isRTL={isRTL} />
                    </motion.main>
                )}
            </AnimatePresence>

            {/* Audio Controller (visible once main page opens) */}
            {isOpened && (
                <AudioPlayer
                    isPlaying={isPlayingAudio}
                    onToggle={handleToggleAudio}
                    soundOnLabel={currentContent.soundOn}
                    soundOffLabel={currentContent.soundOff}
                />
            )}
        </div>
    );
};

export default App;


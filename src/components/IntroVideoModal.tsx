import React, { useRef, useEffect } from 'react';

interface IntroVideoModalProps {
    videoSrc: string;
    fallbackVideoSrc?: string;
    onEnded: () => void;
    bismillah?: string;
    tapToOpen?: string;
}

export const IntroVideoModal: React.FC<IntroVideoModalProps> = ({
    videoSrc,
    fallbackVideoSrc,
    onEnded,
}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current
                .play()
                .catch((err) => {
                    console.log('Video autoplay error (retrying muted):', err);
                    if (videoRef.current) {
                        videoRef.current.muted = true;
                        videoRef.current.play().catch((e) => console.log('Muted play error:', e));
                    }
                });
        }
    }, []);

    const handleVideoError = () => {
        if (fallbackVideoSrc && videoRef.current && videoRef.current.src !== fallbackVideoSrc) {
            videoRef.current.src = fallbackVideoSrc;
            videoRef.current.play().catch(() => onEnded());
        } else {
            onEnded();
        }
    };

    return (
        <div
            onClick={onEnded}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden cursor-pointer select-none"
        >
            <video
                ref={videoRef}
                playsInline
                autoPlay
                onEnded={onEnded}
                onError={handleVideoError}
                className="w-full h-full object-cover pointer-events-none"
                style={{ objectFit: 'cover' }}
            >
                <source src={videoSrc} type="video/mp4" />
                {fallbackVideoSrc && <source src={fallbackVideoSrc} type="video/mp4" />}
            </video>
        </div>
    );
};

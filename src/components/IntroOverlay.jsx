import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroVideo from '../assets/hero-video.mp4';
import heroBg from '../assets/hero-bg.png'; // Import fallback image
import './IntroOverlay.css';

const IntroOverlay = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleVideoEnd = () => {
        setIsVisible(false);
        setTimeout(onComplete, 800); // Wait for exit animation
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="intro-overlay"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: '-100%' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    onClick={handleVideoEnd} // Allow tap anywhere to skip/enter
                >
                    <video
                        className="intro-video"
                        autoPlay
                        muted
                        playsInline
                        poster={heroBg} // Fallback image if video doesn't load/play
                        onEnded={handleVideoEnd}
                    >
                        <source src={heroVideo} type="video/mp4" />
                    </video>

                    <div className="intro-content">
                        <h1 className="intro-brand">FESTOGRAPH</h1>
                        <button className="btn-enter" onClick={(e) => {
                            e.stopPropagation(); // Prevent double triggering if button clicked
                            handleVideoEnd();
                        }}>
                            Enter Site
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroOverlay;

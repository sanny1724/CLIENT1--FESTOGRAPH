import HomeHero from '../components/HomeHero';
import HomeServices from '../components/HomeServices';
import HomePortfolio from '../components/HomePortfolio';
import HomeTestimonials from '../components/HomeTestimonials';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import IntroOverlay from '../components/IntroOverlay';

const Home = () => {
    const [showIntro, setShowIntro] = useState(true);

    // If user has visited before, skip intro (optional persistent behavior, keeping it simple for now)
    // useEffect(() => { ... }, []);

    const handleIntroComplete = () => {
        setShowIntro(false);
    };

    return (
        <>
            {showIntro && <IntroOverlay onComplete={handleIntroComplete} />}
            {/* Main Content - Always rendered to establish layout */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                <HomeHero startAnimation={!showIntro} />

                <section className="section about-intro text-center container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>About Festograph</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            We are a professional photography brand specializing in weddings, baby shoots, documentaries, fashion, product, food, and travel photography.
                            Our goal is to capture authentic emotions, real stories, and timeless moments that you will cherish forever.
                        </p>
                    </motion.div>
                </section>

                <HomePortfolio />

                <HomeServices />

                <HomeTestimonials />

                <section className="section cta-section text-center" style={{ background: 'var(--bg-card)', padding: '4rem 0' }}>
                    <div className="container">
                        <h2 style={{ marginBottom: '1rem' }}>Ready to Create Something Beautiful?</h2>
                        <p style={{ marginBottom: '2rem' }}>Let's tell your story together.</p>
                        <a href="https://forms.gle/yuDE9Z9dPK8ZDdac7" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Quick Enquiry
                        </a>
                    </div>
                </section>
            </motion.div>
        </>
    );
};

export default Home;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';
import './HomeHero.css';

const HomeHero = ({ startAnimation = true }) => {
    return (
        <section className="hero-section">
            <div className="hero-background">
                <img src={heroBg} alt="Cinematic Wedding Photography" />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content container">
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <span className="block-reveal">Frame the Fest,</span>
                    <br />
                    <span className="block-reveal delay-1">Feel the Moment.</span>
                </motion.h1>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    <a href="https://forms.gle/yuDE9Z9dPK8ZDdac7" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Book Now
                    </a>
                    <Link to="/portfolio" className="btn btn-outline">
                        View Portfolio
                    </Link>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={startAnimation ? { opacity: 1, y: [0, 10, 0] } : { opacity: 0 }}
                transition={startAnimation ? { delay: 2, duration: 2, repeat: Infinity } : { duration: 0 }}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default HomeHero;

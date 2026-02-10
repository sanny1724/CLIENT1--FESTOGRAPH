import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        }
    };

    const linkVariants = {
        closed: { y: 20, opacity: 0 },
        open: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            }
        })
    };

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Book Us', path: '/book-us' },
        { name: 'Blog', path: '/blog' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="header-container">
                    <div className="logo-section">
                        <Link to="/" className="brand-link">
                            <span className="brand-name">FESTOGRAPH</span>
                            <span className="brand-subtitle">Srikaredyshashi Photography</span>
                        </Link>
                    </div>

                    <div className="header-actions">
                        <a href="https://wa.me/919391439407?text=Hello%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="call-btn btn-outline mobile-hide">
                            <Phone size={18} style={{ marginRight: '8px' }} />
                            WhatsApp
                        </a>

                        <button className="menu-btn" onClick={toggleMenu} aria-label="Menu">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        className="mobile-nav"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <div className="nav-content">
                            <ul className="nav-links">
                                {links.map((link, i) => (
                                    <motion.li
                                        key={link.name}
                                        custom={i}
                                        variants={linkVariants}
                                    >
                                        <Link to={link.path} className="nav-link">
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="menu-footer">
                                <a href="https://wa.me/919391439407?text=Hello%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="menu-call-btn">
                                    <Phone size={20} /> WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;

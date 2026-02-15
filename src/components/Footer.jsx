import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="footer-logo">FESTOGRAPH</h2>
                        <p className="footer-tagline">Frame the Fest, Feel the Moment.</p>
                        <div className="social-links">
                            <a href="https://www.instagram.com/srikaredyshashi_photography?igsh=eHdqdGM1cWowb250" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Instagram size={24} />
                                <span>@srikaredyshashi_photography</span>
                            </a>
                            <a href="mailto:festo.graphsrikaredyshashi@gmail.com" aria-label="Email">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Explore</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/book-us">Book Us</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p><Phone size={16} /> +91 93914 39407</p>
                        <p><Mail size={16} /> festo.graphsrikaredyshashi@gmail.com</p>
                        <p><MapPin size={16} /> Hyderabad, Telangana</p>
                        <a href="https://forms.gle/yuDE9Z9dPK8ZDdac7" target="_blank" rel="noopener noreferrer" className="btn btn-primary footer-cta">
                            Get a Quote
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Festograph by Srikaredyshashi Photography. All rights reserved.</p>
                    <a href="/admin" className="admin-link" style={{ opacity: 0.3, fontSize: '0.8rem', color: 'inherit', textDecoration: 'none', marginLeft: '10px' }}>Admin Login</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

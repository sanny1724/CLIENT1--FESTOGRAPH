import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="page-container"
            style={{ paddingTop: 120, minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
                <h1 className="text-gold mb-5">Get In Touch</h1>

                <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="contact-item" style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px' }}>
                        <Phone size={32} color="#d4af37" style={{ marginBottom: '1rem' }} />
                        <h3>Call Us</h3>
                        <a href="tel:+919391439407" style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>+91 93914 39407</a>
                    </div>

                    <div className="contact-item" style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px' }}>
                        <Mail size={32} color="#d4af37" style={{ marginBottom: '1rem' }} />
                        <h3>Email Us</h3>
                        <a href="mailto:festo.graphsrikaredyshashi@gmail.com" style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>festo.graphsrikaredyshashi@gmail.com</a>
                    </div>

                    <div className="contact-item" style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px' }}>
                        <Instagram size={32} color="#d4af37" style={{ marginBottom: '1rem' }} />
                        <h3>Follow Us</h3>
                        <a href="https://www.instagram.com/fest.oages?igsh=Y3RrY2RmMzFyazgz" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>@fest.oages</a>
                    </div>

                    <div className="contact-item" style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px' }}>
                        <Mail size={32} color="#d4af37" style={{ marginBottom: '1rem' }} />
                        <h3>Send Enquiry</h3>
                        <a href="https://forms.gle/yuDE9Z9dPK8ZDdac7" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Fill Enquiry Form</a>
                    </div>
                </div>

                <div className="contact-item-location" style={{ marginTop: '2rem', color: 'var(--text-muted)' }}>
                    <MapPin size={24} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                    <span>Hyderabad, Telangana</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;

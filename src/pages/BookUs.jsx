import { motion } from 'framer-motion';

const BookUs = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="page-container"
            style={{ paddingTop: 120, paddingBottom: 60, minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <div className="container text-center">
                <h1 className="text-gold mb-4">Book Your Shoot</h1>
                <p className="text-muted mb-5" style={{ fontSize: '1.2rem', maxWidth: 600, margin: '0 auto 2rem' }}>
                    We cover weddings, baby shoots, fashion portfolios, and more.
                    Tell us about your requirements and we'll get back to you within 24 hours.
                </p>

                <div className="booking-options" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                    <a
                        href="https://forms.gle/yuDE9Z9dPK8ZDdac7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}
                    >
                        Fill Booking Form
                    </a>

                    <div className="divider" style={{ width: '100px', height: '1px', background: 'var(--text-muted)', opacity: 0.3 }}></div>

                    <p>Or prefer to chat?</p>
                    <a
                        href="https://wa.me/919391439407"
                        className="btn btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default BookUs;

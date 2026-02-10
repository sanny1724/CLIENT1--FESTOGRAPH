import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const allTestimonials = [
    {
        rating: 5,
        text: "Absolutely stunning photos! The team captured every emotion at our wedding perfectly. Highly recommended!",
        name: "Anil & Priya",
        type: "Wedding Photography"
    },
    {
        rating: 5,
        text: "Professional, patient, and creative. They made our baby shoot so comfortable and the results are angelic.",
        name: "Sneha Reddy",
        type: "Baby Shoot"
    },
    {
        rating: 5,
        text: "Incredible eye for detail. The product photos elevated our brand image significantly.",
        name: "Rahul Mehta",
        type: "Product Photography"
    },
    {
        rating: 5,
        text: "The best travel photos I've ever seen. Captured the essence of the place beautifully.",
        name: "Vikram S.",
        type: "Travel Photography"
    },
    {
        rating: 5,
        text: "Super friendly and accommodating team. Loved the experience.",
        name: "Arjun K.",
        type: "Portrait Session"
    }
];

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="page-container"
            style={{ paddingTop: 120, paddingBottom: 60 }}
        >
            <div className="container" style={{ maxWidth: '1000px' }}>
                <h1 className="text-gold mb-5 text-center">What People Say</h1>

                <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {allTestimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className="testimonial-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                background: 'var(--bg-card)',
                                padding: '2rem',
                                borderRadius: '8px',
                                textAlign: 'left',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                            }}
                        >
                            <div className="rating" style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                                {[...Array(t.rating)].map((_, idx) => (
                                    <Star key={idx} size={16} fill="#d4af37" stroke="#d4af37" />
                                ))}
                            </div>
                            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--text-light)' }}>
                                "{t.text}"
                            </p>
                            <div className="client-info">
                                <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.25rem' }}>{t.name}</h4>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t.type}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Testimonials;

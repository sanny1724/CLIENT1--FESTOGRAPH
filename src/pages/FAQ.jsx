import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
    { question: "How do we book you?", answer: "You can reach out to us via our 'Book Us' page by filling the form, or simply click the WhatsApp button to chat instantly. We require a 50% advance to confirm the date." },
    { question: "Do you travel for destination weddings?", answer: "Yes! We love traveling. Travel and accommodation charges are to be borne by the client." },
    { question: "When will we get the photos?", answer: "For weddings, we deliver the first set of edited pictures within 2 weeks. The full set and album design take about 4-6 weeks." },
    { question: "What is your payment policy?", answer: "We take 50% advance to block the dates, 40% on the event day, and remaining 10% before final delivery." },
    { question: "Can we reschedule?", answer: "Rescheduling is subject to availability. Please let us know at least 15 days in advance." }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (i) => {
        setActiveIndex(activeIndex === i ? null : i);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="page-container"
            style={{ paddingTop: 120, minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 className="text-gold mb-5 text-center">Frequently Asked Questions</h1>

                <div className="faq-list">
                    {faqs.map((faq, i) => (
                        <div key={i} className="faq-item" style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <button
                                className="faq-question"
                                onClick={() => toggle(i)}
                                style={{
                                    width: '100%',
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--text-light)',
                                    textAlign: 'left',
                                    padding: '1.5rem 0',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                {faq.question}
                                <span style={{ fontSize: '1.5rem', color: 'var(--accent-gold)' }}>{activeIndex === i ? '-' : '+'}</span>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ height: activeIndex === i ? 'auto' : 0, opacity: activeIndex === i ? 1 : 0 }}
                                style={{ overflow: 'hidden' }}
                            >
                                <p style={{ paddingBottom: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                    {faq.answer}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default FAQ;

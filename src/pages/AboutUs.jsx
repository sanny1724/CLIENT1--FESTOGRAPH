import { motion } from 'framer-motion';

const values = [
    'Authenticity: Capturing real emotions over staged poses.',
    'Creativity: Bringing a unique, cinematic perspective to every shoot.',
    'Professionalism: Timely delivery and respectful communication.',
    'Quality: Premium editing and high-resolution deliverables.'
];

const AboutUs = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="page-container"
            style={{ paddingTop: 120, paddingBottom: 60 }}
        >
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 className="text-gold mb-5 text-center">Our Story</h1>

                <div className="about-content">
                    <p className="mb-4" style={{ fontSize: '1.1rem' }}>
                        <strong>Festograph</strong> (by Srikaredyshashi Photography) was born from a passion for storytelling through the lens.
                        Started in Hyderabad, we have grown into a team of dedicated photographers and cinematographers who believe
                        that every moment is precious and deserves to be preserved beautifully.
                    </p>

                    <p className="mb-5" style={{ fontSize: '1.1rem' }}>
                        We specialize in capturing the unscripted, candid moments that make life special. Whether it's the tear in a father's eye
                        at a wedding, the first smile of a newborn, or the rugged beauty of a mountain landscape, we tend to every detail with care.
                    </p>

                    <h3 className="mb-4 text-gold">Why Choose Us?</h3>
                    <ul className="values-list" style={{ listStyle: 'none', padding: 0 }}>
                        {values.map((val, i) => (
                            <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                                <span style={{ color: 'var(--accent-gold)', marginRight: '1rem', fontSize: '1.5rem' }}>•</span>
                                <span style={{ fontSize: '1.1rem' }}>{val}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutUs;

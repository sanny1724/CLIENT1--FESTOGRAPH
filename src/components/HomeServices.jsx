import { motion } from 'framer-motion';
import { Heart, Camera, Video, Map, Utensils, Star } from 'lucide-react';
import './HomeServices.css';

const services = [
    { icon: Heart, title: 'Wedding Photography', desc: 'Capturing your special day with elegance and emotion.' },
    { icon: Star, title: 'Baby Shoot', desc: 'Preserving the innocent and precious moments of your little ones.' },
    { icon: Video, title: 'Documentary', desc: 'Telling real stories through unscripted and raw visuals.' },
    { icon: Camera, title: 'Fashion', desc: 'Editorial and commercial shoots with a stylistic edge.' },
    { icon: Utensils, title: 'Product & Food', desc: 'Mouth-watering visuals for brands and restaurants.' },
    { icon: Map, title: 'Travel & Street', desc: 'Exploration and culture captured through the lens.' },
];

const HomeServices = () => {
    return (
        <section className="section services-section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Our Expertise</h2>
                    <p className="section-subtitle">Diverse photography services tailored to your needs.</p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            className="service-card"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="service-icon">
                                <service.icon size={32} />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeServices;

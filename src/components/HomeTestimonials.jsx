import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './HomeTestimonials.css';

const testimonials = [
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
    }
];

const HomeTestimonials = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipe = (newDirection) => {
        setDirection(newDirection);
        setIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    };

    return (
        <section className="section testimonials-section">
            <div className="container text-center">
                <h2 className="section-title">Client Love</h2>
                <p className="section-subtitle">What our happy clients say about us.</p>

                <div className="testimonial-slider">
                    <button className="slider-btn prev" onClick={() => swipe(-1)}>
                        <ChevronLeft size={24} />
                    </button>

                    <div className="slider-content">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="testimonial-card"
                            >
                                <div className="stars">
                                    {[...Array(testimonials[index].rating)].map((_, i) => (
                                        <Star key={i} size={20} fill="#d4af37" stroke="#d4af37" />
                                    ))}
                                </div>
                                <p className="review-text">"{testimonials[index].text}"</p>
                                <div className="client-info">
                                    <h4>{testimonials[index].name}</h4>
                                    <span>{testimonials[index].type}</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button className="slider-btn next" onClick={() => swipe(1)}>
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeTestimonials;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';
import babySample from '../assets/baby-sample.png';
import travelSample from '../assets/travel-sample.png';
import fashionSample from '../assets/fashion-sample.jpg';
import documentarySample from '../assets/documentary-sample.jpg';
import productSample from '../assets/product-sample.jpg';
import './HomePortfolio.css';

const portfolioItems = [
    { id: 1, category: 'Wedding', src: heroBg, title: 'Eternal Love' },
    { id: 2, category: 'Baby', src: babySample, title: 'First Smiles' },
    { id: 3, category: 'Travel', src: travelSample, title: 'Mountain Peaks' },
    { id: 4, category: 'Fashion', src: fashionSample, title: 'Urban Chic' },
    { id: 5, category: 'Product', src: productSample, title: 'Minimalist Watch' },
    { id: 6, category: 'Documentary', src: documentarySample, title: 'Street Life' },
];

const HomePortfolio = () => {
    const [selectedId, setSelectedId] = useState(null);

    const openLightbox = (id) => setSelectedId(id);
    const closeLightbox = () => setSelectedId(null);

    const selectedItem = portfolioItems.find(item => item.id === selectedId);

    const nextImage = (e) => {
        e.stopPropagation();
        const currentIndex = portfolioItems.findIndex(item => item.id === selectedId);
        const nextIndex = (currentIndex + 1) % portfolioItems.length;
        setSelectedId(portfolioItems[nextIndex].id);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        const currentIndex = portfolioItems.findIndex(item => item.id === selectedId);
        const prevIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
        setSelectedId(portfolioItems[prevIndex].id);
    };

    return (
        <section className="section portfolio-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Selected Works</h2>
                    <p className="section-subtitle">A glimpse into our visual storytelling.</p>
                </div>

                <div className="portfolio-grid">
                    {portfolioItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className="portfolio-item"
                            layoutId={`portfolio-item-${item.id}`}
                            onClick={() => openLightbox(item.id)}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={item.src} alt={item.title} loading="lazy" />
                            <div className="portfolio-overlay">
                                <h3>{item.category}</h3>
                                <p>{item.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-3">
                    <Link to="/portfolio" className="btn btn-outline">View Full Portfolio</Link>
                </div>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <button className="lightbox-close" onClick={closeLightbox}>
                            <X size={32} />
                        </button>

                        <button className="lightbox-nav prev" onClick={prevImage}>
                            <ChevronLeft size={48} />
                        </button>

                        <motion.div
                            className="lightbox-content"
                            layoutId={`portfolio-item-${selectedId}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedItem.src} alt={selectedItem.title} />
                            <div className="lightbox-info">
                                <h3>{selectedItem.title}</h3>
                                <p>{selectedItem.category}</p>
                            </div>
                        </motion.div>

                        <button className="lightbox-nav next" onClick={nextImage}>
                            <ChevronRight size={48} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default HomePortfolio;

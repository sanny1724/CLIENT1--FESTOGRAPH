import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';
import babySample from '../assets/baby-sample.png';
import travelSample from '../assets/travel-sample.png';
import fashionSample from '../assets/fashion-sample.jpg';
import documentarySample from '../assets/documentary-sample.jpg';
import productSample from '../assets/product-sample.jpg';
import foodSample from '../assets/food-sample.jpg';
import '../components/HomePortfolio.css';

// Extended portfolio items (reusing images for demonstration)
const allItems = [
    { id: 1, category: 'Wedding', src: heroBg, title: 'Eternal Love' },
    { id: 2, category: 'Baby', src: babySample, title: 'First Smiles' },
    { id: 3, category: 'Travel', src: travelSample, title: 'Mountain Peaks' },
    { id: 4, category: 'Fashion', src: fashionSample, title: 'Urban Chic' },
    { id: 5, category: 'Product', src: productSample, title: 'Minimalist Watch' },
    { id: 6, category: 'Documentary', src: documentarySample, title: 'Street Life' },
    { id: 7, category: 'Food', src: foodSample, title: 'Gourmet Delight' },
];

const categories = ['All', 'Wedding', 'Baby', 'Travel', 'Fashion', 'Product', 'Food', 'Documentary'];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [visibleItems, setVisibleItems] = useState(allItems);

    const handleFilter = (category) => {
        setFilter(category);
        if (category === 'All') {
            setVisibleItems(allItems);
        } else {
            setVisibleItems(allItems.filter(item => item.category === category));
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="page-content"
            style={{ paddingTop: 100 }}
        >
            <div className="container">
                <h1 className="page-title text-center text-gold mb-4">Our Portfolio</h1>

                <div className="filter-buttons text-center mb-5" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleFilter(cat)}
                            className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
                            style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className="portfolio-grid">
                    <AnimatePresence>
                        {visibleItems.map(item => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="portfolio-item"
                            >
                                <img src={item.src} alt={item.title} loading="lazy" />
                                <div className="portfolio-overlay">
                                    <h3>{item.category}</h3>
                                    <p>{item.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Portfolio;

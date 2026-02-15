import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPortfolioItems } from '../utils/getPortfolio';
import heroBg from '../assets/hero-bg.png';
import babySample from '../assets/baby-sample.png';
import travelSample from '../assets/travel-sample.png';
import fashionSample from '../assets/fashion-sample.jpg';
import documentarySample from '../assets/documentary-sample.jpg';
import productSample from '../assets/product-sample.jpg';
import foodSample from '../assets/food-sample.jpg';
import '../components/HomePortfolio.css';

// Demo items (Static)
const demoItems = [
    { id: 'demo-1', category: 'Wedding', src: heroBg, title: 'Eternal Love' },
    { id: 'demo-2', category: 'Baby', src: babySample, title: 'First Smiles' },
    { id: 'demo-3', category: 'Travel', src: travelSample, title: 'Mountain Peaks' },
    { id: 'demo-4', category: 'Fashion', src: fashionSample, title: 'Urban Chic' },
    { id: 'demo-5', category: 'Product', src: productSample, title: 'Minimalist Watch' },
    { id: 'demo-6', category: 'Documentary', src: documentarySample, title: 'Street Life' },
    { id: 'demo-7', category: 'Food', src: foodSample, title: 'Gourmet Delight' },
];

const categories = ['All', 'Wedding', 'Baby', 'Travel', 'Fashion', 'Product', 'Food', 'Documentary'];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [allItems, setAllItems] = useState(demoItems);
    const [visibleItems, setVisibleItems] = useState(demoItems);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const dynamicItems = await getPortfolioItems();
                // Merge demo items with dynamic items
                const combined = [...dynamicItems, ...demoItems];
                setAllItems(combined);
                // Apply current filter to new data
                if (filter === 'All') {
                    setVisibleItems(combined);
                } else {
                    setVisibleItems(combined.filter(item => item.category === filter));
                }
            } catch (error) {
                console.error("Failed to load portfolio items", error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, [filter]); // Re-run if filter changes? No, filter is handled locally. Dependency on [] is fine, but logical update needed inside.

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

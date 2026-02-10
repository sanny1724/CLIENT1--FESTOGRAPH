import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const posts = [
    { id: 1, title: 'Top 5 Locations for Pre-Wedding Shoots inside Hyderabad', date: 'Feb 10, 2026', category: 'Locations & Experiences' },
    { id: 2, title: 'How to Prepare for Your Baby Photo Session', date: 'Jan 25, 2026', category: 'Shoot Stories' },
    { id: 3, title: 'Choosing the Right Photographer for Your Wedding', date: 'Jan 10, 2026', category: 'Case Studies' },
    { id: 4, title: 'Behind the Scenes: A Day in the Life of a Photographer', date: 'Dec 15, 2025', category: 'Behind the Scenes' },
];

const Blog = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="page-container"
            style={{ paddingTop: 120, paddingBottom: 60 }}
        >
            <div className="container">
                <h1 className="text-gold mb-5 text-center">Our Blog</h1>

                <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {posts.map(post => (
                        <div key={post.id} className="blog-card" style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }}>
                            <span className="blog-category" style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>{post.category}</span>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--text-light)', fontSize: '1.25rem' }}>{post.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Full story coming soon...</p>
                            <div className="blog-meta" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                {post.date}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Blog;

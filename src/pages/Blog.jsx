import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../utils/getBlog';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getBlogPosts();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

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
                    {posts.length > 0 ? (
                        posts.map(post => (
                            <div key={post.id} className="blog-card" style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', transition: 'transform 0.3s' }}>
                                <span className="blog-category" style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>{post.category}</span>
                                {post.thumbnail && (
                                    <img src={post.thumbnail} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} />
                                )}
                                <h3 style={{ marginBottom: '1rem', color: 'var(--text-light)', fontSize: '1.25rem' }}>{post.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    {post.body}
                                </p>
                                <div className="blog-meta" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                    {formatDate(post.date)}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-muted col-12">No blog posts yet. Check back soon!</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Blog;

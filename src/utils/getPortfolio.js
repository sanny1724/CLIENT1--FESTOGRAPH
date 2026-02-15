/**
 * Fetches all portfolio items from src/content/portfolio
 * Returns an array of objects with { id, title, category, src }
 */
export const getPortfolioItems = async () => {
    const modules = import.meta.glob('../content/portfolio/*.json');
    const items = [];

    for (const path in modules) {
        const mod = await modules[path]();
        // Default export contains the JSON content
        const data = mod.default || mod;

        // Create a stable ID from the filename
        const id = path.split('/').pop().replace('.json', '');

        items.push({
            id,
            title: data.title,
            category: data.category,
            src: data.image,
        });
    }

    return items;
};

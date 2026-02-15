/**
 * Fetches all portfolio items from src/content/portfolio
 * Returns an array of objects with { id, title, category, src }
 * Supports both JSON and Markdown (frontmatter) files.
 */
export const getPortfolioItems = async () => {
    const jsonModules = import.meta.glob('../content/portfolio/*.json');
    const mdModules = import.meta.glob('../content/portfolio/*.md', { query: '?raw', import: 'default' });

    const items = [];

    // Process JSON files
    for (const path in jsonModules) {
        const mod = await jsonModules[path]();
        const data = mod.default || mod;
        const id = path.split('/').pop().replace('.json', '');
        items.push({
            id,
            title: data.title,
            category: data.category,
            src: data.image,
        });
    }

    // Process Markdown files (simple frontmatter parser)
    for (const path in mdModules) {
        const rawContent = await mdModules[path]();
        const id = path.split('/').pop().replace('.md', '');

        // Parse frontmatter
        const lines = rawContent.split('\n');
        const data = {};
        let inFrontmatter = false;

        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed === '---') {
                if (inFrontmatter) break; // End of frontmatter
                inFrontmatter = true;
                continue;
            }

            if (inFrontmatter && trimmed.includes(':')) {
                const [key, ...valueParts] = trimmed.split(':');
                const value = valueParts.join(':').trim();
                if (key && value) {
                    data[key.trim()] = value;
                }
            }
        }

        if (data.image) {
            items.push({
                id,
                title: data.title || 'Untitled',
                category: data.category || 'Uncategorized',
                src: data.image,
            });
        }
    }

    return items;
};

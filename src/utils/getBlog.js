/**
 * Fetches all blog posts from src/content/blog
 * Returns an array of objects with { id, title, date, category, thumbnail, body }
 * Sorted by date (newest first)
 */
export const getBlogPosts = async () => {
    const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' });
    const posts = [];

    for (const path in modules) {
        const rawContent = await modules[path]();
        const id = path.split('/').pop().replace('.md', '');

        // Parse frontmatter
        const lines = rawContent.split('\n');
        const data = {};
        let body = [];
        let inFrontmatter = false;
        let frontmatterDone = false;

        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed === '---') {
                if (inFrontmatter) {
                    inFrontmatter = false;
                    frontmatterDone = true;
                    continue;
                }
                if (!frontmatterDone) {
                    inFrontmatter = true;
                    continue;
                }
            }

            if (inFrontmatter && trimmed.includes(':')) {
                const [key, ...valueParts] = trimmed.split(':');
                const value = valueParts.join(':').trim();
                if (key && value) {
                    // Handle quoted strings if any
                    data[key.trim()] = value.replace(/^['"](.*)['"]$/, '$1');
                }
            } else if (frontmatterDone) {
                body.push(line);
            }
        }

        posts.push({
            id,
            title: data.title || 'Untitled',
            date: data.date || '',
            category: data.category || 'General',
            thumbnail: data.thumbnail || null,
            body: body.join('\n').trim(),
        });
    }

    // Sort by date descending
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

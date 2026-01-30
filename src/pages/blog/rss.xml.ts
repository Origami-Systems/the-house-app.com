import type { APIRoute } from "astro";
import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

function formatDate(date: Date) {
    date.setUTCHours(0);
    return date;
}

export const GET: APIRoute = async (context) => {
    const unsortedPosts = await getCollection('blog');
    const posts = unsortedPosts.sort(
        (a, b) => Number(b.data.timestamp) - Number(a.data.timestamp),
    );

    return rss({
        title: "The House App",
        description: "Updates and news from The House App",
        site: (context.site as URL).href,
        items: posts.map(({ data }) => ({
            title: data.title,
            description: data.description,
            link: `/blog/${data.slug}/`,
            pubDate: formatDate(data.timestamp),
        })),
    })
}

import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@tailwindcss/vite';
import remarkWikiLink from 'remark-wiki-link';
import remarkObsidianCallout from 'remark-obsidian-callout';
import { visit } from 'unist-util-visit';

// Remark plugin to strip Obsidian hashtags (#tag)
function remarkStripHashtags() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (node.value && typeof node.value === 'string') {
        node.value = node.value.replace(/(^|\s)#([a-zA-Z0-9_\-\/]+)/g, '$1');
      }
    });
  };
}

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  vite: {
    plugins: [tailwind()],
  },
  markdown: {
    remarkPlugins: [
      [remarkWikiLink, {
        pageResolver: (name) => [name.toLowerCase().replace(/ /g, '-')],
        hrefTemplate: (permalink) => `/blog/${permalink}`,
        aliasDivider: '|',
      }],
      remarkObsidianCallout,
      remarkStripHashtags,
    ],
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
  site: 'https://rockyxwall.com',
});

# Dark-Themed Developer Portfolio (Astro + Obsidian + YouTube)

A minimalist, terminal-inspired developer portfolio built with Astro, Tailwind CSS v4, and powered by Obsidian.

## Features

- 🌑 **Dark Theme**: Terminal-meets-editorial aesthetic with a sharp typographic hierarchy.
- 📝 **Obsidian as CMS**: Write your blog posts and projects in Obsidian. The `src/content` folder IS your vault.
- 🎥 **YouTube Integration**: Showcase your latest videos automatically using the YouTube Data API.
- ⚡ **Astro 5**: High-performance static site generation.
- 🎨 **Tailwind CSS v4**: Modern, CSS-first styling.
- ☁️ **Cloudflare Deploy**: Ready for deployment to Cloudflare Workers.

## Getting Started

### 1. Clone and Install
```bash
git clone <your-repo>
cd my-portfolio
bun install
```

### 2. Obsidian Setup
1. Open Obsidian.
2. Select "Open folder as vault".
3. Choose the `src/content/` directory in this project.
4. (Optional) Install the **Templater** plugin and point it to the `_template.md` files for quick post creation.

### 3. YouTube API
1. Get a YouTube Data API v3 key from the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a `.env` file from `.env.example`.
3. Add your API key: `YOUTUBE_API_KEY=your_key_here`.
4. Update `CHANNEL_ID` in `src/lib/youtube.ts`.

### 4. Development
```bash
bun run dev
```

## Writing Content

Use the templates in `src/content/blog/_template.md` and `src/content/projects/_template.md`. 
Set `draft: false` in the frontmatter when you're ready to publish.

Wiki-links (`[[Note Title]]`) and Obsidian callouts (`> [!TIP]`) are supported out of the box.

## Deployment

### Cloudflare Workers
```bash
bun run deploy
```
Or connect your GitHub repository to Cloudflare Pages/Workers for automatic deployments.

## License
MIT

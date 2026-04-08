import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DIST_DIR = path.resolve(__dirname, '../dist')
const INDEX_PATH = path.join(DIST_DIR, 'index.html')

if (!fs.existsSync(INDEX_PATH)) {
    console.error('index.html not found in dist/')
    process.exit(1)
}

const templateHtml = fs.readFileSync(INDEX_PATH, 'utf-8')

const routes = [
    {
        path: '/methodology',
        title: 'Our Methodology | Looper & Co.',
        description: 'Discover the Looper Framework: a disciplined, human-first approach to operations automation, tool selection, and ROI for your business.',
        canonical: 'https://looperandco.com/methodology'
    },
    {
        path: '/partners',
        title: 'Our Partners | Looper & Co.',
        description: 'Meet the Partners at Looper & Co. Operations veterans turned technology builders who speak the language of business first and code second.',
        canonical: 'https://looperandco.com/partners'
    },
    {
        path: '/blog',
        title: 'Blog | Looper & Co.',
        description: 'Insights and practical takes on AI, automation, and operations for construction, trades, and industrial services.',
        canonical: 'https://looperandco.com/blog'
    },
    {
        path: '/privacy',
        title: 'Privacy Policy | Looper & Co.',
        description: 'Privacy Policy for Looper & Co. LLC.',
        canonical: 'https://looperandco.com/privacy'
    },
    {
        path: '/terms',
        title: 'Terms of Service | Looper & Co.',
        description: 'Terms of Service for Looper & Co. LLC.',
        canonical: 'https://looperandco.com/terms'
    }
]

// Add dynamic blog posts from src/content/blog
const blogDir = path.resolve(__dirname, '../src/content/blog')
if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'))
    for (const file of files) {
        const content = fs.readFileSync(path.join(blogDir, file), 'utf-8')
        const match = content.match(/^---\n([\s\S]*?)\n---/)
        let title = 'Blog Post | Looper & Co.'
        let desc = 'Read this article from Looper & Co.'
        if (match) {
            const block = match[1]
            for (const line of block.split('\n')) {
                const idx = line.indexOf(':')
                if (idx === -1) continue
                const key = line.slice(0, idx).trim()
                let value = line.slice(idx + 1).trim()
                if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1)
                }
                if (key === 'title') title = `${value} | Looper & Co.`
                if (key === 'excerpt') desc = value
            }
        }
        const slug = file.replace('.md', '')
        routes.push({
            path: `/blog/${slug}`,
            title: title,
            description: desc,
            canonical: `https://looperandco.com/blog/${slug}`
        })
    }
}

routes.forEach(route => {
    let newHtml = templateHtml

    // Replace Title
    newHtml = newHtml.replace(
        /<title>.*?<\/title>/s,
        `<title>${route.title}</title>`
    )

    // Replace Description
    newHtml = newHtml.replace(
        /<meta name="description"([\s\S]*?)>/s,
        `<meta name="description" content="${route.description}" />`
    )

    // Replace og:title
    newHtml = newHtml.replace(
        /<meta property="og:title"([\s\S]*?)>/s,
        `<meta property="og:title" content="${route.title}" />`
    )

    // Replace og:description
    newHtml = newHtml.replace(
        /<meta property="og:description"([\s\S]*?)>/s,
        `<meta property="og:description" content="${route.description}" />`
    )

    // Replace og:url
    newHtml = newHtml.replace(
        /<meta property="og:url"([\s\S]*?)>/s,
        `<meta property="og:url" content="${route.canonical}" />`
    )

    // Replace twitter:title
    newHtml = newHtml.replace(
        /<meta name="twitter:title"([\s\S]*?)>/s,
        `<meta name="twitter:title" content="${route.title}" />`
    )

    // Replace twitter:description
    newHtml = newHtml.replace(
        /<meta name="twitter:description"([\s\S]*?)>/s,
        `<meta name="twitter:description" content="${route.description}" />`
    )

    // Inject canonical BEFORE closing head
    newHtml = newHtml.replace(
        /<\/head>/,
        `  <link rel="canonical" href="${route.canonical}" />\n</head>`
    )

    // Ensure dir exists
    const routeDir = path.join(DIST_DIR, route.path)
    fs.mkdirSync(routeDir, { recursive: true })

    fs.writeFileSync(path.join(routeDir, 'index.html'), newHtml, 'utf-8')
    console.log(`Generated HTML for ${route.path}`)
})

console.log('Postbuild pre-rendering complete.')

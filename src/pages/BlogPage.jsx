import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'

function parseFrontmatter(raw) {
    const match = raw.match(/^---\n([\s\S]*?)\n---/)
    if (!match) return {}
    const block = match[1]
    const meta = {}
    for (const line of block.split('\n')) {
        const idx = line.indexOf(':')
        if (idx === -1) continue
        const key = line.slice(0, idx).trim()
        let value = line.slice(idx + 1).trim()
        // Handle quoted strings
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1)
        }
        // Handle arrays
        if (value.startsWith('[') && value.endsWith(']')) {
            value = value.slice(1, -1).split(',').map(s => {
                s = s.trim()
                if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
                    s = s.slice(1, -1)
                }
                return s
            })
        }
        meta[key] = value
    }
    return meta
}

const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true })

function getAllPosts() {
    const posts = []
    for (const [path, raw] of Object.entries(modules)) {
        const slug = path.split('/').pop().replace('.md', '')
        const meta = parseFrontmatter(raw)
        posts.push({ slug, ...meta })
    }
    // Sort by date descending
    posts.sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    return posts
}

export default function BlogPage() {
    const [selectedTag, setSelectedTag] = useState('All')
    const posts = getAllPosts()

    const allTags = ['All', ...new Set(posts.flatMap(p => Array.isArray(p.tags) ? p.tags : []))]
    const filtered = selectedTag === 'All' ? posts : posts.filter(p => Array.isArray(p.tags) && p.tags.includes(selectedTag))

    return (
        <>
            <Helmet>
                <title>Blog | Looper & Co.</title>
                <meta name="description" content="Insights and practical takes on AI, automation, and operations for construction, trades, and industrial services." />
                <link rel="canonical" href="https://looperandco.com/blog" />
            </Helmet>
            <Header />
            <main>
                {/* Hero */}
                <section className="bg-gallery-white pt-32 pb-16 px-6 md:px-12">
                    <div className="max-w-screen-2xl mx-auto">
                        <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-4 block">
                            Insights
                        </span>
                        <h1 className="font-headline text-5xl md:text-7xl text-deep-forest mb-6">
                            The <span className="serif-italic">Blog</span>
                        </h1>
                        <p className="font-body text-lg text-secondary max-w-xl">
                            Practical takes on AI, automation, and operations for
                            construction, trades, and industrial services.
                        </p>
                    </div>
                </section>

                {/* Tag filters */}
                <section className="bg-gallery-white px-6 md:px-12 pb-8">
                    <div className="max-w-screen-2xl mx-auto flex flex-wrap gap-3">
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`font-label text-xs uppercase tracking-widest px-4 py-2 rounded-sm transition-all duration-200 cursor-pointer ${
                                    selectedTag === tag
                                        ? 'bg-deep-forest text-white'
                                        : 'bg-surface-container-high text-secondary hover:bg-deep-forest/10'
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Post grid */}
                <section className="bg-gallery-white py-12 md:py-16 px-6 md:px-12">
                    <div className="max-w-screen-2xl mx-auto">
                        {filtered.length === 0 ? (
                            <p className="font-body text-secondary text-center py-24">
                                No posts yet. Check back soon.
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filtered.map(post => (
                                    <Link
                                        key={post.slug}
                                        to={`/blog/${post.slug}`}
                                        className="group flex flex-col bg-white border border-deep-forest/5 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="p-8 flex flex-col flex-1">
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {Array.isArray(post.tags) && post.tags.map(tag => (
                                                    <span key={tag} className="font-label text-[10px] uppercase tracking-widest text-secondary bg-surface-container-high px-2 py-1 rounded-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <h2 className="font-headline text-xl md:text-2xl text-deep-forest mb-3 group-hover:text-deep-forest/80 transition-colors duration-200">
                                                {post.title}
                                            </h2>

                                            <p className="font-body text-sm text-secondary leading-relaxed mb-6 flex-1">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <span className="font-label text-[10px] uppercase tracking-widest text-secondary/60">
                                                    {post.date} {post.author && `\u00B7 ${post.author}`}
                                                </span>
                                                <span className="font-label text-xs uppercase tracking-widest text-deep-forest group-hover:translate-x-1 transition-transform duration-200">
                                                    Read &rarr;
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

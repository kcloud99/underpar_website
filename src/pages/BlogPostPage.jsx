import { useParams, Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'

function parseFrontmatter(raw) {
    const match = raw.match(/^---\n([\s\S]*?)\n---/)
    if (!match) return { meta: {}, content: raw }
    const block = match[1]
    const content = raw.slice(match[0].length).trim()
    const meta = {}
    for (const line of block.split('\n')) {
        const idx = line.indexOf(':')
        if (idx === -1) continue
        const key = line.slice(0, idx).trim()
        let value = line.slice(idx + 1).trim()
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1)
        }
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
    return { meta, content }
}

const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true })

function getPost(slug) {
    for (const [path, raw] of Object.entries(modules)) {
        const fileSlug = path.split('/').pop().replace('.md', '')
        if (fileSlug === slug) {
            return parseFrontmatter(raw)
        }
    }
    return null
}

export default function BlogPostPage() {
    const { slug } = useParams()
    const post = getPost(slug)

    if (!post) {
        return (
            <>
                <Helmet>
                    <title>Post Not Found | Looper & Co.</title>
                </Helmet>
                <Header />
                <main className="bg-gallery-white min-h-[60vh] flex items-center justify-center px-6">
                    <div className="text-center">
                        <h1 className="font-headline text-4xl text-deep-forest mb-4">Post not found</h1>
                        <Link to="/blog" className="font-label text-sm uppercase tracking-widest text-deep-forest border-b border-deep-forest/30 pb-1">
                            &larr; Back to Blog
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        )
    }

    const { meta, content } = post

    return (
        <>
            <Helmet>
                <title>{meta.title ? `${meta.title} | Looper & Co.` : 'Blog Post | Looper & Co.'}</title>
                <meta name="description" content={meta.excerpt || "Read this article from Looper & Co."} />
                <link rel="canonical" href={`https://looperandco.com/blog/${slug}`} />
            </Helmet>
            <Header />
            <main>
                {/* Post header */}
                <section className="bg-gallery-white pt-32 pb-12 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto">
                        <Link
                            to="/blog"
                            className="font-label text-xs uppercase tracking-widest text-secondary hover:text-deep-forest transition-colors duration-200 mb-8 inline-block"
                        >
                            &larr; Back to Blog
                        </Link>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {Array.isArray(meta.tags) && meta.tags.map(tag => (
                                <span key={tag} className="font-label text-[10px] uppercase tracking-widest text-secondary bg-surface-container-high px-2 py-1 rounded-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="font-headline text-4xl md:text-5xl text-deep-forest leading-tight mb-6">
                            {meta.title}
                        </h1>

                        <div className="flex items-center gap-4 font-label text-xs uppercase tracking-widest text-secondary/60">
                            {meta.author && <span>{meta.author}</span>}
                            {meta.author && meta.date && <span className="text-secondary/30">|</span>}
                            {meta.date && <span>{meta.date}</span>}
                        </div>

                        <div className="w-full h-px bg-deep-forest/10 mt-10" />
                    </div>
                </section>

                {/* Post content */}
                <section className="bg-gallery-white pb-24 md:pb-32 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto prose-up">
                        <Markdown
                            components={{
                                h2: ({ children }) => (
                                    <h2 className="font-headline text-2xl md:text-3xl text-deep-forest mt-12 mb-4">
                                        {children}
                                    </h2>
                                ),
                                h3: ({ children }) => (
                                    <h3 className="font-headline text-xl md:text-2xl text-deep-forest mt-10 mb-3">
                                        {children}
                                    </h3>
                                ),
                                p: ({ children }) => (
                                    <p className="font-body text-base text-on-surface leading-relaxed mb-6">
                                        {children}
                                    </p>
                                ),
                                ul: ({ children }) => (
                                    <ul className="font-body text-base text-on-surface leading-relaxed mb-6 ml-6 list-disc space-y-2">
                                        {children}
                                    </ul>
                                ),
                                ol: ({ children }) => (
                                    <ol className="font-body text-base text-on-surface leading-relaxed mb-6 ml-6 list-decimal space-y-2">
                                        {children}
                                    </ol>
                                ),
                                li: ({ children }) => (
                                    <li className="font-body text-base text-on-surface leading-relaxed">
                                        {children}
                                    </li>
                                ),
                                strong: ({ children }) => (
                                    <strong className="font-bold text-deep-forest">{children}</strong>
                                ),
                                em: ({ children }) => (
                                    <em className="serif-italic text-deep-forest">{children}</em>
                                ),
                                a: ({ href, children }) => (
                                    <a
                                        href={href}
                                        className="text-deep-forest border-b border-primary-fixed/40 hover:border-primary-fixed transition-colors duration-200"
                                    >
                                        {children}
                                    </a>
                                ),
                                hr: () => (
                                    <hr className="border-deep-forest/10 my-10" />
                                ),
                                blockquote: ({ children }) => (
                                    <blockquote className="border-l-2 border-primary-fixed pl-6 my-8 italic text-secondary">
                                        {children}
                                    </blockquote>
                                ),
                            }}
                        >
                            {content}
                        </Markdown>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-deep-forest py-16 md:py-20 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-headline text-3xl md:text-4xl text-gallery-white mb-4">
                            Ready to see what AI can do for <span className="serif-italic text-primary-fixed">your</span> operations?
                        </h2>
                        <p className="font-body text-gallery-white/70 mb-8">
                            Book a free 60-minute consultation and we&rsquo;ll map out the opportunities together.
                        </p>
                        <Link
                            to="/#contact"
                            className="inline-block bg-primary-fixed text-deep-forest px-8 py-4 font-label uppercase tracking-widest text-sm font-bold rounded-sm hover:bg-white transition-colors duration-300"
                        >
                            Book a Free Consultation
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/ui'
import { getBlogBySlug, getAllBlogSlugs } from '@/lib/content'

// Required for static export - only pre-generated pages are valid
export const dynamicParams = false

/**
 * Generate static paths for all blog posts.
 * Returns empty array when no content exists - build will succeed
 * but no blog detail pages will be generated until content is added.
 */
export function generateStaticParams(): Array<{ slug: string }> {
  try {
    const slugs = getAllBlogSlugs()
    // When no blogs exist, return a placeholder that will 404 gracefully
    // This satisfies Next.js static export requirements
    if (slugs.length === 0) {
      return [{ slug: '_placeholder' }]
    }
    return slugs.map((slug) => ({ slug }))
  } catch {
    // If content directory doesn't exist or other errors, return placeholder
    return [{ slug: '_placeholder' }]
  }
}

// Generate metadata for SEO
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params

  // Handle placeholder gracefully
  if (params.slug === '_placeholder') {
    return { title: 'Blog Not Found' }
  }

  const blog = await getBlogBySlug(params.slug)

  if (!blog) {
    return {
      title: 'Blog Not Found',
    }
  }

  return {
    title: `${blog.title} | CA Surbhi Srivastava Bhartiya`,
    description: blog.summary,
  }
}

export default async function BlogPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params

  // Handle placeholder - show 404
  if (params.slug === '_placeholder') {
    notFound()
  }

  const blog = await getBlogBySlug(params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <article className="py-16 sm:py-24">
      <Container size="narrow">
        {/* Back link */}
        <Link
          href="/blogs"
          className="inline-flex items-center text-primary-600 hover:text-accent-600 transition-colors mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blogs
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 text-sm text-primary-500 mb-4">
            <time dateTime={blog.date}>
              {formatDate(blog.date)}
            </time>
            {blog.pinned && (
              <span className="inline-flex items-center gap-1 text-accent-600 font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 leading-tight">
            {blog.title}
          </h1>

          {blog.summary && (
            <p className="mt-4 text-lg text-primary-600 leading-relaxed">
              {blog.summary}
            </p>
          )}
        </header>

        {/* Divider */}
        <div className="h-px bg-primary-200 mb-10" />

        {/* Content */}
        <div
          className="prose prose-lg prose-primary max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-primary-200">
          <Link
            href="/blogs"
            className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            View all blogs
          </Link>
        </footer>
      </Container>
    </article>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

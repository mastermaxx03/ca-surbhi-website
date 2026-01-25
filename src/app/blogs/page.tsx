import Link from 'next/link'
import { Container, SectionHeader } from '@/components/ui'
import { getAllBlogs } from '@/lib/content'

export const metadata = {
  title: 'Blogs | CA Surbhi Srivastava Bhartiya',
  description: 'Expert insights on taxation, financial literacy, debt management, and RBI guidelines.',
}

export default function BlogsPage() {
  const blogs = getAllBlogs()

  if (blogs.length === 0) {
    return (
      <section className="py-16 sm:py-24">
        <Container size="narrow">
          <SectionHeader
            title="Blogs"
            subtitle="Expert insights on taxation, financial literacy, and more"
          />
          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-6">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <p className="text-primary-600 text-lg">Blog posts coming soon.</p>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          title="Blogs"
          subtitle="Expert insights on taxation, financial literacy, and more"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="bg-white border border-primary-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <Link href={`/blogs/${blog.slug}`} className="block p-6">
                <div className="flex items-center gap-2 text-sm text-primary-500 mb-3">
                  <time dateTime={blog.date}>
                    {formatDate(blog.date)}
                  </time>
                  {blog.pinned && (
                    <span className="inline-flex items-center gap-1 text-accent-600">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Pinned
                    </span>
                  )}
                </div>

                <h2 className="text-lg font-semibold text-primary-900 mb-2 line-clamp-2">
                  {blog.title}
                </h2>

                <p className="text-primary-600 text-sm line-clamp-3">
                  {blog.summary}
                </p>

                <div className="mt-4 inline-flex items-center text-accent-600 text-sm font-medium">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
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

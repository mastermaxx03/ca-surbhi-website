import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// ============================================
// TYPES
// ============================================

export interface ContentMetadata {
  title: string
  summary: string
  date: string
  showInWhatsNew: boolean
  pinned: boolean
  priority: number
}

export interface BlogPost extends ContentMetadata {
  slug: string
  content: string
}

export interface Announcement extends ContentMetadata {
  slug: string
  content: string
}

// Future: ImportantLink type can be added here
// export interface ImportantLink extends ContentMetadata {
//   slug: string
//   linkUrl: string
//   linkDescription: string
// }

export interface WhatsNewItem {
  title: string
  summary: string
  date: string
  type: 'blog' | 'announcement' // Future: | 'important-link'
  url: string
  pinned: boolean
  priority: number
}

// ============================================
// PATHS - Centralized path configuration
// Content is stored as Markdown files with frontmatter.
// This module is CMS-agnostic and works with any system
// that writes Markdown files to the content directory.
// ============================================

const CONTENT_DIR = path.join(process.cwd(), 'content')

const CONTENT_PATHS = {
  blogs: path.join(CONTENT_DIR, 'blogs'),
  announcements: path.join(CONTENT_DIR, 'announcements'),
  // Future: Add more content types here
  // 'important-links': path.join(CONTENT_DIR, 'important-links'),
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Generate a slug from a filename.
 * Removes date prefix and .md extension.
 * e.g., "2025-01-15-my-post.md" -> "my-post"
 */
function generateSlug(filename: string): string {
  return filename
    .replace(/\.md$/, '')
    .replace(/^\d{4}-\d{2}-\d{2}-/, '') // Remove date prefix if present
}

/**
 * Parse frontmatter with safe defaults for optional fields.
 * Handles missing or malformed metadata gracefully.
 */
function parseMetadata(data: Record<string, unknown>): ContentMetadata {
  return {
    title: (data.title as string) || 'Untitled',
    summary: (data.summary as string) || '',
    date: (data.date as string) || new Date().toISOString(),
    showInWhatsNew: Boolean(data.showInWhatsNew),
    pinned: Boolean(data.pinned),
    priority: typeof data.priority === 'number' ? data.priority : 3,
  }
}

/**
 * Convert markdown content to HTML.
 */
async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

/**
 * Read all markdown files from a directory.
 * Returns empty array if directory doesn't exist or is empty.
 */
function getMarkdownFiles(directory: string): string[] {
  try {
    if (!fs.existsSync(directory)) {
      return []
    }
    return fs.readdirSync(directory).filter((file) => file.endsWith('.md'))
  } catch {
    return []
  }
}

// ============================================
// BLOG FUNCTIONS
// ============================================

/**
 * Get all blog posts (metadata only, for listing).
 * Returns empty array if no blogs exist.
 */
export function getAllBlogs(): Omit<BlogPost, 'content'>[] {
  const files = getMarkdownFiles(CONTENT_PATHS.blogs)

  if (files.length === 0) {
    return []
  }

  const blogs = files.map((filename) => {
    const filePath = path.join(CONTENT_PATHS.blogs, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    const metadata = parseMetadata(data)

    return {
      ...metadata,
      slug: generateSlug(filename),
    }
  })

  // Sort by date (newest first)
  return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Get a single blog post by slug (with full content).
 * Returns null if blog doesn't exist.
 */
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const files = getMarkdownFiles(CONTENT_PATHS.blogs)

  if (files.length === 0) {
    return null
  }

  // Find the file that matches the slug
  const filename = files.find((file) => generateSlug(file) === slug)

  if (!filename) {
    return null
  }

  const filePath = path.join(CONTENT_PATHS.blogs, filename)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const metadata = parseMetadata(data)
  const htmlContent = await markdownToHtml(content)

  return {
    ...metadata,
    slug,
    content: htmlContent,
  }
}

/**
 * Get all blog slugs (for static generation).
 * Returns empty array if no blogs exist.
 */
export function getAllBlogSlugs(): string[] {
  const files = getMarkdownFiles(CONTENT_PATHS.blogs)
  return files.map((filename) => generateSlug(filename))
}

// ============================================
// ANNOUNCEMENT FUNCTIONS
// ============================================

/**
 * Get all announcements (metadata only).
 * Returns empty array if no announcements exist.
 */
export function getAllAnnouncements(): Omit<Announcement, 'content'>[] {
  const files = getMarkdownFiles(CONTENT_PATHS.announcements)

  if (files.length === 0) {
    return []
  }

  const announcements = files.map((filename) => {
    const filePath = path.join(CONTENT_PATHS.announcements, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    const metadata = parseMetadata(data)

    return {
      ...metadata,
      slug: generateSlug(filename),
    }
  })

  return announcements.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// ============================================
// WHAT'S NEW AGGREGATION
// ============================================

/**
 * Get aggregated "What's New" items from all content types.
 * Returns empty array if no content exists with showInWhatsNew: true.
 *
 * Sorting priority:
 * 1. pinned === true (always first)
 * 2. priority (ascending: 1 = highest)
 * 3. date (descending: newest first)
 *
 * Future content types can be added by:
 * 1. Creating a getter function (e.g., getAllImportantLinks)
 * 2. Adding to the items array in this function
 */
export function getWhatsNewItems(limit?: number): WhatsNewItem[] {
  const items: WhatsNewItem[] = []

  // Aggregate blogs
  const blogs = getAllBlogs()
  for (const blog of blogs) {
    if (blog.showInWhatsNew) {
      items.push({
        title: blog.title,
        summary: blog.summary,
        date: blog.date,
        type: 'blog',
        url: `/blogs/${blog.slug}`,
        pinned: blog.pinned,
        priority: blog.priority,
      })
    }
  }

  // Aggregate announcements
  const announcements = getAllAnnouncements()
  for (const announcement of announcements) {
    if (announcement.showInWhatsNew) {
      items.push({
        title: announcement.title,
        summary: announcement.summary,
        date: announcement.date,
        type: 'announcement',
        url: '#', // Announcements don't have dedicated pages yet
        pinned: announcement.pinned,
        priority: announcement.priority,
      })
    }
  }

  // Future: Add important links here
  // const importantLinks = getAllImportantLinks()
  // for (const link of importantLinks) {
  //   if (link.showInWhatsNew) {
  //     items.push({
  //       title: link.title,
  //       summary: link.summary,
  //       date: link.date,
  //       type: 'important-link',
  //       url: link.linkUrl,
  //       pinned: link.pinned,
  //       priority: link.priority,
  //     })
  //   }
  // }

  // Sort: pinned first, then by priority (asc), then by date (desc)
  items.sort((a, b) => {
    // Pinned items always come first
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1

    // Then sort by priority (lower number = higher priority)
    if (a.priority !== b.priority) {
      return a.priority - b.priority
    }

    // Finally sort by date (newest first)
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  // Apply limit if specified
  if (limit && limit > 0) {
    return items.slice(0, limit)
  }

  return items
}

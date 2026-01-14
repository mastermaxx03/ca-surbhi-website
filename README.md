# CA Surbhi Srivastava - Professional Website

A modern, professional website for a Chartered Accountant built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Static Export (SSG)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start
```

The development server runs at `http://localhost:3000`.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page
│   ├── services/           # Services page
│   ├── about/              # About page
│   └── contact/            # Contact page
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page sections (Hero, Testimonials, etc.)
│   ├── shared/             # Shared components (Logo, ProfileImage)
│   └── ui/                 # UI primitives (Button, Card, Container)
├── content/                # Content data files
│   ├── site.ts             # Site configuration
│   ├── services.ts         # Services data
│   ├── testimonials.ts     # Client testimonials
│   ├── about.ts            # About page content
│   └── resources.ts        # PDF resources data
├── lib/
│   └── types.ts            # TypeScript type definitions
public/
├── images/                 # Static images
└── resources/              # PDF files
```

## Updating Content

### Site Configuration

Edit `src/content/site.ts` to update:
- CA name and title
- Contact information (email, phone)
- Address details
- Social media links

```typescript
// src/content/site.ts
export const siteConfig: SiteConfig = {
  name: 'CA Your Name',
  title: 'Chartered Accountant',
  email: 'your@email.com',
  phone: '+91 98765 43210',
  // ...
}
```

### Services

Edit `src/content/services.ts` to add, remove, or modify services:

```typescript
export const services: Service[] = [
  {
    id: 'unique-id',
    title: 'Service Title',
    shortDescription: 'Brief description for cards',
    description: 'Full description for services page',
  },
  // ...
]
```

### Testimonials

Edit `src/content/testimonials.ts`:

```typescript
export const testimonials: Testimonial[] = [
  {
    id: '1',
    content: 'Factual, restrained testimonial text.',
    author: 'Client Name',
    role: 'Role/Designation',
    city: 'City',
  },
  // ...
]
```

### About Content

Edit `src/content/about.ts` to update professional background, experience, philosophy, and credentials.

## Adding/Updating Images

### Profile Photo

1. Add your photo to `public/images/profile.jpg`
2. Update the `ProfileImage` component usage or pass the `src` prop:

```tsx
<ProfileImage src="/images/profile.jpg" />
```

### Logo

To replace the text-based logo with an image:

1. Add your logo to `public/images/logo.png`
2. Modify `src/components/shared/Logo.tsx`:

```tsx
import Image from 'next/image'

export function Logo() {
  return (
    <Link href="/">
      <Image src="/images/logo.png" alt="Logo" width={120} height={40} />
    </Link>
  )
}
```

## Adding PDF Resources

### Method 1: Static Files

1. Add PDF files to `public/resources/`
2. Update `src/content/resources.ts`:

```typescript
export const resources: Resource[] = [
  {
    id: 'unique-id',
    title: 'Document Title',
    description: 'Brief description',
    fileUrl: '/resources/your-file.pdf',
    date: '2024-03-15',
    category: 'tax-guide', // tax-guide | compliance | business | general
  },
  // ...
]
```

### Future: Dynamic Resources

When integrating a backend, the `resources.ts` file can be replaced with an API call:

```typescript
// Future implementation
export async function getResources(): Promise<Resource[]> {
  const response = await fetch('/api/resources')
  return response.json()
}
```

## Deployment

### Static Export (Recommended)

The site is configured for static export. Build and deploy to any static hosting:

```bash
npm run build
```

The static files will be in the `out/` directory.

### Hosting Options

- **Vercel**: Connect your Git repo for automatic deployments
- **Netlify**: Drag & drop the `out/` folder or connect Git
- **GitHub Pages**: Push `out/` contents to `gh-pages` branch
- **AWS S3 + CloudFront**: Upload `out/` to S3 bucket

### Vercel Deployment (Easiest)

1. Push code to GitHub/GitLab/Bitbucket
2. Import project on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js and deploys

## Future Extensibility

### Adding a Backend

To enable dynamic content:

1. **Remove static export** from `next.config.js`:
```javascript
const nextConfig = {
  // Remove: output: 'export',
  images: {
    // Configure for your image hosting
  },
}
```

2. **Create API routes** in `src/app/api/`:
```typescript
// src/app/api/resources/route.ts
export async function GET() {
  // Fetch from database
  return Response.json(resources)
}
```

3. **Update content files** to fetch from API instead of static imports.

### Suggested Backend Options

| Option | Best For | Complexity |
|--------|----------|------------|
| **Supabase** | Full-featured with auth, storage, database | Low |
| **Firebase** | Real-time features, authentication | Low |
| **Sanity/Contentful** | Content management (CMS) | Low |
| **PostgreSQL + Prisma** | Custom backend with full control | Medium |

### Adding Blog/Articles

1. Create `src/app/blog/` directory
2. Add content type in `src/lib/types.ts`
3. Create content file `src/content/blog.ts`
4. Build blog listing and detail pages

### Adding Courses Section

1. Create `src/app/courses/` directory
2. Define course types:
```typescript
interface Course {
  id: string
  title: string
  description: string
  syllabus: string[]
  duration: string
  // No pricing - as per ICAI guidelines
}
```

### PDF Upload (Future)

When implementing upload functionality:

1. Set up file storage (Supabase Storage, AWS S3, etc.)
2. Create upload API endpoint
3. Add admin interface for uploading
4. Update resources to fetch from storage

```typescript
// Future upload API example
// src/app/api/resources/upload/route.ts
export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get('file') as File
  // Upload to storage provider
  // Save metadata to database
}
```

### Authentication (Future)

For admin features:

1. Install auth library (NextAuth.js, Supabase Auth)
2. Create login page
3. Protect admin routes with middleware
4. Add admin dashboard for content management

## Design Guidelines

- **Colors**: Neutral palette (slate/gray tones with muted blue accent)
- **Typography**: Professional serif for headings, clean sans-serif for body
- **Animations**: Subtle, professional (fade-in, slide-up only)
- **Tone**: Calm, credible, ICAI-appropriate

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved.

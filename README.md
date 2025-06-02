# Ulaman Bali - Front End Trial

This project is a UI/UX and functionality clone of [ulamanbali.com](https://ulamanbali.com/) as part of the Front End Programmer trial test for Mind Interactive Media.

## 🔗 Live Demo
https://ulaman-clone.vercel.app/

## 📁 Repository
https://github.com/USERNAME/ulaman-clone

## 🛠️ Tech Stack
- [Next.js (TypeScript)](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [Vercel](https://vercel.com/) (deployment)

---

1. If you use JSON data, how would you structure it to support future scalability and maintainability?
- I use section-based modular JSON, so each part (hero, about, gallery, contact) is easy to update or expand individually. This keeps data separate from UI and supports dynamic content loading.

2. If you decide to create your own API, which technology or framework would you use and why?

I use Next.js API Routes because:
- Integrated into the project without setting up a separate backend
- Easy deployment via Vercel
- Supports JSON handling, routing, validation, and headers
- Lightweight and scalable

3. How would you configure a custom domain (e.g. www.clientwebsite.com) to point to your deployed project on Vercel?
Steps:

- Add the custom domain in Vercel dashboard under the project settings.
- Update DNS at domain registrar:
    Type: CNAME
    Value: cname.vercel-dns.com
    Wait for DNS to propagate.
Vercel auto-generates HTTPS with SSL.

4. If your project requires an admin panel to manage the website content, what technologies and approaches would you choose?
I would use Strapi or Sanity.io (headless CMS) because:

- They are open-source and easy to deploy
- Allow content editing, image upload, authentication
- API-first (REST or GraphQL)
- Easily integrates with Next.js frontend

5. What techniques would you use to ensure the website loads quickly even on slow internet connections?
- next/image with lazy loading and automatic optimization
- Compress and preload fonts
- Optimize initial layout shift (CLS)
- Load only visible animations using Framer Motion + useInView
- Reduce JavaScript bundle with dynamic import if needed

6. If you implement a form, how would you securely send the data to the backend server?
- Use HTTPS (default with Vercel)
- Validate input both client- and server-side
- Sanitize request body to avoid XSS/Injection
- Add simple rate-limiting (e.g. using next-rate-limit)
- Avoid logging sensitive data

7. What strategies do you use to optimize images for performance without sacrificing quality?
- Compress using tools like TinyPNG before uploading
- Use WebP or AVIF where supported
- Implement lazy loading
- Use next/image to serve optimized responsive images
- Avoid oversized background images
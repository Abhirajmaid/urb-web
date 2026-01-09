# 🚀 Quick Start - SEO Setup

## Before You Deploy - 5 Minute Checklist

### 1. Update Contact Information (2 min)

**File**: `client/lib/seo.ts`

```typescript
export const siteConfig = {
  email: "info@urbinsurance.com",        // ← Update this
  phone: "+1-XXX-XXX-XXXX",              // ← Update this
  address: {
    street: "Your Street Address",       // ← Update this
    city: "Your City",                   // ← Update this
    state: "Your State",                 // ← Update this
    zip: "Your ZIP",                     // ← Update this
    country: "United States",
  },
};
```

### 2. Update Social Media URLs (1 min)

**File**: `client/components/seo/StructuredData.tsx`

Find line ~35 and update:

```typescript
sameAs: [
  "https://www.facebook.com/urbinsurance",    // ← Update
  "https://www.twitter.com/urbinsurance",     // ← Update
  "https://www.linkedin.com/company/urbinsurance", // ← Update
  "https://www.instagram.com/urbinsurance",   // ← Update
],
```

### 3. Add Google Analytics (Optional, 2 min)

**File**: `client/app/layout.tsx`

Add at the top:
```typescript
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
```

Add inside `<body>` tag:
```typescript
<GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
```

Create `.env.local`:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## After Deployment - Submit to Search Engines

### Google Search Console
1. Go to: https://search.google.com/search-console
2. Add property: `https://urbinsurance.com`
3. Verify ownership
4. Submit sitemap: `https://urbinsurance.com/sitemap.xml`

### Bing Webmaster Tools
1. Go to: https://www.bing.com/webmasters
2. Add your site
3. Submit sitemap: `https://urbinsurance.com/sitemap.xml`

---

## Test Your SEO

Run these tests after deployment:

1. **Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test: `https://urbinsurance.com`

2. **PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Test: `https://urbinsurance.com`

3. **Mobile-Friendly Test**
   - URL: https://search.google.com/test/mobile-friendly
   - Test: `https://urbinsurance.com`

4. **Social Media Preview**
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator

---

## That's It! 🎉

Your SEO is now fully configured. For detailed information, see:
- `SEO-IMPLEMENTATION-SUMMARY.md` - Full overview
- `SEO-GUIDE.md` - Complete documentation

**Expected Results**:
- ✅ Rich snippets in Google search
- ✅ FAQ boxes in search results
- ✅ Review stars (when you add reviews)
- ✅ Better social media sharing
- ✅ Improved search rankings

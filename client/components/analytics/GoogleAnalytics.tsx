"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
  measurementId: string;
}

/**
 * Google Analytics Component
 * 
 * Usage:
 * 1. Get your GA4 Measurement ID from Google Analytics
 * 2. Add it to your environment variables: NEXT_PUBLIC_GA_MEASUREMENT_ID
 * 3. Import this component in your root layout
 * 
 * Example:
 * <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
 */
export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  if (!measurementId) {
    console.warn("Google Analytics Measurement ID is not provided");
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

/**
 * Track custom events
 * 
 * Usage:
 * import { trackEvent } from '@/components/analytics/GoogleAnalytics';
 * 
 * trackEvent('button_click', {
 *   button_name: 'Get Quote',
 *   page_location: window.location.href
 * });
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventParams);
  }
}

/**
 * Track page views (for client-side navigation)
 */
export function trackPageView(url: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
}

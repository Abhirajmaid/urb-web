/** Encode path so spaces in folder name `15 images` work in browsers and next/image. */
function img(name: string) {
  return encodeURI(`/15 images/${name}`);
}

/**
 * Assets live in `client/public/15 images/` (numbered .jpeg files).
 *
 * Allocation: blogs 1–6, case studies 7–8, office / contact use 9, 13–15 and 4–5 for extra slots.
 */
export const SITE_IMAGES = {
  blogs: [
    img("1.jpeg"),
    img("2.jpeg"),
    img("3.jpeg"),
    img("4.jpeg"),
    img("5.jpeg"),
    img("6.jpeg"),
  ],
  caseStudies: {
    extra1: img("7.jpeg"),
    extra2: img("8.jpeg"),
  },
  office: [
    img("9.jpeg"),
    img("13.jpeg"),
    img("14.jpeg"),
    img("15.jpeg"),
    img("9.jpeg"),
    img("4.jpeg"),
    img("5.jpeg"),
  ],
} as const;

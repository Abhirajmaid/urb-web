import Link from "next/link";
import { Logo } from "./Logo";
import { contactDetails } from "@/data/aboutUs";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const resourceLinks = [
  { label: "All services", href: "/services" },
  { label: "Client stories", href: "/case-studies" },
  { label: "Articles & insights", href: "/blogs" },
  { label: "Request a quote", href: "/contact" },
  { label: "Claim assistance", href: "/contact" },
  { label: "Talk to advisor", href: "/contact" },
];

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex w-full min-w-0 flex-col items-stretch">
      <nav className="w-full" aria-label={title}>
        <h3 className="mb-5 block text-xs font-bold uppercase tracking-[0.13em] text-white">
          {title}
        </h3>
        <ul className="flex flex-col gap-3.5 sm:gap-4">
          {links.map((link) => (
            <li key={`${title}-${link.label}`} className="leading-snug">
              <Link
                href={link.href}
                className="inline-block text-sm text-white/80 transition hover:text-white hover:underline decoration-white/40 underline-offset-[5px]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export function Footer() {
  const telHref = `tel:${contactDetails.phone.replace(/\s/g, "")}`;

  return (
    <footer className="relative isolate overflow-hidden bg-[#f4f0ee] text-white">
      <div className="px-4 sm:px-6 lg:px-20 pt-10 sm:pt-6 pb-2 ">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl border border-[#2a1514]/40 bg-[#3b1d1c] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] sm:rounded-3xl">
            <div
              className="h-px bg-[linear-gradient(90deg,transparent,#e8b4b4,transparent)] opacity-80"
              aria-hidden
            />
            <div
              className="h-0.5 bg-[linear-gradient(90deg,#faf7f5_0%,#4e0708_50%,#faf7f5_100%)] opacity-90"
              aria-hidden
            />

            <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:px-14 xl:py-20">
              {/* One row on md+: left = brand + contact, right = links (true horizontal split) */}
              <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-0 lg:gap-x-14 xl:grid-cols-[minmax(280px,400px)_1fr] xl:gap-x-16">
                {/* Left: brand + contact */}
                <div className="min-w-0 max-w-xl md:max-w-none">
                  <Logo />
                  <p className="mt-6 text-sm leading-[1.65] text-white/80 sm:text-[0.9375rem]">
                    Expert team for insurance and wealth creation. Protecting
                    your future with comprehensive coverage, personalised
                    service, and transparent advice.
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-8">
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white">
                      Connect with us
                    </h3>
                    <address className="mt-5 space-y-2.5 not-italic text-sm leading-relaxed text-white/75">
                      <p>
                        <a
                          href={telHref}
                          className="font-medium text-white/90 transition hover:text-white hover:underline"
                        >
                          {contactDetails.phone}
                        </a>
                      </p>
                      <p className="break-all sm:break-normal">
                        <a
                          href={`mailto:${contactDetails.email}`}
                          className="transition hover:text-white hover:underline"
                        >
                          {contactDetails.email}
                        </a>
                      </p>
                      <p className="max-w-sm pt-0.5 leading-relaxed text-white/70">
                        {contactDetails.address}
                      </p>
                    </address>
                  </div>
                </div>

                {/* Right: link columns — same row as left on md+ */}
                <div className="min-w-0 w-full md:h-full">
                  <div className="h-full rounded-2xl  p-6 sm:p-8 lg:p-9">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-0 md:gap-x-12 lg:gap-x-14">
                      <FooterLinkColumn title="Quick links" links={quickLinks} />
                      <FooterLinkColumn title="Resources" links={resourceLinks} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="h-0.5 bg-[linear-gradient(90deg,#faf7f5_0%,#4e0708_50%,#faf7f5_100%)] opacity-90"
              aria-hidden
            />
            <div
              className="h-px bg-[linear-gradient(90deg,transparent,#e8b4b4,transparent)] opacity-80"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <div className="bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 sm:pb-8 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-14 pt-4">
          <p className="text-center text-sm text-[#6f5655]">
            © {contactDetails.copyrightYear} URB — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

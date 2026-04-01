import Link from "next/link";
import { Icon } from "@iconify/react";
import { Logo } from "./Logo";
import { contactDetails } from "@/data/aboutUs";
import { mainNavLinks } from "@/data/navigation";

const planLinks = [
  { label: "Health Insurance", href: "/services" },
  { label: "Term Life Cover", href: "/services" },
  { label: "Motor Insurance", href: "/services" },
];

const resourceLinks = [
  { label: "FAQs", href: "/contact" },
  { label: "Contact", href: "/contact" },
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
        <h3 className="mb-5 block text-sm font-bold uppercase tracking-[0.2em] text-brand-primary">
          {title}
        </h3>
        <ul className="flex flex-col gap-3 sm:gap-3.5">
          {links.map((link) => (
            <li key={`${title}-${link.label}`} className="leading-snug">
              <Link
                href={link.href}
                className="inline-block text-base text-white transition hover:text-white/80"
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
  const navigationLinks = [...mainNavLinks];

  return (
    <footer className="relative isolate overflow-hidden bg-black text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(80%_120%_at_50%_-20%,rgba(130,45,35,0.45),transparent)]"
        aria-hidden
      />

      <div className="px-4 pb-5 pt-10 sm:px-6 sm:pt-12 lg:px-20 lg:pt-14">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-black">
          <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(300px,420px)_1fr] lg:gap-16">
              <div>
                <Logo />
                <p className="mt-6 max-w-md text-base leading-relaxed text-white">
                  URB Insurance helps individuals and businesses protect what
                  matters most with trusted coverage, clear guidance, and fast
                  claims support.
                </p>

                <h3 className="mt-12 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Connect with us
                </h3>
                <div className="mt-3 flex items-center gap-8">
                  {[
                    "mdi:linkedin",
                    "mdi:facebook",
                    "mdi:instagram",
                    "mdi:twitter",
                  ].map((icon) => (
                    <a
                      key={icon}
                      href="/contact"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#52555f] bg-[#17181f] text-[#b7bcc8] transition hover:border-[#717582] hover:text-white"
                      aria-label="Social link"
                    >
                      <Icon icon={icon} className="h-6 w-6" />
                    </a>
                  ))}
                </div>

                <address className="mt-6 space-y-2 not-italic text-base leading-relaxed text-white">
                  <p>
                    <a
                      href={`tel:${contactDetails.phoneTel1}`}
                      className="transition hover:text-white/80"
                    >
                      {contactDetails.phoneTel1}
                    </a>
                    {" / "}
                    <a
                      href={`tel:${contactDetails.phoneTel2}`}
                      className="transition hover:text-white/80"
                    >
                      {contactDetails.phoneTel2}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`tel:${contactDetails.contactPhoneTel}`}
                      className="transition hover:text-white/80"
                    >
                      {contactDetails.contactPhoneDisplay}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="transition hover:text-white/80"
                    >
                      {contactDetails.email}
                    </a>
                  </p>
                  <p className="max-w-sm">{contactDetails.address}</p>
                </address>
              </div>

              <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 lg:pt-3">
                <FooterLinkColumn title="Navigation" links={navigationLinks} />
                <FooterLinkColumn title="Plans" links={planLinks} />
                <FooterLinkColumn title="Resources" links={resourceLinks} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 sm:px-6 lg:px-20 mb-4">
        <div className="mx-auto max-w-7xl border-t border-[#6b6b6b] pt-4">
          <div className="flex flex-col items-start justify-between gap-3 text-sm text-white sm:flex-row sm:items-center">
          <p>© {contactDetails.copyrightYear} URB Insurance. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="transition hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition hover:text-white/80">
              Terms of Service
            </Link>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 

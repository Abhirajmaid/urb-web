import { PageHeader } from "@/components/common/PageHeader";
import { Footer } from "@/components/common/Footer";
import { EmailGlyph, WhatsAppGlyph } from "@/components/icons/ContactGlyphIcons";
import { contactDetails } from "@/data/aboutUs";

const WHATSAPP_URL = "https://wa.me/919004162157";
const WHATSAPP_DISPLAY = "+91 90041 62157";
const EMAIL = "riteshjain.lic@gmail.com";
const MAP_QUERY = contactDetails.address.replace(/\n/g, ", ");
const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?hl=en&q=${encodeURIComponent(MAP_QUERY)}&t=&z=15&ie=UTF8&iwloc=B&output=embed`;
const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address.replace(/\n/g, ", "))}`;

/** Same outlined CTA style for both cards (matches email button look). */
const contactCtaClassName =
  "inline-flex w-full min-h-[48px] shrink-0 items-center justify-center rounded-xl border-2 border-brand-primary bg-white px-4 py-3.5 text-sm font-semibold uppercase tracking-wide text-brand-primary transition hover:bg-brand-primary/[0.06]";
const officeDirectionsCtaClassName =
  "inline-flex w-full min-h-[48px] shrink-0 items-center justify-center rounded-xl border-2 border-brand-primary bg-brand-primary px-4 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-primary/90";

const iconTileClassName =
  "mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-sm";

const cardTitleClassName = "text-lg font-semibold leading-snug text-brand-dark";
const primaryLineClassName =
  "text-lg font-medium leading-snug text-brand-dark/90 break-words";
const secondaryLineClassName = "text-sm leading-normal text-brand-dark/65";

export default function ContactPage() {
  return (
    <main className="text-[#031B4E]">
      <PageHeader
        title="Contact Us"
        description="Reach out for insurance and financial guidance — we respond quickly on WhatsApp and email."
        backgroundImage="/contact.jpg"
        backgroundImageAlt="Contact hero background"
        showButton={false}
      />

      <section className="relative isolate bg-[#f4f0ee] px-4 py-12 sm:px-6 sm:py-16 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-dark/75 sm:text-lg">
              We&apos;re here to help. Reach out to us on WhatsApp or drop us an
              email — we&apos;ll get back to you promptly.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:items-stretch sm:gap-8">
            <div className="flex h-full min-h-[20rem] flex-col rounded-2xl border border-brand-gray-light/60 bg-white p-8 shadow-sm">
              <div className={iconTileClassName}>
                <WhatsAppGlyph className="h-8 w-8" />
              </div>
              <p className={cardTitleClassName}>Chat with Us on WhatsApp</p>
              <div className="mt-3 flex min-h-0 flex-1 flex-col">
                <div className="space-y-2">
                  <p className={primaryLineClassName}>{WHATSAPP_DISPLAY}</p>
                  
                </div>
                <div className="min-h-0 flex-1" aria-hidden />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${contactCtaClassName} mt-8`}
                >
                  Open WhatsApp
                </a>
              </div>
            </div>

            <div className="flex h-full min-h-[20rem] flex-col rounded-2xl border border-brand-gray-light/60 bg-white p-8 shadow-sm">
              <div className={iconTileClassName}>
                <EmailGlyph className="h-8 w-8" />
              </div>
              <p className={cardTitleClassName}>Send Us an Email</p>
              <div className="mt-3 flex min-h-0 flex-1 flex-col">
                <div className="space-y-2">
                  <p className={`${primaryLineClassName} break-all`}>{EMAIL}</p>
                  
                </div>
                <div className="min-h-0 flex-1" aria-hidden />
                <a href={`mailto:${EMAIL}`} className={`${contactCtaClassName} mt-8`}>
                  Send Email
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-brand-gray-light/60 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.55fr)] md:items-stretch">
              <div className="flex h-full flex-col justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
                  OUR OFFICE
                </p>
                <address className="mt-4 whitespace-pre-line text-base leading-relaxed not-italic text-brand-dark/90">
                  {contactDetails.address}
                </address>
                <div className="mt-3 w-full">
                  <a
                    href={GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${officeDirectionsCtaClassName} w-full sm:w-auto sm:min-w-[220px] sm:px-6`}
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="h-full overflow-hidden rounded-xl border border-brand-gray-light/70">
                <iframe
                  title="URB Office Location on Google Maps"
                  src={GOOGLE_MAPS_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[300px] w-full sm:h-[340px] md:h-full md:min-h-[320px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

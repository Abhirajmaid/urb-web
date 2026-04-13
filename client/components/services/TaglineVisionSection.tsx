export function TaglineVisionSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-20 lg:py-14 text-brand-dark">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-brand-secondary/40 bg-brand-primary px-6 py-5 shadow-[0_4px_24px_rgba(var(--color-primary-rgb),0.25)] sm:px-10 sm:py-6">
            <p className="text-lg font-medium italic text-white sm:text-xl sm:leading-snug">
              &ldquo;All Your Insurance &amp; Financial Needs, Under One
              Roof.&rdquo;
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-brand-gray-light/50 bg-[#f4f0ee] p-8 shadow-sm sm:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-transparent" />
            <div className="relative">
              <p className="text-base font-bold uppercase tracking-[0.2em] text-brand-primary sm:text-sm">
                OUR VISION
              </p>
              <p className="mt-4 text-base italic leading-relaxed text-brand-dark/90 sm:text-lg">
                To become a leading and most trusted financial and insurance
                service provider by delivering reliable, transparent, and
                complete solutions under one roof — while continuing our legacy
                of excellence for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

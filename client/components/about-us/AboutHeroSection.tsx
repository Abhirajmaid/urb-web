import Image from "next/image";
import Button from "@/components/common/Button";

type AboutHeroSectionProps = {
  title: string;
  upperImage: {
    src: string;
    alt: string;
  };
  lowerImage: {
    src: string;
    alt: string;
  };
  description: string;
  buttonText?: string;
  buttonLink?: string;
};

export function AboutHeroSection({
  title,
  upperImage,
  lowerImage,
  description,
  buttonText = "Our services",
  buttonLink = "/services",
}: AboutHeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden text-white pt-12 sm:pt-14 min-h-[600px] sm:min-h-[650px] lg:min-h-screen"
      data-hero-root
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/red bridge.jpeg')" }}
        />
        {/* Red theme overlay + subtle dark gradient for readability */}
        <div className="absolute inset-0 bg-brand-primary/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/90 via-[#050816]/40 to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:gap-12 px-4 sm:px-6 py-12 sm:py-16 lg:px-6 lg:flex-row lg:items-end lg:gap-16 lg:py-16">
          {/* Left: Story */}
          <div className="flex-1 space-y-6 sm:space-y-6 lg:space-y-6 max-w-xl">
            <p className="text-sm sm:text-xs lg:text-xs uppercase tracking-[0.35em] text-white/60">
              Who we are
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight lg:text-6xl">
              {title}
            </h1>
            <p className="text-base sm:text-base lg:text-base leading-relaxed text-white/85 lg:sm:text-lg">
              {description}
            </p>
            <Button
              link={buttonLink}
              type="secondary"
              size="lg"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#031B4E] uppercase tracking-wide"
            >
              {buttonText}
            </Button>
          </div>

          {/* Right: Quick facts */}
          <div className="flex-1">
            <div className="grid gap-5 sm:gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-5 lg:p-5 backdrop-blur-md min-h-[140px] sm:min-h-[150px] lg:min-h-0 flex flex-col justify-center">
                <p className="text-4xl sm:text-4xl lg:text-3xl font-semibold text-white">25+</p>
                <p className="mt-2 sm:mt-1 text-sm sm:text-sm lg:text-xs text-white/80">
                  Years of trusted insurance service and financial protection expertise.
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-5 lg:p-5 backdrop-blur-md min-h-[140px] sm:min-h-[150px] lg:min-h-0 flex flex-col justify-center">
                <p className="text-4xl sm:text-4xl lg:text-3xl font-semibold text-white">50K+</p>
                <p className="mt-2 sm:mt-1 text-sm sm:text-sm lg:text-xs text-white/80">
                  Customers protected with comprehensive life, motor, home, and travel insurance coverage.
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-5 lg:p-5 backdrop-blur-md min-h-[140px] sm:min-h-[150px] lg:min-h-0 flex flex-col justify-center">
                <p className="text-4xl sm:text-4xl lg:text-3xl font-semibold text-white">98%</p>
                <p className="mt-2 sm:mt-1 text-sm sm:text-sm lg:text-xs text-white/80">
                  Claim settlement rate ensuring timely financial support when you need it most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


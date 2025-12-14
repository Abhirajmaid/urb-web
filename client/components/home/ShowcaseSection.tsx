const stats = [
  {
    value: "25+",
    label: "years of trusted service",
  },
  {
    value: "98%",
    label: "claim settlement rate",
  },
  {
    value: "50K+",
    label: "customers protected",
  },
  {
    value: "30+",
    label: "corporate clients",
  },
];

export function ShowcaseSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4f0ee] px-20 pt-20 pb-10 text-brand-dark">
      {/* Dark Brown Container - Full Width */}
      <div className="w-full rounded-2xl bg-[#3b1d1c] p-6 sm:p-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-xl bg-[#7B4747] p-4 sm:p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/90 leading-tight">
                  {stat.label.split(" ").map((word, i, arr) => (
                    <span key={i}>
                      {word}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

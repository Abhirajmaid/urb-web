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
    <section className="relative isolate overflow-hidden bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-10 text-brand-dark">
      <div className="mx-auto ">
        {/* Dark Brown Container */}
        <div className="w-full rounded-2xl bg-[#3b1d1c] p-6 sm:p-8 min-h-[400px] sm:min-h-[450px] lg:min-h-0 lg:flex lg:items-center">
          <div className="mx-auto w-full">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-[#7B4747] p-5 sm:p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] min-h-[140px] sm:min-h-[160px] lg:min-h-0 flex flex-col justify-center"
                >
                  <div className="text-4xl sm:text-4xl lg:text-5xl font-semibold text-white mb-3 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-sm text-white/90 leading-tight">
                    {stat.label.split(" ").map((word, i, arr) => (
                      <span key={i}>
                        {word}
                        {i > 1 ? i < arr.length - 1 && <br /> : ""}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

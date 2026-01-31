"use client";

import { Icon } from "@iconify/react";
import { useEnquiryModal } from "@/contexts/EnquiryModalContext";

export function ConnectWithUsButtons() {
  const { openModal } = useEnquiryModal();
  const items = Array.from({ length: 7 });

  return (
    <section className="bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 pt-10 pb-6">
      <div className="mx-auto">
        <div className="bg-white rounded-2xl w-full overflow-hidden">
          <button
            onClick={openModal}
            className="group relative block w-full overflow-hidden focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b1d1c] py-4"
          >
            <div className="flex h-full w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
              {[items, items].map((iteration, outerIdx) => (
                <div key={outerIdx} className="flex items-center gap-4 pr-4">
                  {iteration.map((_, idx) => (
                    <div
                      key={`${outerIdx}-${idx}`}
                      className="flex-shrink-0 flex items-center gap-2 rounded-lg bg-[#3b1d1c] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#4a2a29]"
                    >
                      Connect with Us
                      <Icon
                        icon="solar:arrow-right-up-linear"
                        width={16}
                        height={16}
                        className="text-white"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

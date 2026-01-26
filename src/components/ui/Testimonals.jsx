import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { testimonials } from "../../data";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  // Scroll progress state
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);

    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onScroll);
    };
  }, [emblaApi, onScroll]);

  return (
    <section className="bg-white dark:bg-dark-bg flex justify-center py-10 md:py-16 text-black dark:text-white overflow-hidden">
      <div className="flex flex-col gap-8 sm:gap-10 w-[95%] md:w-[88%] lg:w-[85%] xl:w-[73%] max-w-360">
        {/* Header */}
        <h2 className="text-h3 sm:text-4xl md:text-h1 font-extrabold text-center">
          Testimonials
        </h2>
        {/* Carousel */}
        <div className="flex flex-col gap-6">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="embla__slide flex-none w-full md:w-1/2 lg:w-1/3 px-2"
                >
                  {/* Card */}
                  <div
                    className="bg-[#195EFC] h-full rounded-[25px] text-white pt-8 pb-5 px-7.5 flex flex-col gap-7.5
                    [clip-path:polygon(0_0,calc(100%-60px)_0,calc(100%-48px)_3px,calc(100%-3px)_48px,100%_60px,100%_100%,0_100%)]"
                  >
                    <div className="flex items-center gap-2.5">
                      <p className="text-3xl font-bold italic">{item.rating}</p>
                      <img
                        src="/assets/svgs/stars.svg"
                        alt="rating"
                        className="h-4"
                      />
                    </div>

                    <div className="h-px bg-white/30 w-full" />

                    <div className="flex flex-col justify-between grow gap-8">
                      <p className="text-[#DCDCDC] text-small leading-[152%]">
                        {item.text}
                      </p>

                      <div className="flex items-center gap-2.5">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm">{item.name}</p>
                          <p className="text-[#969696] text-tiny">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border flex items-center justify-center bg-white border-brand-gray shadow-md"
            >
              <img
                src="/assets/svgs/arrow-right-black.svg"
                className="rotate-180"
                alt="prev"
              />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border flex items-center justify-center bg-white border-brand-gray shadow-md"
            >
              <img src="/assets/svgs/arrow-right-black.svg" alt="next" />
            </button>

            <div className="flex-1 h-1.25 bg-brand-gray rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1E5BFF] rounded-full transition-all duration-100"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

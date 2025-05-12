import { useState, useEffect, useCallback } from "react";
import { cn } from "../../utils/classNames";
import { PiCaretLeft } from "react-icons/pi";
import { Tooltip } from "./Tooltip";

export default function Carousel({ items, reverse = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, items.length]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, items.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, goToNext]);

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning, currentIndex]
  );

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrevious();

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="relative w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className={`flex flex-col items-center gap-8 p-4`}>
                <div className="w-full relative">
                  {/* <div className="relative w-full aspect-video rounded-[28px] overflow-hidden flex items-center shadow-cardShadow"> */}
                  <div className={`border border-transparent dark:border-text-color relative overflow-hidden p-6 rounded-2xl ${item.color}`}>
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="object-cover w-full rounded-[8px]"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col items-start text-left">
                  {/* <div
                    className={cn(
                      "p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6",
                      item.color
                    )}
                  >
                    {item.icon}
                  </div> */}
                  <h3
                    className={cn(
                      "text-[20px] md:text-[30px] font-bold mb-3",
                      item.textColor
                    )}
                  >
                    {item.title}
                  </h3>
                  <ul className="flex mb-14 gap-12 w-full items-start justify-start">
                    {item.stack?.map((stack, index) => (
                      <Tooltip
                        icon={<stack.icon />}
                        key={index}
                        name={stack.name}
                      />
                    ))}
                  </ul>
                  <p className="text-[1.8rem] leading-[2.6rem] max-[768px]:mb-8 mb-4 max-[375px]:mb-4">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    className="inline-block ml-auto mb-12 py-4 px-8 bg-main-color rounded-lg shadow-buttonShadow shadow-shadow-color dark:shadow-shadow-color-dark text-[1.6rem] text-white-color tracking-[0.1rem] cursor-pointer font-semibold border-[0.2rem] border-transparent transition-all duration-500 mt-8 hover:bg-transparent hover:text-main-color hover:border-main-color"
                    target="blank"
                  >
                    View Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 bottom-0 -translate-y-1/2 bg-transparent hover:bg-main-color hover:text-white p-4 rounded-full shadow-md z-10"
        aria-label="Previous slide"
      >
        <PiCaretLeft className="h-8 w-8 text-neutral-darkCharcoal" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 bottom-0 -translate-y-1/2 bg-transparent hover:bg-main-color hover:text-white p-4 rounded-full shadow-md z-10"
        aria-label="Next slide"
      >
        <PiCaretLeft className="h-8 w-8 text-neutral-darkCharcoal rotate-180" />
      </button>

      <div className="flex justify-center mt-8 gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentIndex === index
                ? "bg-main-color w-8"
                : "bg-text-color hover:bg-neutral-mediumGray/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

import React from "react";

type SoldOutMarqueeProps = {
  children: React.ReactNode;
  className?: string;
  /** Text read out by screen readers; the strips themselves are decorative. */
  message?: string;
};

const HORIZONTAL_REPEATS = 14;
const VERTICAL_REPEATS = 12;

const labelClass =
  "flex shrink-0 items-center whitespace-nowrap text-[11px] font-extrabold uppercase tracking-[0.25em] text-bengali-light";

/** A single horizontal ticker row: two identical copies so the -50% loop is seamless. */
const TickerRow = ({ reverse = false }: { reverse?: boolean }) => (
  <div
    className={`flex w-max shrink-0 ${reverse ? "animate-marquee-right" : "animate-marquee-left"}`}
    aria-hidden="true"
  >
    {[0, 1].map((copy) => (
      <div key={copy} className="flex shrink-0 items-center">
        {Array.from({ length: HORIZONTAL_REPEATS }).map((_, i) => (
          <span key={i} className={labelClass}>
            Sold Out
            <span className="mx-4 opacity-70">&#10022;</span>
          </span>
        ))}
      </div>
    ))}
  </div>
);

/** A single vertical ticker column, reading top to bottom. */
const TickerColumn = ({ reverse = false }: { reverse?: boolean }) => (
  <div
    className={`flex h-max w-max flex-col ${reverse ? "" : "animate-marquee-up"}`}
    aria-hidden="true"
  >
    {[0, 1].map((copy) => (
      <div key={copy} className="flex shrink-0 flex-col items-center">
        {Array.from({ length: VERTICAL_REPEATS }).map((_, i) => (
          <span key={i} className="flex shrink-0 flex-col items-center">
            <span
              className={`${labelClass} [writing-mode:vertical-rl]`}
            >
              Sold Out
            </span>
            <span className="my-3 text-[11px] leading-none opacity-70">&#10022;</span>
          </span>
        ))}
      </div>
    ))}
  </div>
);

/**
 * Wraps content in a frame whose four edges are continuous "Sold Out" tickers
 * running in alternating directions.
 */
const SoldOutMarquee = ({ children, className = "", message }: SoldOutMarqueeProps) => (
  <div
    className={`relative overflow-hidden rounded-xl border border-bengali-red/30 bg-gradient-to-br from-bengali-red via-bengali-blue to-bengali-orange p-7 sm:p-8 ${className}`}
  >
    <span className="sr-only">{message ?? "Event subscriptions are sold out."}</span>

    <div className="absolute inset-x-0 top-0 flex h-7 items-center overflow-hidden" aria-hidden="true">
      <TickerRow />
    </div>
    <div
      className="absolute inset-x-0 bottom-0 flex h-7 items-center overflow-hidden"
      aria-hidden="true"
    >
      <TickerRow reverse />
    </div>
    <div
      className="absolute left-0 top-7 bottom-7 flex w-7 items-start justify-center overflow-hidden"
      aria-hidden="true"
    >
      <TickerColumn />
    </div>
    <div
      className="absolute right-0 top-7 bottom-7 flex w-7 items-start justify-center overflow-hidden"
      aria-hidden="true"
    >
      <TickerColumn reverse />
    </div>

    <div className="relative rounded-lg bg-card p-4 sm:p-5">{children}</div>
  </div>
);

export default SoldOutMarquee;

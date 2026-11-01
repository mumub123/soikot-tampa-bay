import { useId, useState } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface AdjustableEventPhotoProps {
  src: string;
  alt: string;
  tileId: string;
  priority?: boolean;
  initialZoom?: number;
}

interface Framing {
  zoom: number;
  horizontal: number;
  vertical: number;
}

const storageKey = (tileId: string) => `event-photo-framing:${tileId}`;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const loadFraming = (tileId: string, fallback: Framing): Framing => {
  try {
    const raw = window.localStorage.getItem(storageKey(tileId));
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<Framing>;
    if (typeof parsed.zoom !== "number" || typeof parsed.horizontal !== "number" || typeof parsed.vertical !== "number") return fallback;
    return {
      zoom: clamp(parsed.zoom, 100, 200),
      horizontal: clamp(parsed.horizontal, 0, 100),
      vertical: clamp(parsed.vertical, 0, 100),
    };
  } catch {
    return fallback;
  }
};

const saveFraming = (tileId: string, framing: Framing) => {
  try {
    window.localStorage.setItem(storageKey(tileId), JSON.stringify(framing));
  } catch {
    // storage unavailable (private mode, quota) — framing stays session-only
  }
};

/** Each mounted tile owns its crop; adjustments persist in this browser only, not shared saves. */
export default function AdjustableEventPhoto({ src, alt, tileId, priority = false, initialZoom = 100 }: AdjustableEventPhotoProps) {
  const id = useId();
  const [framing, setFraming] = useState<Framing>(() =>
    loadFraming(tileId, { zoom: initialZoom, horizontal: 50, vertical: 50 })
  );
  const { zoom, horizontal, vertical } = framing;
  const position = `${horizontal}% ${vertical}%`;

  const update = (patch: Partial<Framing>) => {
    setFraming((current) => {
      const next = { ...current, ...patch };
      saveFraming(tileId, next);
      return next;
    });
  };

  const reset = () => {
    try {
      window.localStorage.removeItem(storageKey(tileId));
    } catch {
      // ignore — clearing state below still resets the view
    }
    setFraming({ zoom: 100, horizontal: 50, vertical: 50 });
  };

  return (
    <div data-photo-tile={tileId}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="h-full w-full object-cover"
          style={{ objectPosition: position, transformOrigin: position, transform: `scale(${zoom / 100})` }}
        />
      </div>
      <div role="group" aria-label={`${alt} photo adjustments`} className="border-b border-border bg-background px-4 py-3 text-left text-foreground">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="text-sm font-medium">Photo framing</span>
          <Button type="button" variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={reset} title="Reset photo framing" aria-label={`Reset ${alt} photo framing`}>
            <RotateCcw aria-hidden="true" />
          </Button>
        </div>
        <div className="space-y-4">
          {[
            { label: "Zoom", value: zoom, min: 100, max: 200, update: (next: number) => update({ zoom: next }) },
            { label: "Horizontal position", value: horizontal, min: 0, max: 100, update: (next: number) => update({ horizontal: next }) },
            { label: "Vertical position", value: vertical, min: 0, max: 100, update: (next: number) => update({ vertical: next }) },
          ].map(({ label, value, min, max, update: apply }) => (
            <div key={label} className="grid grid-cols-[8rem_minmax(0,1fr)_3rem] items-center gap-2">
              <span id={`${id}-${label}`} className="text-xs text-muted-foreground">{label}</span>
              <Slider aria-labelledby={`${id}-${label}`} min={min} max={max} step={1} value={[value]} onValueChange={([next]) => { if (next !== undefined) apply(next); }} />
              <output className="text-right text-xs tabular-nums">{value}%</output>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

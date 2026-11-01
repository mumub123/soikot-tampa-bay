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

/** Each mounted tile owns its crop; adjustments are preview-only, not shared saves. */
export default function AdjustableEventPhoto({ src, alt, tileId, priority = false, initialZoom = 100 }: AdjustableEventPhotoProps) {
  const id = useId();
  const [zoom, setZoom] = useState(initialZoom);
  const [horizontal, setHorizontal] = useState(50);
  const [vertical, setVertical] = useState(50);
  const position = `${horizontal}% ${vertical}%`;

  const reset = () => {
    setZoom(100);
    setHorizontal(50);
    setVertical(50);
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
            { label: "Zoom", value: zoom, min: 100, max: 200, update: setZoom },
            { label: "Horizontal position", value: horizontal, min: 0, max: 100, update: setHorizontal },
            { label: "Vertical position", value: vertical, min: 0, max: 100, update: setVertical },
          ].map(({ label, value, min, max, update }) => (
            <div key={label} className="grid grid-cols-[8rem_minmax(0,1fr)_3rem] items-center gap-2">
              <span id={`${id}-${label}`} className="text-xs text-muted-foreground">{label}</span>
              <Slider aria-labelledby={`${id}-${label}`} min={min} max={max} step={1} value={[value]} onValueChange={([next]) => { if (next !== undefined) update(next); }} />
              <output className="text-right text-xs tabular-nums">{value}%</output>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
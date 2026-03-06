import clsx from "clsx";

interface GrainOverlayProps {
  className?: string;
}

export default function GrainOverlay({ className }: GrainOverlayProps) {
  return (
    <div
      aria-hidden
      className={clsx("pointer-events-none fixed inset-0 z-0 opacity-[0.04] mix-blend-soft-light", className)}
    >
      <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <filter id="grain-overlay-noise">
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100" height="100" filter="url(#grain-overlay-noise)" opacity="0.75" />
      </svg>
    </div>
  );
}

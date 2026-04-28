"use client";

interface AdSlotProps {
  slot: string;
  className?: string;
}

export default function AdSlot({ slot, className = "" }: AdSlotProps) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-zinc-700 bg-zinc-900/50 rounded-lg text-zinc-600 text-xs tracking-widest uppercase ${className}`}
      aria-label="Advertisement"
      data-ad-slot={slot}
    >
      <span>Advertisement</span>
    </div>
  );
}

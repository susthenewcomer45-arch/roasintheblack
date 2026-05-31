"use client";

import { useState, useMemo } from "react";

interface InputFieldProps {
  label: string;
  hint: string;
  value: string;
  onChange: (v: string) => void;
  min?: number;
  max?: number;
}

function InputField({ label, hint, value, onChange, min = 0, max = 99 }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-zinc-300">{label}</label>
      <p className="text-xs text-zinc-500">{hint}</p>
      <div className="relative mt-1">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={min}
          max={max}
          step="0.1"
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 pr-10 text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-zinc-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          placeholder="0"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm font-medium">
          %
        </span>
      </div>
    </div>
  );
}

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

interface Interpretation {
  message: string;
  borderColor: string;
  bgColor: string;
}

function getInterpretation(roas: number): Interpretation {
  if (roas < 1.5) {
    return {
      message: "⚠️ Very tight margins. Your costs leave almost no room for profitable advertising. Consider reducing COGS or fulfillment costs before scaling ads.",
      borderColor: "border-amber-600/40",
      bgColor: "bg-amber-600/5",
    };
  }
  if (roas < 2) {
    return {
      message: "📊 Slim margins. You can run profitable ads but scaling will be difficult. Every dollar counts at this level.",
      borderColor: "border-amber-500/40",
      bgColor: "bg-amber-500/5",
    };
  }
  if (roas < 3) {
    return {
      message: "✅ Moderate margins. This is workable for most ad platforms. Focus on optimizing your campaigns before scaling.",
      borderColor: "border-amber-400/40",
      bgColor: "bg-amber-400/5",
    };
  }
  if (roas < 4) {
    return {
      message: "💪 Healthy margins. You have good room to run and scale profitable campaigns across most platforms.",
      borderColor: "border-amber-400/50",
      bgColor: "bg-amber-400/8",
    };
  }
  if (roas < 6) {
    return {
      message: "🚀 Strong margins. You're in an excellent position to scale aggressively. Most campaigns will be profitable.",
      borderColor: "border-amber-300/50",
      bgColor: "bg-amber-300/5",
    };
  }
  return {
    message: "⭐ Exceptional margins. You have significant room to dominate your market through paid advertising.",
    borderColor: "border-amber-300/60",
    bgColor: "bg-amber-300/8",
  };
}

const PRESETS = [
  { name: "Apparel",           cogs: "40", fulfillment: "10", other: "3"  },
  { name: "Supplements",       cogs: "25", fulfillment: "12", other: "5"  },
  { name: "SaaS",              cogs: "5",  fulfillment: "0",  other: "8"  },
  { name: "Home Services",     cogs: "15", fulfillment: "0",  other: "10" },
  { name: "Electronics",       cogs: "55", fulfillment: "8",  other: "3"  },
  { name: "General eCommerce", cogs: "40", fulfillment: "8",  other: "5"  },
] as const;

export default function ROASCalculator() {
  const [cogs, setCogs] = useState("40");
  const [fulfillment, setFulfillment] = useState("8");
  const [other, setOther] = useState("5");
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function applyPreset(preset: (typeof PRESETS)[number]) {
    setCogs(preset.cogs);
    setFulfillment(preset.fulfillment);
    setOther(preset.other);
    setActivePreset(preset.name);
  }

  function handleCogsChange(v: string) {
    setCogs(v);
    setActivePreset(null);
  }

  function handleFulfillmentChange(v: string) {
    setFulfillment(v);
    setActivePreset(null);
  }

  function handleOtherChange(v: string) {
    setOther(v);
    setActivePreset(null);
  }

  const result = useMemo(() => {
    const c = clamp(parseFloat(cogs) || 0, 0, 99);
    const f = clamp(parseFloat(fulfillment) || 0, 0, 99);
    const o = clamp(parseFloat(other) || 0, 0, 99);
    const totalCostPct = (c + f + o) / 100;

    if (totalCostPct >= 1) return null;

    const breakEvenROAS = 1 / (1 - totalCostPct);
    const grossMargin = (1 - totalCostPct) * 100;

    return { breakEvenROAS, grossMargin, totalCostPct: totalCostPct * 100 };
  }, [cogs, fulfillment, other]);

  const roasColor =
    result === null
      ? "text-red-400"
      : result.breakEvenROAS <= 2
      ? "text-green-400"
      : result.breakEvenROAS <= 4
      ? "text-amber-400"
      : "text-red-400";

  const interpretation = result ? getInterpretation(result.breakEvenROAS) : null;

  function handleShare() {
    if (!result) return;
    const text = `My Break-Even ROAS is ${result.breakEvenROAS.toFixed(2)}x (COGS: ${cogs}%, Fulfillment: ${fulfillment}%, Other costs: ${other}%). Calculate yours free at roasintheblack.com`;

    // Open Twitter synchronously so popup blockers don't block it
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, "_blank");

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
      <div className="px-6 py-5 border-b border-zinc-800 bg-zinc-900">
        <h2 className="text-lg font-semibold text-zinc-100">
          Break-Even ROAS Calculator
        </h2>
        <p className="text-sm text-zinc-500 mt-0.5">
          Enter your cost percentages to find the minimum ROAS to break even.
        </p>
      </div>

      {/* Industry presets */}
      <div className="px-6 pt-5 pb-1">
        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">
          Quick Start: Pick your industry
        </p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              onClick={() => applyPreset(preset)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activePreset === preset.name
                  ? "bg-amber-500 text-zinc-900 shadow-sm shadow-amber-500/30"
                  : "bg-zinc-800 text-zinc-400 border border-zinc-700 hover:border-amber-500/50 hover:text-amber-400"
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 grid gap-5 sm:grid-cols-3">
        <InputField
          label="Cost of Goods (COGS)"
          hint="Product cost as % of sale price"
          value={cogs}
          onChange={handleCogsChange}
        />
        <InputField
          label="Fulfillment & Shipping"
          hint="Shipping, packaging, handling"
          value={fulfillment}
          onChange={handleFulfillmentChange}
        />
        <InputField
          label="Other Variable Costs"
          hint="Returns, platform fees, etc."
          value={other}
          onChange={handleOtherChange}
        />
      </div>

      <div className="mx-6 mb-4 rounded-xl bg-zinc-950 border border-zinc-800 p-6">
        {result === null ? (
          <p className="text-red-400 text-sm font-medium text-center">
            Total costs must be less than 100% to calculate break-even ROAS.
          </p>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
            <div className="text-center">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                Break-Even ROAS
              </p>
              <p className={`text-5xl font-bold tabular-nums ${roasColor}`}>
                {result.breakEvenROAS.toFixed(2)}x
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                minimum to cover costs
              </p>
            </div>

            <div className="w-px h-12 bg-zinc-800 hidden sm:block" />

            <div className="flex flex-col gap-3 text-sm min-w-[160px]">
              <div className="flex justify-between gap-8">
                <span className="text-zinc-500">Total cost %</span>
                <span className="text-zinc-300 font-medium tabular-nums">
                  {result.totalCostPct.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between gap-8">
                <span className="text-zinc-500">Gross margin</span>
                <span className="text-zinc-300 font-medium tabular-nums">
                  {result.grossMargin.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between gap-8">
                <span className="text-zinc-500">Formula</span>
                <span className="text-zinc-300 font-mono text-xs">
                  1 ÷ {result.grossMargin.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {interpretation && (
        <div
          className={`mx-6 mb-4 rounded-xl border px-5 py-4 ${interpretation.bgColor} ${interpretation.borderColor}`}
        >
          <p className="text-sm text-zinc-300 leading-relaxed">
            {interpretation.message}
          </p>
        </div>
      )}

      {/* Share your result */}
      {result && (
        <div className="mx-6 mb-4">
          <button
            onClick={handleShare}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-zinc-900 font-semibold text-sm transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <span>✓</span>
                <span>Copied to clipboard!</span>
              </>
            ) : (
              <>
                <span>↗</span>
                <span>Share Your Result</span>
              </>
            )}
          </button>
        </div>
      )}

      <div className="px-6 pb-5">
        <p className="text-xs text-zinc-600 text-center">
          Any ROAS above{" "}
          <span className="text-zinc-400 font-medium">
            {result ? result.breakEvenROAS.toFixed(2) + "x" : "—"}
          </span>{" "}
          means your ads are profitable. Below it, you&apos;re losing money on
          ad spend.
        </p>
      </div>
    </div>
  );
}

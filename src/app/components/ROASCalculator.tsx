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

export default function ROASCalculator() {
  const [cogs, setCogs] = useState("40");
  const [fulfillment, setFulfillment] = useState("8");
  const [other, setOther] = useState("5");

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

      <div className="p-6 grid gap-5 sm:grid-cols-3">
        <InputField
          label="Cost of Goods (COGS)"
          hint="Product cost as % of sale price"
          value={cogs}
          onChange={setCogs}
        />
        <InputField
          label="Fulfillment & Shipping"
          hint="Shipping, packaging, handling"
          value={fulfillment}
          onChange={setFulfillment}
        />
        <InputField
          label="Other Variable Costs"
          hint="Returns, platform fees, etc."
          value={other}
          onChange={setOther}
        />
      </div>

      <div className="mx-6 mb-6 rounded-xl bg-zinc-950 border border-zinc-800 p-6">
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

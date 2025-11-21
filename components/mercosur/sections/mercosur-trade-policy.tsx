"use client"

import { useState } from "react"
import { MercosurTariffChart } from "@/components/mercosur/charts/mercosur-tariff-chart"
import { MercosurTariffComparison } from "@/components/mercosur/charts/mercosur-tariff-comparison"

export function MercosurTradePolicy() {
  const [showYear, setShowYear] = useState<2004 | 2017>(2004)

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">How Mercosur Works</h1>
        <p className="text-xl leading-relaxed text-slate-700">
          Mercosur is a <strong>customs union</strong>: members eliminate tariffs among themselves and coordinate a{" "}
          <strong>common external tariff</strong> (CET) on imports from the rest of the world.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-300 bg-white p-6">
          <div className="text-3xl font-bold text-blue-700">0%</div>
          <p className="mt-2 text-sm text-slate-700">Internal tariffs</p>
          <p className="mt-2 text-xs leading-relaxed text-slate-600">
            Brazil → Argentina trade is essentially tariff-free (except for autos and sugar)
          </p>
        </div>
        <div className="rounded-lg border border-slate-300 bg-white p-6">
          <div className="text-3xl font-bold text-teal-700">~10%</div>
          <p className="mt-2 text-sm text-slate-700">Average common external tariff</p>
          <p className="mt-2 text-xs leading-relaxed text-slate-600">
            Applied uniformly to imports from China, USA, EU, etc.
          </p>
        </div>
        <div className="rounded-lg border border-slate-300 bg-white p-6">
          <div className="text-3xl font-bold text-emerald-700">+480</div>
          <p className="mt-2 text-sm text-slate-700">Tariff exemptions</p>
          <p className="mt-2 text-xs leading-relaxed text-slate-600">
            CET flexibility: countries maintain exceptions for sensitive sectors
          </p>
        </div>
      </div>

      {/* Tariff Comparison Chart */}
      <div className="space-y-4 rounded-lg border border-slate-300 bg-white p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Mercosur vs. Major Partners: Average Tariffs</h2>
        <p className="text-slate-700">Which regions apply higher import tariffs? (2004–2017 average)</p>
        <MercosurTariffComparison />
      </div>

      {/* Year Selector */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <h3 className="font-semibold text-slate-900">Compare Years:</h3>
          <div className="flex gap-3">
            {[2004, 2017].map((year) => (
              <button
                key={year}
                onClick={() => setShowYear(year as 2004 | 2017)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  showYear === year
                    ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg"
                    : "border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <MercosurTariffChart year={showYear} />
      </div>

      {/* Key Facts */}
      <div className="space-y-4 rounded-lg border border-slate-300 bg-white p-6">
        <h3 className="font-semibold text-slate-900">What changed 2004–2017?</h3>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-start gap-3">
            <span className="text-teal-700 font-bold">→</span>
            <span>Mercosur's CET remained stable (~10%)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-700 font-bold">→</span>
            <span>USA & EU tariffs on Mercosur fell, then stabilized</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-700 font-bold">→</span>
            <span>China tariffs stayed low, but China's trade share exploded</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-700 font-bold">→</span>
            <span>Result: external trade grew faster than internal trade</span>
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-blue-300 bg-blue-50 p-6">
        <p className="text-base leading-relaxed text-slate-800">
          <strong className="text-blue-900">Why this matters:</strong> Because most trade is with outsiders, each member
          has incentives to negotiate directly. Yet coordinated bloc negotiations might offer better deals. This sets up
          the central tension.
        </p>
      </div>
    </div>
  )
}

export default MercosurTradePolicy

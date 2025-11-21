"use client"

import { useState } from "react"
import TradeShareChart from "@/components/charts/trade-share-chart"
import { ExternalLink } from "lucide-react"

export default function TradePatterns() {
  const [selectedCountry, setSelectedCountry] = useState<"BRA" | "ARG" | "URY" | "PRY">("BRA")

  const countries = [
    { code: "BRA", name: "Brazil", description: "Largest Mercosur member; diversified manufacturing" },
    { code: "ARG", name: "Argentina", description: "Large agricultural exporter; diverse sectors" },
    { code: "URY", name: "Uruguay", description: "Small but specialized; strong in meat & dairy" },
    { code: "PRY", name: "Paraguay", description: "Smallest member; heavily reliant on intra-bloc trade" },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Who Trades with Whom?</h1>
        <p className="text-xl leading-relaxed text-slate-700">
          Mercosur is not homogeneous. Brazil dominates by size, but each member has different trade patterns and
          vulnerabilities.
        </p>
      </div>

      {/* Country Selector */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Select a country:</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((country) => (
            <button
              key={country.code}
              onClick={() => setSelectedCountry(country.code as "BRA" | "ARG" | "URY" | "PRY")}
              className={`rounded-lg border px-4 py-3 transition-all ${
                selectedCountry === country.code
                  ? "border-blue-600 bg-blue-50 text-slate-900 shadow-md"
                  : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
              }`}
            >
              <div className="font-semibold">{country.name}</div>
              <p className="text-xs text-slate-600">{country.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Trade Chart */}
      <div className="space-y-4 rounded-lg border border-slate-300 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Trade Share with Major Partners (% of extra-bloc trade)
        </h3>
        <TradeShareChart country={selectedCountry} />
      </div>

      {/* Key Findings */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-300 bg-white p-6">
          <h3 className="font-semibold text-blue-900">2004: USA-Centric Era</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• USA was top partner for Brazil & Argentina</li>
            <li>• China was rising but still secondary</li>
            <li>• EU maintained steady importance</li>
          </ul>
        </div>
        <div className="rounded-lg border border-slate-300 bg-white p-6">
          <h3 className="font-semibold text-teal-900">2017: China Dominates</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• China became #1 external partner for all members</li>
            <li>• USA share fell despite absolute trade growth</li>
            <li>• EU remained important but secondary</li>
          </ul>
        </div>
      </div>

      {/* Implications */}
      <div className="space-y-4 rounded-lg border border-slate-300 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">Why This Shapes Negotiations</h2>
        <div className="space-y-3 text-slate-700">
          <p>
            <strong className="text-blue-900">For Uruguay & Paraguay:</strong> Small size means limited bargaining power
            one-on-one with China or USA. But as part of Mercosur bloc, they gain leverage. Uruguay especially benefits
            from being bundled with Brazil's size.
          </p>
          <p>
            <strong className="text-teal-900">For Brazil & Argentina:</strong> Large enough to negotiate individually,
            but also face concentrated losses in manufacturing if Chinese competition surges. Their incentives are
            mixed—bloc gains exist, but sectoral pain is concentrated.
          </p>
        </div>
      </div>

      {/* External Resources */}
      <div className="space-y-4">
        <h3 className="font-semibold text-slate-900">Data Resources</h3>
        <div className="space-y-2">
          <a
            href="https://oec.world/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3 transition-all hover:border-slate-400 hover:bg-slate-50"
          >
            <span className="text-slate-700 group-hover:text-slate-900">Observatory of Economic Complexity</span>
            <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-teal-700" />
          </a>
          <a
            href="https://data.imf.org/?sk=9d6028d4-f14a-464c-a2f2-59b2cd424b85"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3 transition-all hover:border-slate-400 hover:bg-slate-50"
          >
            <span className="text-slate-700 group-hover:text-slate-900">IMF Direction of Trade Statistics</span>
            <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-teal-700" />
          </a>
        </div>
      </div>
    </div>
  )
}

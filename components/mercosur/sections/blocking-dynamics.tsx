import SectorChart from "@/components/charts/sector-chart"
import { AlertTriangle } from "lucide-react"

export default function BlockingDynamics() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Why Large Countries Block Negotiations</h1>
        <p className="text-xl leading-relaxed text-slate-700">
          Brazil and Argentina show aggregate welfare gains from trade deals—yet they block or delay negotiations. Why?
          The answer lies in political economy: losses are concentrated where they hurt most.
        </p>
      </div>

      {/* The Paradox */}
      <div className="rounded-lg border border-slate-300 bg-white p-8">
        <div className="flex items-start gap-4">
          <AlertTriangle className="h-6 w-6 text-burgundy-700 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-slate-900">The Paradox:</h3>
            <p className="mt-2 text-slate-700">
              Brazil's aggregate welfare from MS–China reciprocal deal: <strong>+0.1%</strong> (small gain). Yet
              specific sectors lose 5–15% of production and 0.5% of national labor share. These are politically powerful
              lobbies.
            </p>
          </div>
        </div>
      </div>

      {/* Sector Chart */}
      <div className="space-y-4 rounded-lg border border-slate-300 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Concentration of Losses: Brazil & Argentina (MS–China 2017)
        </h2>
        <p className="text-sm text-slate-600 mb-4">Which industries lose the most employment? (Top 5 shown)</p>
        <SectorChart />
      </div>

      {/* The Asymmetry */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">The Asymmetry: Concentrated Losses vs. Diffuse Gains</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-300 bg-white p-6">
            <h3 className="font-semibold text-burgundy-900">Losses (Concentrated)</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-burgundy-700 font-bold">✗</span>
                <span className="text-sm text-slate-700">
                  <strong>Wearing apparel:</strong> −15% production, −0.46 pt. labor share
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-burgundy-700 font-bold">✗</span>
                <span className="text-sm text-slate-700">
                  <strong>Textiles:</strong> −5.5% production, −0.09 pt. labor share
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-burgundy-700 font-bold">✗</span>
                <span className="text-sm text-slate-700">
                  <strong>Leather products:</strong> −3.4% production, −0.06 pt. labor share
                </span>
              </li>
              <li className="text-xs text-slate-600 mt-3">
                These are organized, politically vocal industries. Textile & apparel unions can mobilize voters and
                media.
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-300 bg-white p-6">
            <h3 className="font-semibold text-teal-900">Gains (Diffuse)</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal-700 font-bold">✓</span>
                <span className="text-sm text-slate-700">
                  <strong>Oil seeds:</strong> +5.9% production, +0.24 pt. labor share
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-700 font-bold">✓</span>
                <span className="text-sm text-slate-700">
                  <strong>Minerals:</strong> +1.6% production, +0.11 pt. labor share
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-700 font-bold">✓</span>
                <span className="text-sm text-slate-700">
                  <strong>Consumers:</strong> Cheaper imports, higher real income (small effect)
                </span>
              </li>
              <li className="text-xs text-slate-600 mt-3">
                These gains spread across many small producers and millions of consumers. Hard to organize politically.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Political Economy */}
      <div className="space-y-4 rounded-lg border border-slate-300 bg-white p-6">
        <h3 className="font-semibold text-slate-900">The Political Economy Mechanism</h3>
        <p className="text-slate-700 text-sm mb-4">
          This pattern is well-known in trade policy literature (Grossman & Helpman, 1992):
        </p>
        <ol className="space-y-3 text-sm text-slate-700">
          <li className="flex gap-3">
            <span className="font-semibold text-blue-900 flex-shrink-0">1.</span>
            <span>
              <strong>Concentrated losses</strong> → Organized industries lobby government intensely
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-blue-900 flex-shrink-0">2.</span>
            <span>
              <strong>Diffuse gains</strong> → Consumers and small firms have weak political voice
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-blue-900 flex-shrink-0">3.</span>
            <span>
              <strong>Result:</strong> Politicians block or delay deals despite aggregate welfare gains
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-blue-900 flex-shrink-0">4.</span>
            <span>
              <strong>Bloc stability suffers:</strong> Bloc-level negotiations stall despite small-member enthusiasm
            </span>
          </li>
        </ol>
      </div>

      {/* Comparison: USA vs China */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Negotiations with USA vs China: Different Pressures</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-300 bg-white p-6">
            <h3 className="font-semibold text-blue-900">China Negotiations (2017)</h3>
            <p className="text-xs text-slate-600 mt-2 mb-3">MS–China reciprocal deal</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <strong>Top losers:</strong> Apparel, textiles, leather
              </li>
              <li>
                <strong>Magnitude:</strong> Severe (−15% apparel production)
              </li>
              <li>
                <strong>Political risk:</strong> <span className="text-burgundy-700 font-semibold">Very high</span>
              </li>
              <li>
                <strong>Why?</strong> Chinese low-cost competition directly threatens Brazilian mfg
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-300 bg-white p-6">
            <h3 className="font-semibold text-teal-900">USA Negotiations (2004)</h3>
            <p className="text-xs text-slate-600 mt-2 mb-3">MS–USA reciprocal deal</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <strong>Top losers:</strong> Chemicals, machinery, electronics
              </li>
              <li>
                <strong>Magnitude:</strong> Moderate (−1% to −2%)
              </li>
              <li>
                <strong>Political risk:</strong> <span className="text-amber-700 font-semibold">Moderate</span>
              </li>
              <li>
                <strong>Why?</strong> USA & Brazil compete less directly; trade already low-tariff
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Policy Takeaway */}
      <div className="space-y-4 rounded-lg border border-slate-300 bg-white p-6">
        <h3 className="font-semibold text-slate-900">Why This Explains Mercosur's Gridlock</h3>
        <p className="text-slate-700 text-sm mb-4">The bloc stays together, but external negotiations stall because:</p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-3">
            <span className="text-blue-900 font-bold">→</span>
            <span>Large members reap small aggregate gains</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-900 font-bold">→</span>
            <span>But face intense sectoral lobbying from industries that lose visibly</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-900 font-bold">→</span>
            <span>So they use Mercosur's institutional veto to block or delay</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-900 font-bold">→</span>
            <span>Small members want deals but lack veto power</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-900 font-bold">→</span>
            <span>Result: Institutional stability + external negotiation gridlock</span>
          </li>
        </ul>
      </div>

      {/* Final Insight */}
      <div className="rounded-lg border border-slate-300 bg-blue-50 p-6">
        <p className="text-base leading-relaxed text-slate-800">
          <strong className="text-blue-900">Core Insight:</strong> Mercosur's "stumbling" is not a failure of
          institutional design. It reflects the genuine conflict between aggregate efficiency (small members +
          consumers) and concentrated interests (large-country manufacturers). Understanding this helps predict when
          other regional blocs might fragment or stall.
        </p>
      </div>
    </div>
  )
}

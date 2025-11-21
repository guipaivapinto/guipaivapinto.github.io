import WelfareChart from "@/components/charts/welfare-chart"
import { TrendingUp } from "lucide-react"

export default function UruguayGains() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Why Uruguay Gains from Staying</h1>
        <p className="text-xl leading-relaxed text-slate-700">
          Our model reveals a stark asymmetry: small members like Uruguay consistently benefit more from bloc
          negotiations than solo deals.
        </p>
      </div>

      {/* Main Finding */}
      <div className="rounded-lg border border-slate-300 bg-white p-8">
        <div className="flex items-start gap-4">
          <TrendingUp className="h-6 w-6 text-teal-700 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Key Result:</h3>
            <p className="mt-2 text-slate-700">
              When Uruguay negotiates <strong>as part of Mercosur bloc</strong> with China, it gains 0.18–0.46% of
              welfare. When negotiating <strong>alone</strong>, gains collapse to near zero (0.00%).
            </p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="space-y-4 rounded-lg border border-slate-300 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">Uruguay Welfare Gains: Bloc vs Solo Negotiations</h2>
        <p className="text-sm text-slate-600">
          Comparing outcomes under bloc-wide vs individual negotiations with major partners
        </p>
        <WelfareChart />
      </div>

      {/* Why This Happens */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Why This Happens: The Bargaining Power Effect</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-300 bg-white p-6">
            <h3 className="font-semibold text-burgundy-900">Uruguay Alone</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-burgundy-700 font-bold">✗</span>
                <span>Small economy: limited leverage with China</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-burgundy-700 font-bold">✗</span>
                <span>China can offer "take-it-or-leave-it" terms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-burgundy-700 font-bold">✗</span>
                <span>Tariff cuts must be reciprocal—Uruguay has less to offer</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-300 bg-white p-6">
            <h3 className="font-semibold text-teal-900">Uruguay + Mercosur</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-teal-700 font-bold">✓</span>
                <span>Combined with Brazil: 3x larger market</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-700 font-bold">✓</span>
                <span>Bloc has credible negotiating leverage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-700 font-bold">✓</span>
                <span>Can extract larger tariff concessions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sectoral Impact */}
      <div className="space-y-4 rounded-lg border border-slate-300 bg-white p-6">
        <h3 className="font-semibold text-slate-900">What Uruguay Gains (Sectoral Breakdown)</h3>
        <p className="text-sm text-slate-600 mb-4">
          Under MS–China negotiation (2017), Uruguay's gains concentrate in high-value exports:
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded border border-slate-300 bg-slate-50 px-3 py-2">
            <div className="font-semibold text-teal-700">+14%</div>
            <p className="text-xs text-slate-700 mt-1">Meat (cattle)</p>
            <p className="text-xs text-slate-600 mt-1">1.66 pt. of labor share</p>
          </div>
          <div className="rounded border border-slate-300 bg-slate-50 px-3 py-2">
            <div className="font-semibold text-teal-700">+4.8%</div>
            <p className="text-xs text-slate-700 mt-1">Oil seeds</p>
            <p className="text-xs text-slate-600 mt-1">0.22 pt. of labor share</p>
          </div>
          <div className="rounded border border-slate-300 bg-slate-50 px-3 py-2">
            <div className="font-semibold text-teal-700">+11%</div>
            <p className="text-xs text-slate-700 mt-1">Textiles</p>
            <p className="text-xs text-slate-600 mt-1">0.14 pt. of labor share</p>
          </div>
        </div>
      </div>

      {/* Uruguay's Dilemma */}
      <div className="space-y-4 rounded-lg border border-slate-300 bg-blue-50 p-6">
        <h3 className="font-semibold text-blue-900">Uruguay's Institutional Dilemma</h3>
        <p className="text-slate-800">
          Uruguay wants to negotiate bilaterally with China (and previously the USA) to access faster growth and
          specialized market opportunities. But the data shows bilateral deals yield minimal gains. The bloc structure,
          though frustrating, is actually what makes Uruguay's trade position valuable. Leaving would isolate Uruguay—it
          would be stronger together.
        </p>
      </div>

      {/* Why Uruguay Stays */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-300 bg-white p-6">
          <h3 className="font-semibold text-teal-900">Policy Implication</h3>
          <p className="mt-2 text-sm text-slate-700">
            Small members in customs unions have a strong incentive to avoid exit. Their bargaining power derives from
            the bloc structure. Unilateral deals promise more, but deliver less.
          </p>
        </div>
        <div className="rounded-lg border border-slate-300 bg-white p-6">
          <h3 className="font-semibold text-blue-900">For Policymakers</h3>
          <p className="mt-2 text-sm text-slate-700">
            If you're a small trading nation in a bloc, focus negotiating leverage on advancing collective deals—not
            individual exit. Collective action is credible leverage.
          </p>
        </div>
      </div>
    </div>
  )
}

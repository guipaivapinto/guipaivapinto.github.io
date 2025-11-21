"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function WelfareChart() {
  const data = [
    { partner: "China", bloc: 0.37, solo: 0.02 },
    { partner: "USA", bloc: 0.15, solo: 0.0 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
        <XAxis dataKey="partner" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" label={{ value: "Welfare Gain (%)", angle: -90, position: "insideLeft" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1e293b",
            border: "1px solid #475569",
            borderRadius: "8px",
            color: "#e2e8f0",
          }}
        />
        <Legend />
        <Bar dataKey="bloc" fill="#06b6d4" name="Bloc Negotiation" />
        <Bar dataKey="solo" fill="#ef4444" name="Solo Negotiation" />
      </BarChart>
    </ResponsiveContainer>
  )
}

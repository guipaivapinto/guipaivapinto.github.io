"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

export default function SectorChart() {
  // Top 5 losing sectors for Brazil under MS-China 2017
  const data = [
    { sector: "Apparel", loss: -15.4 },
    { sector: "Textiles", loss: -5.5 },
    { sector: "Leather", loss: -3.4 },
    { sector: "Machinery", loss: -1.2 },
    { sector: "Metal Products", loss: -1.3 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
        <XAxis dataKey="sector" stroke="#94a3b8" angle={-45} textAnchor="end" height={80} />
        <YAxis stroke="#94a3b8" label={{ value: "Production Change (%)", angle: -90, position: "insideLeft" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1e293b",
            border: "1px solid #475569",
            borderRadius: "8px",
            color: "#e2e8f0",
          }}
        />
        <Bar dataKey="loss" fill="#ef4444" radius={[0, 0, 8, 8]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.loss < -5 ? "#dc2626" : "#ef4444"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

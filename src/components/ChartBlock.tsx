"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { chartColors } from "@/data";

interface ChartBlockProps {
  title?: string;
  subtitle?: string;
  insight?: string;
  children: React.ReactNode;
  className?: string;
}

export function ChartBlock({ title, subtitle, insight, children, className = "" }: ChartBlockProps) {
  return (
    <div className={`bg-white rounded-2xl px-10 py-8 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h4 className="font-serif text-xl mb-2">{title}</h4>}
          {subtitle && <p className="font-sans font-light text-sm opacity-50">{subtitle}</p>}
        </div>
      )}
      <div className="w-full">
        {children}
      </div>
      {insight && (
        <p className="mt-6 pt-5 border-t border-gray-100 font-sans font-light text-sm opacity-70">
          <span className="text-ramify-gold500 font-normal">→</span> {insight}
        </p>
      )}
    </div>
  );
}

// Simple Bar Chart - minimal, clean
interface SimpleBarChartProps {
  data: Array<{ name: string; value: number; color?: string }>;
  height?: number;
  showValue?: boolean;
}

export function SimpleBarChart({ data, height = 300, showValue = true }: SimpleBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} layout="vertical" margin={{ left: 0, right: 40 }}>
        <XAxis type="number" hide />
        <YAxis 
          type="category" 
          dataKey="name" 
          axisLine={false} 
          tickLine={false}
          tick={{ fontSize: 14, fontFamily: "PP Fragment Sans", fill: "#1E1E1E" }}
          width={120}
        />
        <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={40}>
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color || chartColors.primary} />
          ))}
        </Bar>
        {showValue && (
          <Tooltip
            cursor={false}
            contentStyle={{
              background: "#1E1E1E",
              border: "none",
              borderRadius: "8px",
              color: "white",
              fontFamily: "PP Fragment Sans",
            }}
          />
        )}
      </BarChart>
    </ResponsiveContainer>
  );
}

// Comparison Bar - for A vs B comparisons
interface ComparisonBarProps {
  label: string;
  valueA: number;
  valueB: number;
  labelA?: string;
  labelB?: string;
  colorA?: string;
  colorB?: string;
}

export function ComparisonBar({ 
  label, 
  valueA, 
  valueB, 
  labelA = "A", 
  labelB = "B",
  colorA = chartColors.primary,
  colorB = chartColors.secondary 
}: ComparisonBarProps) {
  const total = valueA + valueB;
  const percentA = Math.round((valueA / total) * 100);
  const percentB = 100 - percentA;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <span className="font-sans text-sm opacity-60">{label}</span>
        <div className="flex gap-6 text-sm font-sans">
          <span style={{ color: colorA }}>{labelA}: {percentA}%</span>
          <span style={{ color: colorB }}>{labelB}: {percentB}%</span>
        </div>
      </div>
      <div className="h-4 rounded-full overflow-hidden flex bg-gray-100">
        <div 
          className="h-full transition-all duration-500" 
          style={{ width: `${percentA}%`, backgroundColor: colorA }}
        />
        <div 
          className="h-full transition-all duration-500" 
          style={{ width: `${percentB}%`, backgroundColor: colorB }}
        />
      </div>
    </div>
  );
}

// Donut Chart - clean, minimal
interface DonutChartProps {
  data: Array<{ name: string; value: number; color: string }>;
  height?: number;
  centerLabel?: string;
  centerValue?: string;
}

export function DonutChart({ data, height = 300, centerLabel, centerValue }: DonutChartProps) {
  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            innerRadius="60%"
            outerRadius="90%"
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Legend 
            verticalAlign="bottom"
            formatter={(value) => <span className="font-sans text-sm">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
      {centerLabel && centerValue && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none" style={{ marginBottom: 40 }}>
          <span className="text-4xl font-serif">{centerValue}</span>
          <span className="text-sm font-sans opacity-50 mt-1">{centerLabel}</span>
        </div>
      )}
    </div>
  );
}

// Horizontal Bar Chart (legacy support)
interface HorizontalBarChartProps {
  data: Array<{ name: string; value: number }>;
  dataKey?: string;
  height?: number;
  color?: string;
}

export function HorizontalBarChart({ data, height = 200, color = chartColors.primary }: HorizontalBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} layout="vertical" margin={{ left: 0, right: 20 }}>
        <XAxis type="number" hide />
        <YAxis 
          type="category" 
          dataKey="name" 
          axisLine={false} 
          tickLine={false}
          tick={{ fontSize: 13, fontFamily: "PP Fragment Sans" }}
          width={100}
        />
        <Bar dataKey="value" fill={color} radius={[0, 6, 6, 0]} barSize={32} />
      </BarChart>
    </ResponsiveContainer>
  );
}

// Grouped Bar Chart (legacy support)
interface GroupedBarChartProps {
  data: Array<Record<string, string | number>>;
  keys: Array<{ key: string; color: string; name: string }>;
  height?: number;
  showLegend?: boolean;
}

export function GroupedBarChart({ data, keys, height = 280, showLegend = false }: GroupedBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" vertical={false} />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false}
          tick={{ fontSize: 13, fontFamily: "PP Fragment Sans" }}
        />
        <YAxis hide />
        <Tooltip
          cursor={{ fill: "rgba(0,0,0,0.02)" }}
          contentStyle={{
            background: "#1E1E1E",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontFamily: "PP Fragment Sans",
          }}
        />
        {showLegend && (
          <Legend 
            verticalAlign="top"
            formatter={(value) => <span className="font-sans text-sm">{value}</span>}
          />
        )}
        {keys.map((k) => (
          <Bar key={k.key} dataKey={k.key} fill={k.color} name={k.name} radius={[4, 4, 0, 0]} barSize={50} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

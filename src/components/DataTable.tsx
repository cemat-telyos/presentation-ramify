"use client";

import React from "react";

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
  align?: "left" | "center" | "right";
  width?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
}

export function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  className = "",
}: DataTableProps<T>) {
  const getAlignClass = (align?: "left" | "center" | "right") => {
    switch (align) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };

  const getValue = (row: T, key: keyof T | string): T[keyof T] => {
    return row[key as keyof T];
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className={getAlignClass(col.align)}
                style={{ width: col.width }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => {
                const value = getValue(row, col.key);
                return (
                  <td key={colIndex} className={getAlignClass(col.align)}>
                    {col.render ? col.render(value, row) : String(value ?? "")}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface ComparisonTableProps {
  title?: string;
  rows: {
    label: string;
    value1: string | number;
    value2: string | number;
  }[];
  header1: string;
  header2: string;
  className?: string;
}

export function ComparisonTable({
  title,
  rows,
  header1,
  header2,
  className = "",
}: ComparisonTableProps) {
  return (
    <div className={`bg-white rounded-lg p-4 ${className}`}>
      {title && (
        <h4 className="font-serif text-lg mb-4">{title}</h4>
      )}
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-2 text-xs font-sans font-normal uppercase tracking-wider opacity-70">
              Métrique
            </th>
            <th className="text-right py-2 text-xs font-sans font-normal uppercase tracking-wider opacity-70">
              {header1}
            </th>
            <th className="text-right py-2 text-xs font-sans font-normal uppercase tracking-wider opacity-70">
              {header2}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-gray-100 last:border-0">
              <td className="py-3 font-sans font-light text-sm">{row.label}</td>
              <td className="py-3 text-right font-serif">{row.value1}</td>
              <td className="py-3 text-right font-serif">{row.value2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

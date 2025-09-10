import React from "react";
import { usePortfolio } from "./hooks/usePortfolio";
import PortfolioTable from "./components/PortfolioTable";

export default function App() {
  const { data, loading, error } = usePortfolio(15000);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Stock Screener</h1>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {data && <PortfolioTable data={data} />}
    </div>
  );
}

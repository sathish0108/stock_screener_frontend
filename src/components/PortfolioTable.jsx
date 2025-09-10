import React from "react";
import classNames from "classnames";

export default function PortfolioTable({ data }) {
  if (!data?.sectors) return <p className="text-center py-4">No data available</p>;

  return (
    <div className="space-y-8">

      {data.sectors.map((sector) => (
        <div key={sector.sector} className="overflow-x-auto border rounded-lg shadow-sm">
          <h2 className="px-4 py-2 font-bold bg-gray-100 border-b">{sector.sector} Breakdown</h2>
          <table className="min-w-full text-sm sm:text-base">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 border text-left">Stock</th>
                <th className="px-3 py-2 border">Purchase Price</th>
                <th className="px-3 py-2 border">Quantity</th>
                <th className="px-3 py-2 border">Investment</th>
                <th className="px-3 py-2 border">CMP</th>
                <th className="px-3 py-2 border">Present Value</th>
                <th className="px-3 py-2 border">Gain/Loss</th>
                <th className="px-3 py-2 border">Portfolio %</th>
                <th className="px-3 py-2 border">P/E Ratio</th>
                <th className="px-3 py-2 border">Earnings</th>
              </tr>
            </thead>
            <tbody>
              {sector.stocks.map((stock, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-3 py-2 border">{stock.stockName}</td>
                  <td className="px-3 py-2 border">{stock.purchasePrice}</td>
                  <td className="px-3 py-2 border">{stock.quantity}</td>
                  <td className="px-3 py-2 border">{stock.investment}</td>
                  <td className="px-3 py-2 border">{stock.cmp}</td>
                  <td className="px-3 py-2 border">{stock.presentValue.toFixed(2)}</td>
                  <td
                    className={classNames(
                      "px-3 py-2 border font-medium",
                      stock.gainLoss > 0 ? "text-green-600" : "text-red-600"
                    )}
                  >
                    {stock.gainLoss.toFixed(2)}
                  </td>
                  <td className="px-3 py-2 border">{stock.portfolioPct}%</td>
                  <td className="px-3 py-2 border">{stock.peRatio}</td>
                  <td className="px-3 py-2 border">{stock.eps}</td>
                </tr>
              ))}

             
              {/* <tr className="bg-gray-200 font-semibold">
                <td colSpan={3} className="px-3 py-2 border">
                  {sector.sector} Total
                </td>
                <td className="px-3 py-2 border">{sector.totalInvestment.toFixed(2)}</td>
                <td className="px-3 py-2 border">—</td>
                <td className="px-3 py-2 border">{sector.totalPresentValue.toFixed(2)}</td>
                <td
                  className={classNames(
                    "px-3 py-2 border",
                    sector.totalGainLoss > 0 ? "text-green-600" : "text-red-600"
                  )}
                >
                  {sector.totalGainLoss.toFixed(2)}
                </td>
                <td colSpan={3} className="px-3 py-2 border">—</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      ))}
     
      <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-400 text-sm sm:text-base">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-3 py-2 border border-gray-400 text-left">Stock / Sector</th>
            <th className="px-3 py-2 border border-gray-400">Investment</th>
            <th className="px-3 py-2 border border-gray-400">Present Value</th>
            <th className="px-3 py-2 border border-gray-400">Gain/Loss</th>
          </tr>
        </thead>
        <tbody>
          {data.sectors.map((sector) => (
            <React.Fragment key={sector.sector}>
            
              <tr className="bg-gray-200 font-semibold">
                <td className="px-3 py-2 border border-gray-400">{sector.sector}</td>
                <td className="px-3 py-2 border border-gray-400">{sector.totalInvestment.toFixed(2)}</td>
                <td className="px-3 py-2 border border-gray-400">{sector.totalPresentValue.toFixed(2)}</td>
                <td
                  className={classNames(
                    "px-3 py-2 border border-gray-400",
                    sector.totalGainLoss > 0 ? "text-green-600" : "text-red-600"
                  )}
                >
                  {sector.totalGainLoss.toFixed(2)}
                </td>
              </tr>

          
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>

  
    </div>
  );
}

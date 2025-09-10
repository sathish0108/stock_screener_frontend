# stock screener(Frontend)

A **React Vite** application that displays portfolio insights fetched from the backend API.  
It shows **stocks grouped by sector**, calculates **investment metrics**, and updates **CMP, Present Value, and Gain/Loss every 15 seconds**.

---

## Features
- **Real-time Updates**: CMP, Present Value, and Gain/Loss auto-refresh every 15s.
- **Sector Grouping**: Portfolio holdings are grouped by sector with totals.
- **Color Indicators**:  
  - Green = Gains  
  - Red = Losses
- **Responsive Design** with Tailwind CSS.
- **Performance Optimized** with memoization to avoid unnecessary re-renders.
- **Error Handling**: Clear messages when API fails.

---

## Tech Stack
- **React (Vite)**
- **Tailwind CSS**
- **Axios** (API calls)
- **react-table** (for tabular display)
- **Recharts** (optional charting)

---

## ⚙️ Setup & Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/sathish0108/stock_screener_frontend.git
   cd portfolio-frontend

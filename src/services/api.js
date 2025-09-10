import axios from "axios";

const API_BASE = "http://localhost:4000/api";

export async function fetchPortfolio() {
  const url = `${API_BASE}/portfolio`;
  const { data } = await axios.get(url, { timeout: 100000 });
  return data;
}

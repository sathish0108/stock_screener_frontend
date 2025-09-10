import { useEffect, useState, useRef, useCallback } from "react";
import { fetchPortfolio } from "../services/api";

export function usePortfolio(pollInterval = 200000) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const timerRef = useRef(null);
  const isMountedRef = useRef(true);

  const load = useCallback(async () => {
    setError(null);
    try {
      const res = await fetchPortfolio();
      if (isMountedRef.current) {
        setData(res);
      }
    } catch (err) {
      console.error("Portfolio fetch error:", err?.message || err);
      if (isMountedRef.current) {
        setError(err?.message || "Failed to fetch portfolio");
      }
    } finally {
      if (isMountedRef.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    load();

    timerRef.current = setInterval(load, pollInterval);

    return () => {
      isMountedRef.current = false;
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [load, pollInterval]);

  return { data, loading, error, refresh: load };
}

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Shows a loader during route transitions.
 *
 * @param {number} minDuration  Minimum duration to show loader (ms) — prevents flash
 * @param {number} initialDelay How long loader stays on first page load (ms)
 */
export const useRouteLoader = (minDuration = 400, initialDelay = 600) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const duration = isInitialLoad ? initialDelay : minDuration;
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (isInitialLoad) setIsInitialLoad(false);
    }, duration);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return isLoading;
};
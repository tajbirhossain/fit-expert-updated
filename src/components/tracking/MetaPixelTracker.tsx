"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export default function MetaPixelTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryString = searchParams.toString();
    const url = `${pathname}${queryString ? `?${queryString}` : ""}`;

    if (typeof window.fbq !== "undefined") {
      window.fbq("track", "PageView", {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

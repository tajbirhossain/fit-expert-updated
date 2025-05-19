"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = pathname?.split("/")[1]?.toUpperCase() === "EN" ? "EN" : "PL";
  const [lang, setLang] = useState<"PL" | "EN">(currentLocale);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    setLang(currentLocale);
  }, [currentLocale]);

  const switchLocale = (newLocale: "PL" | "EN") => {
    const segments = pathname.split("/");
    segments[1] = newLocale.toLowerCase();
    const newPath = segments.join("/") || `/${newLocale.toLowerCase()}`;
    window.location.href = newPath;
  };


  return (
    <div>
      <div ref={dropdownRef} className="relative mr-[26px] max-[650px]:mr-[18px]">
        <button
          onClick={() => setIsOpen((o) => !o)}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          className="flex items-center font-bold transition"
        >
          <span className="pr-2 text-base max-[650px]:text-xs">{lang}</span>
          <img
            src="/icons/arrow-down-black.svg"
            alt=""
            className={`w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <ul className="absolute left-0 mt-2 w-20 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-20">
            {(["PL", "EN"] as const).map((code) => (
              <li key={code}>
                <button
                  onClick={() => switchLocale(code)}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
                >
                  {code}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

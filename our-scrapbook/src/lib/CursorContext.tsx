"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface CursorContextValue {
  cursorEnabled: boolean;
  setCursorEnabled: (v: boolean) => void;
  isTouch: boolean;
}

const CursorContext = createContext<CursorContextValue>({
  cursorEnabled: true,
  setCursorEnabled: () => {},
  isTouch: false,
});

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorEnabled, setCursorEnabledState] = useState(true);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touch);

    const stored = window.localStorage.getItem("sunflowerCursorEnabled");
    if (stored !== null) {
      setCursorEnabledState(stored === "true");
    }
  }, []);

  const setCursorEnabled = (v: boolean) => {
    setCursorEnabledState(v);
    window.localStorage.setItem("sunflowerCursorEnabled", String(v));
  };

  return (
    <CursorContext.Provider value={{ cursorEnabled, setCursorEnabled, isTouch }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursorPref() {
  return useContext(CursorContext);
}

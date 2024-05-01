import React, { createContext, useContext, useState } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function UseTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("undefined context");
  }
  return context;
}

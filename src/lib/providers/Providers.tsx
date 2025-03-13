"use client";
import { ReactNode } from "react";
import { theme } from "../theme/Theme";
import { ThemeProvider } from "@mui/material";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;

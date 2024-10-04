"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import { useThemeMode } from "@/hooks/useThemeMode";

const SiteHeader = () => {
  useThemeMode();

  let pathname = usePathname();
  console.log(pathname);

  return <Header />;
};

export default SiteHeader;

"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AosInitializer() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return null;
}

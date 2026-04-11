"use client";

import { useEffect } from "react";
import { fireViewContent } from "@/src/lib/meta/pixel";

export default function ViewContentTracker() {
  useEffect(() => {
    fireViewContent();
  }, []);

  // Renders nothing visible
  return null;
}

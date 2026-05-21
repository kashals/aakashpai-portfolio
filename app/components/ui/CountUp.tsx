"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

export default function CountUp({
  value,
  duration = 2.5,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix/prefix (e.g. "5+", "999+", "$10")
  // Fallback to exactly what was passed in if no numbers exist
  const match = value.match(/(\D*)(\d+)(\D*)/);
  const prefix = match ? match[1] : "";
  const num = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : value;
  
  const [displayValue, setDisplayValue] = useState(num === 0 ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    if (isInView && num > 0) {
      const controls = animate(0, num, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(`${prefix}${Math.round(latest)}${suffix}`);
        },
      });

      return controls.stop;
    }
  }, [isInView, num, prefix, suffix, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

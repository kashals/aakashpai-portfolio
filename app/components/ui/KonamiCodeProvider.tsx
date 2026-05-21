"use client";

import { useEffect, useState } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function KonamiCodeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [inputSequence, setInputSequence] = useState<string[]>([]);

  useEffect(() => {
    // Sync initial state
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expectedKey = key === "b" || key === "a" ? key.toLowerCase() : e.key;
      
      const newSequence = [...inputSequence, expectedKey].slice(
        -KONAMI_CODE.length
      );
      
      setInputSequence(newSequence);

      if (newSequence.join(",") === KONAMI_CODE.join(",")) {
        triggerThemeSwitch();
        setInputSequence([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputSequence, theme]);

  const triggerThemeSwitch = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    // Fallback if View Transitions API is not supported
    if (!document.startViewTransition) {
      applyTheme(nextTheme);
      return;
    }

    const transition = document.startViewTransition(() => {
      applyTheme(nextTheme);
    });

    transition.ready.then(() => {
      const x = window.innerWidth / 2;
      const y = window.innerHeight / 2;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 1000,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const applyTheme = (nextTheme: "dark" | "light") => {
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return <>{children}</>;
}

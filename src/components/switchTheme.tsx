import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

export default function SwitchTheme(): JSX.Element {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setEnabled(savedTheme ? savedTheme === "dark" : prefersDark);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const layout = document.getElementById("root");
    if (layout) {
      if (enabled) {
        layout.classList.remove("light");
        layout.classList.add("dark");
      } else {
        layout.classList.remove("dark");
        layout.classList.add("light");
      }
      window.localStorage.setItem("theme", enabled ? "dark" : "light");
    }
  }, [enabled, ready]);

  return (
    <div className="flex w-full items-center justify-center gap-2 text-xs text-stone-500 dark:text-stone-400">
      <span aria-hidden="true">Light</span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        aria-label="Toggle dark mode"
        className="group inline-flex h-6 w-16 items-center rounded-full bg-stone-300 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500 data-[checked]:bg-stone-700"
      >
        <span className="size-4 translate-x-1 rounded-full bg-stone-700 transition group-data-[checked]:translate-x-11 group-data-[checked]:bg-stone-100" />
      </Switch>
      <span aria-hidden="true">Dark</span>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

export default function SwitchDark(): JSX.Element {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const layout = document.getElementById("root");
    if (layout) {
      if (enabled) {
        layout.classList.remove("light");
        layout.classList.add("dark");
      } else {
        layout.classList.remove("dark");
        layout.classList.add("light");
      }
    }
  }, [enabled]);

  return (
    <div className="flex justify-center items-center w-full pt-[5.5px]">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-neutral-800 transition data-[checked]:bg-stone-100 mx-auto"
      >
        <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
      </Switch>
    </div>
  );
}
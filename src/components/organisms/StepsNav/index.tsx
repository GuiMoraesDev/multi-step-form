"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import StepLink from "../../molecules/StepLink";

export default function StepsNav() {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  return (
    <nav
      className="flex bg-bottom bg-cover p-6 rounded-md w-1/5"
      style={{
        backgroundImage: "url('/assets/images/desktop-background.png')",
      }}
    >
      <ul className="flex flex-col gap-4">
        <li>
          <StepLink
            number={1}
            title="Your info"
            href="/steps/personal-info"
            isSelected={selectedLayoutSegment === "personal-info"}
          />
        </li>

        <li>
          <StepLink
            number={2}
            title="Select plan"
            href="/steps/select-plan"
            isSelected={selectedLayoutSegment === "select-plan"}
          />
        </li>

        <li>
          <StepLink
            number={3}
            title="Add-ons"
            href="/steps/add-ons"
            isSelected={selectedLayoutSegment === "add-ons"}
          />
        </li>

        <li>
          <StepLink
            number={4}
            title="Summary"
            href="/steps/summary"
            isSelected={selectedLayoutSegment === "summary"}
          />
        </li>
      </ul>
    </nav>
  );
}

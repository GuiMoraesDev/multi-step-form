import StepLink from "../../molecules/StepLink";

type Steps = "personal-info" | "select-plan" | "add-ons" | "summary";

type Props = {
  currStep: Steps;
}

export default function StepsNav({currStep}: Props) {
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
            isSelected={currStep === "personal-info"}
          />
        </li>

        <li>
          <StepLink
            number={2}
            title="Select plan"
            href="/steps/select-plan"
            isSelected={currStep === "select-plan"}
          />
        </li>

        <li>
          <StepLink
            number={3}
            title="Add-ons"
            href="/steps/add-ons"
            isSelected={currStep === "add-ons"}
          />
        </li>

        <li>
          <StepLink
            number={4}
            title="Summary"
            href="/steps/summary"
            isSelected={currStep === "summary"}
          />
        </li>
      </ul>
    </nav>
  );
}

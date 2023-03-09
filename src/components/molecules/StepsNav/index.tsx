import StepIndex from "../../atoms/StepIndex";

type Steps = "personal-info" | "select-plan" | "add-ons" | "summary";

type Props = {
  currStep: Steps;
};

export default function StepsNav({ currStep }: Props) {
  return (
    <nav className="flex xl:bg-bottom bg-center bg-[length:150%] p-6 rounded-md w-full xl:w-1/4 bg-[url('/assets/images/bg-sidebar-mobile.svg')] xl:bg-[url('/assets/images/bg-sidebar-desktop.svg')]">
      <ul className="flex xl:flex-col gap-4">
        <li>
          <StepIndex
            number={1}
            title="Your info"
            isSelected={currStep === "personal-info"}
          />
        </li>

        <li>
          <StepIndex
            number={2}
            title="Select plan"
            isSelected={currStep === "select-plan"}
          />
        </li>

        <li>
          <StepIndex
            number={3}
            title="Add-ons"
            isSelected={currStep === "add-ons"}
          />
        </li>

        <li>
          <StepIndex
            number={4}
            title="Summary"
            isSelected={currStep === "summary"}
          />
        </li>
      </ul>
    </nav>
  );
}

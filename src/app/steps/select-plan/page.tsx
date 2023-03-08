import SelectPlanForm from "components/organisms/SelectPlanForm";
import StepsNav from "components/organisms/StepsNav";

export const metadata = {
  title: "Select your plan",
};

export default function StepsPage() {
  return (
    <>
      <StepsNav currStep="select-plan" />

      <SelectPlanForm />
    </>
  );
}

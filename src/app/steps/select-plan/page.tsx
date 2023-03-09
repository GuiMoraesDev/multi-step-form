import SelectPlanForm from "components/organisms/SelectPlanForm";
import StepsNav from "components/molecules/StepsNav";

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

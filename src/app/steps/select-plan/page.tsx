import StepsNav from "components/molecules/StepsNav";
import SelectPlanForm from "components/organisms/SelectPlanForm";

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

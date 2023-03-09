import StepsNav from "components/molecules/StepsNav";
import SummaryForm from "components/organisms/SummaryForm";

export const metadata = {
  title: "Finishing up",
};

export default function StepsPage() {
  return (
    <>
      <StepsNav currStep="summary" />

      <SummaryForm />
    </>
  );
}

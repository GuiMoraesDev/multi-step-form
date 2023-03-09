import AddOnsForm from "components/organisms/AddOnsForm";
import StepsNav from "components/molecules/StepsNav";

export const metadata = {
  title: "Pick add-ons",
};

export default function StepsPage() {
  return (
    <>
      <StepsNav currStep="add-ons" />

      <AddOnsForm />
    </>
  );
}

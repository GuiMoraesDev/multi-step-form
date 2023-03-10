import StepsNav from "components/molecules/StepsNav";
import PersonalInfoForm from "components/organisms/PersonalInfoForm";

export const metadata = {
  title: "Personal info",
};

export default function StepsPage() {
  return (
    <>
      <StepsNav currStep="personal-info" />

      <PersonalInfoForm />
    </>
  );
}

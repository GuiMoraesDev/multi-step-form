import PersonalInfoForm from "components/organisms/PersonalInfoForm";
import StepsNav from "components/organisms/StepsNav";

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

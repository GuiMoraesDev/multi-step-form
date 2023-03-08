import Form from "components/molecules/Form";
import InputField from "components/molecules/InputField";

export default function SelectPlanForm() {
  return (
    <Form
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
      backLink="/steps/personal-info"
      nextLink="/steps/add-ons"
    >
      <div className="flex flex-col gap-3 text-sm">
        <InputField label="Name" placeholder="e.g. Stephen King" />

        <InputField
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />

        <InputField label="Phone Number" placeholder="e.g. +1 234 567 890" />
      </div>
    </Form>
  );
}

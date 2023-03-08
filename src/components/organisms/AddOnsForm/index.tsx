import InputField from "components/molecules/InputField";
import Form from "components/molecules/Form";

export default function AddOnsForm() {
  return (
    <Form
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience"
      backLink="/steps/select-plan"
      nextLink="/steps/summary"
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

import InputField from "components/molecules/InputField";
import Form from "components/molecules/Form";

export default function PersonalInfoForm() {
  return (
    <Form
      title="Personal info"
      description="Please provide your name, email address, and phone number."
      nextLink="/steps/select-plan"
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

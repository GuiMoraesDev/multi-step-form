import Form from "components/molecules/Form";
import InputField from "components/molecules/InputField";

export default function SummaryForm() {
  return (
    <Form
      title="Finishing up"
      description="Double-check everything looks ok before confirming."
      backLink="/steps/add-ons"
      finishLink="/thank-you"
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

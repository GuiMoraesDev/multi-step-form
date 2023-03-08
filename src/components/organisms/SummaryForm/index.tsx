import Link from "components/atoms/Link";
import Form from "components/molecules/Form";
import InputField from "components/molecules/InputField";

export default function SummaryForm() {
  return (
    <Form
      title="Finishing up"
      description="Double-check everything looks ok before confirming."
    >
      <div className="flex flex-col gap-3 text-sm">
        <InputField label="Name" placeholder="e.g. Stephen King" />

        <InputField
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />

        <InputField label="Phone Number" placeholder="e.g. +1 234 567 890" />
      </div>

      <section className="flex items-center justify-between">
        <Link variant="secondary" href="/steps/add-ons">
          Go Back
        </Link>

        <Link className="ml-auto" href="/thank-you">
          Confirm
        </Link>
      </section>
    </Form>
  );
}

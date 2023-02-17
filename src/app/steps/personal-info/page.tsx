import Button from "components/atoms/Button";
import InputField from "components/molecules/InputField";

export const metadata = {
  title: 'Personal info',
}

export default function StepsPage() {
  return (
    <section className="flex flex-col justify-between py-6 gap-4 mx-auto w-[60%]">
      <div className="flex flex-col gap-2">
        <h1 className="text-marine-blue text-3xl font-bold">Personal info</h1>
        <small className="text-cool-gray">
          Please provide your name, email address, and phone number.
        </small>
      </div>

      <div className="flex flex-col gap-3 text-sm">
        <InputField label="Name" placeholder="e.g. Stephen King" />

        <InputField
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />

        <InputField label="Phone Number" placeholder="e.g. +1 234 567 890" />
      </div>

      <Button type="button">Next Step</Button>
    </section>
  );
}

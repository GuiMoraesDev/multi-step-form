import InputField from "components/molecules/InputField";
import StepsNav from "components/organisms/StepsNav";

export const metadata = {
  title: "Subscribed",
};

export default function StepsPage() {
  return (
    <div className="flex p-6 bg-white h-full w-full rounded-lg shadow-sm">
      <StepsNav currStep="summary" />

      <section className="flex flex-col justify-between py-6 gap-4 mx-auto w-[60%]">
        <div className="flex flex-col gap-2">
          <h1 className="text-marine-blue text-3xl font-bold">Finishing up</h1>
          <small className="text-cool-gray">
            Double-check everything looks ok before confirming.
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
      </section>
    </div>
  );
}

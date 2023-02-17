'use client'

import { useRouter } from "next/navigation";

import Button from "components/atoms/Button";
import InputField from "components/molecules/InputField";
import StepsNav from "components/organisms/StepsNav";

export const metadata = {
  title: "Pick add-ons",
};

export default function StepsPage() {
  const router = useRouter();

  const handlePreviousStep = () => {
    router.push("/steps/select-plan");
  };

  const handleNextStep = () => {
    router.push("/steps/summary");
  };

  return (
    <>
      <StepsNav currStep="add-ons" />

      <form className="flex flex-col justify-between py-6 gap-4 mx-auto w-[60%]">
        <div className="flex flex-col gap-2">
          <h1 className="text-marine-blue text-3xl font-bold">Pick add-ons</h1>
          <small className="text-cool-gray">
            Add-ons help enhance your gaming experience
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

        <section className="flex items-center justify-between">
        <Button type="button" variant="secondary" onClick={handlePreviousStep}>Go Back</Button>
          <Button type="button" onClick={handleNextStep}>Next Step</Button>
        </section>
      </form>
    </>
  );
}

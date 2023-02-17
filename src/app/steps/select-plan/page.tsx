'use client'

import { useRouter } from "next/navigation";

import Button from "components/atoms/Button";
import InputField from "components/molecules/InputField";
import StepsNav from "components/organisms/StepsNav";

export const metadata = {
  title: "Select your plan",
};

export default function StepsPage() {
  const router = useRouter();

  const handlePreviousStep = () => {
    router.push("/steps/personal-info");
  };

  const handleNextStep = () => {
    router.push("/steps/add-ons");
  };

  return (
    <>
      <StepsNav currStep="select-plan" />

      <form className="flex flex-col justify-between py-6 gap-4 mx-auto w-[60%]">
        <div className="flex flex-col gap-2">
          <h1 className="text-marine-blue text-3xl font-bold">
            Select your plan
          </h1>
          <small className="text-cool-gray">
            You have the option of monthly or yearly billing.
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

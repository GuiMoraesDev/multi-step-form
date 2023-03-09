"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "components/atoms/Button";
import ErrorMessage from "components/atoms/ErrorMessage";
import Link from "components/atoms/Link";
import Switcher from "components/atoms/Switcher";
import Form from "components/molecules/Form";
import SelectableCards from "components/molecules/SelectableCards";
import { useSubscription } from "context/subscription";
import onSubmitError from "helpers/onSubmitError";
import { SelectPlanInputs, selectPlanSchema } from "schemas";

type PriceProps = {
  monthly: string;
  yearly: string;
};

type PriceOptions = {
  arcade: PriceProps;
  advanced: PriceProps;
  pro: PriceProps;
};

const prices: PriceOptions = {
  arcade: {
    monthly: "$9/mo",
    yearly: "$90/yr",
  },
  advanced: {
    monthly: "$12/mo",
    yearly: "$120/yr",
  },
  pro: {
    monthly: "$15/mo",
    yearly: "$150/yr",
  },
};

export default function SelectPlanForm() {
  const { push } = useRouter();

  const { data: defaultValues, setSubscriptionData } = useSubscription();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SelectPlanInputs>({
    resolver: zodResolver(selectPlanSchema),
    defaultValues,
  });

  const billingMethod: keyof PriceProps = watch("billed-yearly")
    ? "yearly"
    : "monthly";

  const onSubmit: SubmitHandler<SelectPlanInputs> = useCallback(
    (data) => {
      setSubscriptionData(data);

      push("/steps/add-ons");
    },
    [setSubscriptionData, push]
  );

  return (
    <Form
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
      onSubmit={handleSubmit(onSubmit, onSubmitError)}
    >
      <div className="flex flex-col items-center justify-between gap-4">
        <section className="relative flex items-center justify-between pb-6 gap-4 w-full">
          <SelectableCards
            image_src="/assets/images/icon-arcade.svg"
            image_alt="arcade"
            title="Arcade"
            value="arcade"
            price={prices.arcade[billingMethod]}
            {...register("select-plan")}
          />

          <SelectableCards
            image_src="/assets/images/icon-advanced.svg"
            image_alt="advanced"
            title="Advanced"
            price={prices.advanced[billingMethod]}
            value="advanced"
            isRecommended
            {...register("select-plan")}
          />

          <SelectableCards
            image_src="/assets/images/icon-pro.svg"
            image_alt="pro"
            title="Pro"
            price={prices.pro[billingMethod]}
            value="pro"
            {...register("select-plan")}
          />

          <ErrorMessage
            errorMessage={errors["select-plan"]?.message}
            positionY="bottom"
            positionX="center"
          />
        </section>

        <Switcher
          firstOption="Monthly"
          secondOption="Yearly"
          {...register("billed-yearly")}
        />
      </div>

      <section className="flex items-center justify-between">
        <Link variant="secondary" href="/steps/personal-info">
          Go Back
        </Link>

        <Button type="submit">Next Step</Button>
      </section>
    </Form>
  );
}

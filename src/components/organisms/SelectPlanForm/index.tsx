"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "components/atoms/Link";
import SelectableCards from "components/atoms/SelectableCards";
import Form from "components/molecules/Form";
import { useSubscription } from "context/subscription";
import { SubmitHandler, useForm } from "react-hook-form";
import { SelectPlanInputs, selectPlanSchema } from "schemas";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import onSubmitError from "helpers/onSubmitError";
import Button from "components/atoms/Button";
import ErrorMessage from "components/atoms/ErrorMessage";
import Switcher from "components/atoms/Switcher";

export default function SelectPlanForm() {
  const { push } = useRouter();

  const {
    data: { selectPlan },
    setSelectPlan,
  } = useSubscription();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SelectPlanInputs>({
    resolver: zodResolver(selectPlanSchema),
    defaultValues: {
      ...selectPlan,
    },
  });

  const onSubmit: SubmitHandler<SelectPlanInputs> = useCallback(
    (data) => {
      setSelectPlan(data);

      push("/steps/add-ons");
    },
    [setSelectPlan, push]
  );

  return (
    <Form
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
      onSubmit={handleSubmit(onSubmit, onSubmitError)}
    >
      <div className="flex flex-col items-center justify-between gap-4">
        <section className="flex items-center justify-between gap-4 w-full">
          <SelectableCards
            image_src="/assets/images/icon-arcade.svg"
            image_alt="arcade"
            title="Arcade"
            value="arcade"
            price="$9/mo"
            {...register("select-plan")}
          />

          <SelectableCards
            image_src="/assets/images/icon-advanced.svg"
            image_alt="advanced"
            title="Advanced"
            price="$12/mo"
            value="advanced"
            {...register("select-plan")}
          />

          <SelectableCards
            image_src="/assets/images/icon-pro.svg"
            image_alt="pro"
            title="Pro"
            price="$15/mo"
            value="pro"
            {...register("select-plan")}
          />

          <ErrorMessage errorMessage={errors["select-plan"]?.message} />
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

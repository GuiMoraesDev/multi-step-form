"use client";

import InputField from "components/molecules/InputField";
import Form from "components/molecules/Form";
import { SubmitHandler } from "react-hook-form";
import Button from "components/atoms/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonalInfoInputs, personalInfoSchema } from "schemas";
import onSubmitError from "helpers/onSubmitError";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useSubscription } from "context/subscription";

export default function PersonalInfoForm() {
  const { push } = useRouter();

  const {
    data: { personalInfo },
    setPersonalInfo,
  } = useSubscription();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoInputs>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      ...personalInfo,
    },
  });

  const onSubmit: SubmitHandler<PersonalInfoInputs> = useCallback(
    (data) => {
      setPersonalInfo(data);

      push("/steps/select-plan");
    },
    [setPersonalInfo, push]
  );

  return (
    <Form
      title="Personal info"
      description="Please provide your name, email address, and phone number."
      onSubmit={handleSubmit(onSubmit, onSubmitError)}
    >
      <div className="flex flex-col gap-3 text-sm">
        <InputField
          label="Name"
          placeholder="e.g. Stephen King"
          errorMessage={errors.name?.message}
          {...register("name")}
        />

        <InputField
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          errorMessage={errors.email?.message}
          {...register("email")}
        />

        <InputField
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          errorMessage={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <section className="flex items-center justify-end">
        <Button type="submit">Next Step</Button>
      </section>
    </Form>
  );
}

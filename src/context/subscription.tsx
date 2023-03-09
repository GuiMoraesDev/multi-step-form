"use client";

import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useCallback,
} from "react";

import { PersonalInfoInputs, SelectPlanInputs } from "schemas";

type SubscriptionDTO = PersonalInfoInputs & SelectPlanInputs;
type SetSubscriptionProps = PersonalInfoInputs | SelectPlanInputs;

type SubscriptionContextData = {
  data: SubscriptionDTO;
  setSubscriptionData: (data: SetSubscriptionProps) => void;
};

const SubscriptionDefaultValues = {
  name: "",
  email: "",
  phone: "",
  "select-plan": "",
  "billed-yearly": false,
};

const SubscriptionContext = createContext<SubscriptionContextData>(
  {} as SubscriptionContextData
);

const SubscriptionProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<SubscriptionDTO>(SubscriptionDefaultValues);

  const setSubscriptionData = useCallback((data: SetSubscriptionProps) => {
    setData((state) => ({
      ...state,
      ...data,
    }));
  }, []);

  return (
    <SubscriptionContext.Provider
      value={{
        data,
        setSubscriptionData,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

function useSubscription(): SubscriptionContextData {
  const context = useContext(SubscriptionContext);

  if (!context) {
    throw new Error(
      "DEV Alert: useSubscription must be used whithin a SubscriptionProvider"
    );
  }

  return context;
}

export { SubscriptionProvider, useSubscription };

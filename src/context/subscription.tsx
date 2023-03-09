"use client";

import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useCallback,
} from "react";

import { PersonalInfoInputs, SelectPlanInputs } from "schemas";

type SubscriptionDTO = {
  personalInfo: PersonalInfoInputs;
  selectPlan: SelectPlanInputs;
};

type SubscriptionContextData = {
  data: SubscriptionDTO;
  setPersonalInfo: (personalInfo: SubscriptionDTO["personalInfo"]) => void;
  setSelectPlan: (selectPlan: SubscriptionDTO["selectPlan"]) => void;
};

const SubscriptionDefaultValues = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },
  selectPlan: {
    "select-plan": "",
    "billed-yearly": false,
  },
};

const SubscriptionContext = createContext<SubscriptionContextData>(
  {} as SubscriptionContextData
);

const SubscriptionProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<SubscriptionDTO>(SubscriptionDefaultValues);

  const setPersonalInfo = useCallback(
    (personalInfo: SubscriptionDTO["personalInfo"]) => {
      setData((state) => ({
        ...state,
        personalInfo,
      }));
    },
    []
  );

  const setSelectPlan = useCallback(
    (selectPlan: SubscriptionDTO["selectPlan"]) => {
      setData((state) => ({
        ...state,
        selectPlan,
      }));
    },
    []
  );

  return (
    <SubscriptionContext.Provider
      value={{
        data,
        setPersonalInfo,
        setSelectPlan,
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

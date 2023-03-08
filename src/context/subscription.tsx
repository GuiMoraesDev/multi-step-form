"use client";

import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useCallback,
} from "react";
import { parseCookies, setCookie } from "nookies";

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
    "billed-yearly": "",
  },
};

const SubscriptionContext = createContext<SubscriptionContextData>(
  {} as SubscriptionContextData
);

const SubscriptionProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<SubscriptionDTO>(() => {
    const cookies = parseCookies();

    const personalInfoCookies = cookies?.personalInfo
      ? JSON.parse(cookies?.personalInfo)
      : undefined;
    const selectPlanCookies = cookies?.selectPlan
      ? JSON.parse(cookies?.selectPlan)
      : undefined;

    return {
      personalInfo: {
        ...SubscriptionDefaultValues.personalInfo,
        ...personalInfoCookies,
      },
      selectPlan: {
        ...SubscriptionDefaultValues.selectPlan,
        ...selectPlanCookies,
      },
    };
  });

  const setPersonalInfo = useCallback(
    (personalInfo: SubscriptionDTO["personalInfo"]) => {
      setData((state) => ({
        ...state,
        personalInfo,
      }));

      setCookie(null, "personalInfo", JSON.stringify(personalInfo), {
        maxAge: 5 * 60 * 60, //max age of 5 hours
        path: "/",
      });
    },
    []
  );

  const setSelectPlan = useCallback(
    (selectPlan: SubscriptionDTO["selectPlan"]) => {
      setData((state) => ({
        ...state,
        selectPlan,
      }));

      setCookie(null, "selectPlan", JSON.stringify(selectPlan), {
        maxAge: 5 * 60 * 60, //max age of 5 hours
        path: "/",
      });
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

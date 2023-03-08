import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useCallback,
} from "react";
import { parseCookies, setCookie } from "nookies";

import { PersonalInfoInputs } from "schemas";

type SubscriptionDTO = {
  personalInfo: PersonalInfoInputs;
};

type SubscriptionContextData = {
  data: SubscriptionDTO;
  setPersonalInfo: (personalInfo: SubscriptionDTO["personalInfo"]) => void;
};

const SubscriptionContext = createContext<SubscriptionContextData>(
  {} as SubscriptionContextData
);

const SubscriptionDefaultValues = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },
};

const SubscriptionProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<SubscriptionDTO>(() => {
    const cookies = parseCookies();

    const personalInfoCookies = JSON.parse(cookies.personalInfo);

    return {
      personalInfo: {
        ...SubscriptionDefaultValues.personalInfo,
        ...personalInfoCookies,
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

  return (
    <SubscriptionContext.Provider
      value={{
        data,
        setPersonalInfo,
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

import { createContext, useContext, useState } from 'react';

interface GlobalData {
  accessToken?: string;
}

interface GlobaContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

const GlobalContext = createContext({} as GlobaContextProps);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});
  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalCotext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const setAcessToken = (accessToken: string) => {
    setGlobalData({
      ...globalData,
      accessToken,
    });
  };

  return {
    acessToken: globalData?.accessToken,
    setAcessToken,
  };
};

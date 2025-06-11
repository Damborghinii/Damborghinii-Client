import { createContext, useContext, useState, ReactNode } from "react";

type ConfirmButtonContextType = {
  onConfirmClick?: () => void;
  setOnConfirmClick: (fn?: () => void) => void;
};

const ConfirmButtonContext = createContext<ConfirmButtonContextType>({
  onConfirmClick: undefined,
  setOnConfirmClick: () => {},
});

export const ConfirmButtonProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [onConfirmClick, setOnConfirmClick] = useState<() => void>();

  return (
    <ConfirmButtonContext.Provider
      value={{ onConfirmClick, setOnConfirmClick }}
    >
      {children}
    </ConfirmButtonContext.Provider>
  );
};

export const useConfirmButton = () => useContext(ConfirmButtonContext);

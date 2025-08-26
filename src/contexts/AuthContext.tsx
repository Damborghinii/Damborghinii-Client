// src/contexts/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useModal } from "@hooks/useModal";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  isLoggedIn: boolean;
  requireAuth: (action?: () => void) => void;
  setLoggedIn: (v: boolean) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  requireAuth: () => {},
  setLoggedIn: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!localStorage.getItem("accessToken")
  );

  useEffect(() => {
    const onStorage = () =>
      setIsLoggedIn(!!localStorage.getItem("accessToken"));
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const requireAuth = (action?: () => void) => {
    if (isLoggedIn) {
      action?.();
      return;
    }
    openModal({
      title: "로그인 시 열람 가능합니다.",
      primaryButton: {
        children: "취소",
        onClick: closeModal,
      },
      secondButton: {
        children: "로그인",
        onClick: () => {
          closeModal();
          navigate("/login");
        },
      },
    });
  };

  const logout = () => {
    openModal({
      title: "정말 로그아웃 하시겠습니까?",
      primaryButton: {
        children: "취소",
        onClick: closeModal,
      },
      secondButton: {
        children: "확인",
        onClick: () => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          setIsLoggedIn(false);
          closeModal();
          navigate("/main");
        },
      },
    });
  };

  const value = useMemo(
    () => ({ isLoggedIn, requireAuth, setLoggedIn: setIsLoggedIn, logout }),
    [isLoggedIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

import { MenuIcons } from "@assets/icons";
import styled from "@emotion/styled";
import theme from "@styles/theme";
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/contexts/AuthContext";

const MenuPage = () => {
  const { wallet: Wallet } = MenuIcons;
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };

  const goWallet = () => {
    navigate("/wallet/withdraw");
  };

  const { isLoggedIn, logout } = useAuth();

  return (
    <PageWrapper>
      {isLoggedIn ? (
        <MyProfilWrapper>내 프로필</MyProfilWrapper>
      ) : (
        <MyProfilWrapper>로그인이 필요한 서비스입니다.</MyProfilWrapper>
      )}
      <WalletWrapper onClick={goWallet}>
        <Wallet />
        지갑
      </WalletWrapper>
      {isLoggedIn ? (
        <LoginWrapper onClick={logout}>로그아웃</LoginWrapper>
      ) : (
        <LoginWrapper onClick={goLogin}>로그인</LoginWrapper>
      )}
    </PageWrapper>
  );
};

export default MenuPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px 24px;
`;

const MyProfilWrapper = styled.div`
  font-size: ${theme.typography["body1-2"].fontSize};
  font-weight: ${theme.typography["body1-2"].fontWeight};
  color: ${theme.color.neutral.B60};
`;

const WalletWrapper = styled.div`
  font-size: ${theme.typography["body1-2"].fontSize};
  font-weight: ${theme.typography["body1-2"].fontWeight};
  color: ${theme.color.neutral.B60};

  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  cursor: pointer;
`;

const LoginWrapper = styled.div`
  font-size: ${theme.typography["body1-2"].fontSize};
  font-weight: ${theme.typography["body1-2"].fontWeight};
  color: ${theme.color.neutral.B60};
  cursor: pointer;
`;

import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import theme from "@styles/theme";
import { IcArrowDown } from "@assets/svg";
import Button from "@components/common/button/Button";
import { useModal } from "@hooks/useModal";

const WithdrawPage = () => {
  const banks = [
    "농협",
    "신한은행",
    "KB국민은행",
    "우리은행",
    "하나은행",
    "기업은행",
    "토스뱅크",
    "카카오뱅크",
  ];

  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [showBankDropdown, setShowBankDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowBankDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //임시 값
  const maxWithdrawAmount = 1600;

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9-]/g, "").replace(/(-)+/g, "-");
    setAccountNumber(value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value == "") {
      setWithdrawAmount("");
      return;
    }
    const formattedValue = Number(value).toLocaleString();
    setWithdrawAmount(formattedValue);
  };

  const isAmountExceeded =
    Number(withdrawAmount.replace(/,/g, "")) > maxWithdrawAmount;
  const isButtonDisabled = isAmountExceeded || withdrawAmount === "";

  const { openModal, closeModal } = useModal();

  const handleButtonClick = () => {
    openModal({
      title: "신청하시겠어요?",
      sub: "신청한 금액은 1영업일 이내 계좌로 입금됩니다.",
      primaryButton: {
        children: "취소",
        onClick: closeModal,
      },
      secondButton: {
        children: "확인",
      },
    });
  };

  return (
    <PageContainer>
      <ContentContainer>
        <AccountSection>
          <SectionTitle>돈을 송금받을 계좌번호를 입력해주세요.</SectionTitle>

          <BankSelectContainer ref={dropdownRef}>
            <BankSelectButton
              onClick={() => setShowBankDropdown(!showBankDropdown)}
              isOpen={showBankDropdown}
              hasSelection={selectedBank !== ""}
            >
              <span>{selectedBank || "은행선택"}</span>
              <IcArrowDown width={20} height={20} />
            </BankSelectButton>

            {showBankDropdown && (
              <BankDropdown>
                {banks.map((bank) => (
                  <BankOption
                    key={bank}
                    onClick={() => {
                      setSelectedBank(bank);
                      setShowBankDropdown(false);
                    }}
                  >
                    {bank}
                  </BankOption>
                ))}
              </BankDropdown>
            )}
          </BankSelectContainer>

          <AccountInput
            value={accountNumber}
            placeholder="계좌번호를 입력해주세요."
            onChange={handleAccountChange}
          />
        </AccountSection>

        <AmountSection>
          <SectionTitle>인출받을 금액을 입력해주세요.</SectionTitle>

          <AmountInputContainer>
            <AmountInput
              placeholder="금액을 입력해주세요."
              value={withdrawAmount}
              onChange={handleAmountChange}
              isError={isAmountExceeded}
            />
            <AmountUnit>원</AmountUnit>
          </AmountInputContainer>

          {isAmountExceeded && (
            <ErrorMessage>
              {maxWithdrawAmount.toLocaleString()}원까지만 인출 가능합니다.
            </ErrorMessage>
          )}
        </AmountSection>
      </ContentContainer>

      <Button
        size="big"
        fullWidth
        variant="secondary"
        disabled={isButtonDisabled}
        onClick={handleButtonClick}
      >
        신청하기
      </Button>
    </PageContainer>
  );
};

export default WithdrawPage;

const PageContainer = styled.div`
  width: 100%;
  height: calc(100vh - 3.5rem);
  padding: 20px 26px;
  background-color: ${theme.color.neutral.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const AccountSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AmountSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography["body1-2"].fontSize};
  font-weight: ${theme.typography["body1-2"].fontWeight};
  color: ${theme.color.neutral.B60};
  margin-bottom: 8px;
`;

const BankSelectContainer = styled.div`
  position: relative;
`;

const BankSelectButton = styled.button<{
  isOpen: boolean;
  hasSelection: boolean;
}>`
  width: 100%;
  height: auto;
  min-height: 40px;
  border: 1px solid ${theme.color.neutral.B20};
  border-radius: 4px;
  background-color: ${theme.color.neutral.B00};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  cursor: pointer;

  span {
    font-size: ${theme.typography["body1-2"].fontSize};
    font-weight: ${theme.typography["body1-2"].fontWeight};
    color: ${({ hasSelection }) =>
      hasSelection ? theme.color.neutral.B70 : theme.color.neutral.B40};
  }

  &:hover {
    border-color: ${theme.color.primary.P40};
  }
`;

const BankDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${theme.color.neutral.B00};
  border: 1px solid ${theme.color.neutral.B20};
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  margin-top: 4px;
  animation: dropdown 0.4s ease;
`;

const BankOption = styled.div`
  padding: 12px 16px;
  font-size: ${theme.typography["body1-3"].fontSize};
  font-weight: ${theme.typography["body1-3"].fontWeight};
  color: ${theme.color.neutral.B60};
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.neutral.B10};
  }

  &:first-of-type {
    border-radius: 4px 4px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 4px 4px;
  }
`;

const AccountInput = styled.input`
  width: 100%;
  height: auto;
  min-height: 40px;
  border: none;
  border-bottom: 1px solid ${theme.color.neutral.B20};
  border-radius: 0;
  padding: 8px 0;
  font-size: ${theme.typography["body1-2"].fontSize};
  font-weight: ${theme.typography["body1-2"].fontWeight};
  color: ${theme.color.neutral.B70};

  &::placeholder {
    color: ${theme.color.neutral.B30};
  }

  &:focus {
    outline: none;
    border-bottom-color: ${theme.color.primary.P40};
  }
`;

const AmountInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const AmountInput = styled.input<{ isError: boolean }>`
  width: 100%;
  height: auto;
  min-height: 40px;
  border: none;
  border-bottom: 1px solid
    ${({ isError }) =>
      isError ? theme.color.warning.R30 : theme.color.neutral.B20};
  border-radius: 0;
  padding: 8px 40px 8px 0;
  font-size: ${theme.typography["body1-2"].fontSize};
  font-weight: ${theme.typography["body1-2"].fontWeight};
  color: ${({ isError }) =>
    isError ? theme.color.warning.R30 : theme.color.neutral.B70};
  text-align: left;
  display: flex;
  align-items: center;

  &::placeholder {
    color: ${theme.color.neutral.B30};
  }

  &:focus {
    outline: none;
    border-bottom-color: ${({ isError }) =>
      isError ? theme.color.warning.R30 : theme.color.primary.P40};
  }
`;

const AmountUnit = styled.span`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: ${theme.typography["body1-2"].fontSize};
  font-weight: ${theme.typography["body1-2"].fontWeight};
  color: ${theme.color.neutral.B60};
  pointer-events: none;
`;

const ErrorMessage = styled.div`
  font-size: ${theme.typography["small1-3"].fontSize};
  font-weight: ${theme.typography["small1-3"].fontWeight};
  color: ${theme.color.warning.R30};
  margin-top: 8px;
`;

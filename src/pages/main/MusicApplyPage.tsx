import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";
import Spacer from "@components/common/spacer/Spacer";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useModal } from "@hooks/useModal";
import { useParams } from "react-router-dom";
import { getContractAmount, InvestmentLimitInfo } from "@apis/investment";

interface MainContentProps {
  isBlack?: boolean;
}

interface ButtonProps {
  disabled?: boolean;
}

export const MusicApplyDetail = () => {
  const [rule, setRule] = useState<InvestmentLimitInfo | null>(null);
  const [investorAmount, setInvestorAmount] = useState<number>(0);

  const { contractId } = useParams();

  const { openModal, closeModal } = useModal();

  const DETAIL_INFOS = [
    "계약서 작성 시 내 보유금액이 입력한 투자금액만큼 자동으로 인출되어요.",
    "투자자를 통한 희망 대출금이 모두 모였을 경우 대출이 시작되어요. 대출이 시작된 날 기준, 한 달 간격으로 매달 상환을 진행해요.",
    "대출 시작 시, 내 투자 지분에 따라 차입자에게서 매달 이자를 지급받아요.",
    "대출자가 정해진 상환일에 이자를 납부하지 않을 경우, 연체율 기반으로 매일 이자에 연체금이 추가되며 이 또한 투자자의 지분에 따라 지급되어요.",
    "투자한 원금 및 남은 이자는 모두 마지막 상환 회차까지 돌려받아요.",
    "대출자가 남은 이자 및 원금을 모두 납부하지 않을 경우, NFT담보는 경매로 넘어가며 경매 수익을 투자자 지분에 따라 나누어 가질 수 있어요.",
  ];

  useEffect(() => {
    const fetchRule = async () => {
      const res = await getContractAmount(Number(contractId));
      if (res.success && res.data) {
        setRule({
          minimumLoanAmount: res.data.minimumLoanAmount,
          maximumLoanAmount: res.data.maximumLoanAmount,
          shareCalculationRatio: res.data.shareCalculationRatio,
          interestCalculationRatio: res.data.interestCalculationRatio,
        });
      }
    };

    fetchRule();
  }, []);

  const [checked, setChecked] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericString = e.target.value.replace(/[^0-9]/g, "");
    let parsed: number = parseInt(numericString, 10);

    if (Number.isNaN(parsed)) parsed = 0;

    if (parsed < 0) parsed = 0;
    if (parsed > 100000000) parsed = 100000000;

    setInvestorAmount(parsed);
  };
  const minimumLoanAmount = rule?.minimumLoanAmount ?? 0;
  const maximumLoanAmount = rule?.maximumLoanAmount ?? 0;
  const shareCalculationRatio = rule?.shareCalculationRatio ?? 1;
  const interestCalculationRatio = rule?.interestCalculationRatio ?? 0;
  const sharePercent = investorAmount * shareCalculationRatio;
  const monthlyProfit = investorAmount * interestCalculationRatio;

  return (
    <PageWrapper>
      <ContentWrapper>
        <BodyTitle>투자금액 입력</BodyTitle>
        <Spacer height="2rem" />
        <SubTitle>투자금액</SubTitle>
        <Spacer height="0.5rem" />
        <InputWrapper>
          <InvestInput
            type="text"
            inputMode="numeric"
            min={minimumLoanAmount}
            max={maximumLoanAmount}
            value={investorAmount === 0 ? "" : investorAmount.toLocaleString()}
            onChange={handleInputChange}
          />
          <UnitText>원</UnitText>
        </InputWrapper>
        <Spacer height="0.5rem" />
        <InputBottomText>
          {`최소 ${minimumLoanAmount}원 ~ 최대 ${maximumLoanAmount}원`}
        </InputBottomText>
      </ContentWrapper>

      <HorizontalDivider />
      <CalculateWrapper>
        <RowContainer>
          <MainContent isBlack={true}>대출에 대한 내 지분</MainContent>
          <MainContent>
            {investorAmount === 0 ? "0%" : `${sharePercent.toFixed(2)}%`}
          </MainContent>
        </RowContainer>
        <RowContainer>
          <MainContent isBlack={true}>매달 지급받는 이자</MainContent>
          <MainContent>
            {investorAmount === 0
              ? "0원"
              : `${Math.floor(monthlyProfit).toLocaleString()}원`}
          </MainContent>
        </RowContainer>
      </CalculateWrapper>

      <NoticeWrapper>
        <Title>유의사항을 확인해 주세요.</Title>
        <NoticeList>
          {DETAIL_INFOS.map((info, key) => (
            <div key={key}>
              <li>{info}</li>
              <Spacer height="0.75rem" />
            </div>
          ))}
        </NoticeList>
        <CheckWrapper>
          <CheckBox
            type="checkbox"
            id="confirmCheck"
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
          />
          <CheckLabel htmlFor="confirmCheck">
            위 내용을 모두 확인했습니다.
          </CheckLabel>
        </CheckWrapper>
        <Button
          disabled={!checked}
          onClick={async () => {
            openModal({
              title: "정말 대출을 신청하시겠습니까?",
              sub: "신청 후에는 수정이 불가능합니다.",
              primaryButton: {
                children: "취소",
                onClick: closeModal,
              },
              secondButton: {
                children: "확인",
                onClick: async () => {
                  closeModal();

                  //   await postContractInvest(
                  //     Number(investmentId),
                  //     investorAmount
                  //   );
                  //   await new Promise((resolve) => setTimeout(resolve, 2000));
                  //   navigate("/");
                },
              },
            });
          }}
        >
          계약 작성
        </Button>
      </NoticeWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 40px 29px;
`;

const BodyTitle = styled.h1`
  width: 100%;
  display: flex;

  ${({ theme }) => theme.typography["body1-1"]}
  color: ${({ theme }) => theme.color.neutral.B60};
`;

const CalculateWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  padding: 2.5rem 1.875rem;
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NoticeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.875rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.color.neutral.B00};
`;

export const MainContent = styled.h1<MainContentProps>`
  ${({ theme }) => theme.typography["body2-2"]};
  color: ${({ isBlack, theme }) =>
    isBlack ? theme.color.neutral.B70 : theme.color.primary.P60};
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.color.neutral.B40};
  ${({ theme }) => theme.typography["body2-2"]};
`;

const UnitText = styled.span`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);

  font-size: 1rem;
  ${({ theme }) => theme.typography["body1-2"]};

  color: ${({ theme }) => theme.color.neutral.B40};
`;

const InputBottomText = styled.h2`
  ${({ theme }) => theme.typography["small1-3"]};

  color: ${({ theme }) => theme.color.neutral.B30};
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InvestInput = styled.input`
  width: 100%;

  width: 100%;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral.B10};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.neutral.B20};
  }
`;

const NoticeList = styled.ul`
  list-style: disc;
  padding-left: 1rem;

  & > li {
    color: ${({ theme }) => theme.color.neutral.B60};
    ${({ theme }) => theme.typography["small1-3"]};
  }
`;

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CheckBox = styled.input`
  width: 1rem;
  height: 1rem;
  border: 1px solid ${({ theme }) => theme.color.neutral.B20};
  border-radius: 0.2rem;
  appearance: none;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: ${({ theme }) => theme.color.primary.P50};
    border-color: ${({ theme }) => theme.color.primary.P50};
  }

  &:checked::after {
    content: "✔";

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.5rem;
    color: white;
  }
`;

const CheckLabel = styled.label`
  ${({ theme }) => theme.typography["body1-2"]};
  color: ${({ theme }) => theme.color.neutral.B70};
  cursor: pointer;
`;

const Button = styled.button<ButtonProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.neutral.B30 : theme.color.neutral.B50};
  border-radius: 0.25rem;

  ${({ theme }) => theme.typography["body1-2"]}
  color: ${({ theme }) => theme.color.neutral.white};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease-in-out;

  margin-bottom: 1rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color.neutral.B60};
  ${({ theme }) => theme.typography["body1-1"]}
`;

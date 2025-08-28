import styled from "@emotion/styled";
import theme from "@styles/theme";
import ContractPartySection from "../_components/myNftContract/ContractPartySection";
import ContractNftInfoSection from "../_components/myNftContract/ContractNftInfoSection";
import ContractCondition from "../_components/myNftContract/ContractCondition";
import ContractTextBox from "../_components/myNftContract/ContractTextBox";
import { ContractSign } from "../_components/myNftContract/ContractSign";
import { useNavigate, useParams } from "react-router-dom";
import { useLoanAgreement } from "@hooks/queries/useLoanAgreement";
import Button from "@components/common/button/Button";
import { useSubmitLoan } from "@hooks/queries/useSubmitLoan";

const MyNftContract = () => {
  const { contractId: contractIdParam } = useParams<{ contractId: string }>();
  const contractId = Number(contractIdParam);

  const amountStr = localStorage.getItem("amount");
  const countStr = localStorage.getItem("count");
  const amount = amountStr ? Number(amountStr) : undefined;
  const count = countStr ? Number(countStr) : undefined;

  const { data } = useLoanAgreement(contractId, amount, count);

  const agreementData = data?.data;

  const { mutate } = useSubmitLoan();

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!contractId || !amount || !count) return;
    mutate(
      {
        contractId,
        loanAmount: amount,
        repaymentCount: count,
      },
      {
        onSuccess: () => {
          navigate("/myNft");
        },
        onError: (e) => {
          console.error(e);
        },
      }
    );
  };

  return (
    <PageWrapper>
      <ContractHeader>
        <Title>음원 NFT 담보 대출 계약서</Title>
        <Explaination>
          본 계약은 아래 기재된 차입자(대출 신청인)과 투자자 간에 체결되며,
          차입자가 보유한 음원 NFT를 담보로 하여 대출을 진행함에 있어 필요한
          권리·의무를 규정합니다.
        </Explaination>
      </ContractHeader>
      <Divider />
      <InfoWrapper>
        <ContractPartySection />
        <ContractNftInfoSection copyright={agreementData?.copyright ?? {}} />
        <ContractCondition loanCondition={agreementData?.loanCondition ?? {}} />
        <ContractTextBox
          title="제4조 (상환 방식)"
          items={[
            "대출이 시작되면, 투자금을 통해 모인 대출금은 자동으로 차입자의 서내나 지급으로 이체됩니다.",
            "차입자는 매월 지정된 상환일에 투자자에게 이자를 납부해야 하며, 만기일에는 원금과 미납 이자를 일괄 상환합니다.",
            "납부한 이자(연체이자 포함) 및 원금은 복수의 투자자에게 투자 지분에 따라 배분되어 지급됩니다.",
            "상환일에 이자를 미납할 경우, 연체이율에 따른 연체이자가 적용되며, 연체일수에 따라 일할 계산하여 부과됩니다.",
            "만기일까지 원금 및 이자를 전액 상환하지 않을 경우, 담보 NFT는 경매 절차에 따라 처분됩니다.",
          ]}
        />
        <ContractTextBox
          title="제5조 (연체 및 담보 처분)"
          items={[
            "차입자가 상환일에 이자 또는 원금을 납부하지 않을 경우, 해당 금액에 대해 연체이율(연 5%)을 적용합니다.",
            "차입자가 만기일로부터 30일 이상 연체한 경우, 담보 NFT는 복수의 투자자 또는 플랫폼 운영자가 경매에 부쳐 처분할 수 있습니다.",
            {
              text: "경매를 통해 발생한 금액은 다음 순서로 배분됩니다.",
              subItems: [
                "연체이자 및 미납이자",
                "미납 원금",
                "잔여금은 차입자에게 반환",
              ],
            },
          ]}
        />
        <ContractTextBox
          title="제6조 (계약 해지)"
          items={[
            "차입자가 계약 조건을 위반한 경우, 복수의 투자자가 모두 동의하여 계약을 해지할 수 있습니다.",
            "계약 해지 시 투자자는 담보 NFT를 경매 또는 매각하여 채권을 회수할 수 있습니다.",
          ]}
        />
        <ContractTextBox
          title="제7조 (기타 사항)"
          items={[
            "본 계약의 해석 및 분쟁은 대한민국 법률을 따르며, 관할 법원은 대출자 주소지 관할 법원으로 합니다.",
            "본 계약서에 명시되지 않은 사항은 상호 합의하여 별도의 서면으로 정합니다.",
          ]}
        />
      </InfoWrapper>
      <Divider />
      <ContractTextBox
        title="차입자 사전 확인 사항"
        items={[
          {
            text: "투자시작일로부터 한 달 이내에 투자금을 통한 희망 대출금이 모두 모였을 경우 실제 대출이 시작됨을 확인함",
            subItems: [
              "한 달 이내에 희망 대출금이 모이지 않을 경우 혹은 차입자에 의해 대출 신청이 취소될 경우 작성한 투자 신청건과 계약서는 삭체 처리",
            ],
          },
          {
            text: "대출 시작일 기준 한 달 간격으로 매월 상환함을 확인함",
            subItems: [
              "대출시작일이 매달 마지막 날(29,30,31)일 경우에는 매달 마지막 날 상환 진행",
            ],
          },
          "상환일에 이자 미납 시 연체이율이 적용됨을 확인함",
          "만기일에 원금·이자 미납 시 담보 NFT가 경매로 넘어감을 확인함",
        ]}
        marker="star"
      />
      <Divider withTopMargin />
      <ContractSign />
      <ButtonWrapper>
        {" "}
        <Button
          size="big"
          children="제출"
          fullWidth
          onClick={handleSubmit}
          disabled={!amount || !count}
        />
      </ButtonWrapper>
    </PageWrapper>
  );
};

export default MyNftContract;

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
`;

const Divider = styled.div<{ withTopMargin?: boolean }>`
  width: 100%;
  height: 2px;
  background-color: ${theme.color.neutral.B20};
  margin-bottom: 40px;
  ${({ withTopMargin }) => withTopMargin && `margin-top: 40px;`}
`;

const ContractHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 26px;
  gap: 24px;
  margin-bottom: 40px;
`;

const Title = styled.div`
  font-size: ${theme.typography["title1-1"].fontSize};
  font-weight: ${theme.typography["title1-1"].fontWeight};
  color: ${theme.color.neutral.B70};
`;

const Explaination = styled.div`
  font-size: ${theme.typography["small1-3"].fontSize};
  font-weight: ${theme.typography["small1-3"].fontWeight};
  color: ${theme.color.neutral.B70};
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 40px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  padding: 0 26px;
`;

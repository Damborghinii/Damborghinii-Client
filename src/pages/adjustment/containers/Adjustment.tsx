import Spacer from "@components/common/spacer/Spacer";
import styled from "@emotion/styled";
import { IcArrowRight } from "@assets/svg";
import { useNavigate } from "react-router-dom";

const Adjustment = () => {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <TitleWrapper>내 정산관리</TitleWrapper>
      <CardWrapper onClick={() => navigate("/repayment-received")}>
        <RowContainer>
          <Text>내가 상환받아요</Text>
          <IcArrowRight width={16} height={16} />
        </RowContainer>
      </CardWrapper>
      <Spacer height="1rem" />
      <CardWrapper onClick={() => navigate("/servicing-repayment")}>
        <RowContainer>
          <Text>내가 상환해요</Text>
          <IcArrowRight width={16} height={16} />
        </RowContainer>
      </CardWrapper>
    </MainWrapper>
  );
};

export default Adjustment;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 0 1.625rem;
`;

const TitleWrapper = styled.div`
  ${({ theme }) => theme.typography["title1-1"]};
  color: ${({ theme }) => theme.color.neutral.B60};

  padding: 1.25rem 0;
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 56px;
  padding: 1rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.color.neutral.B10};
`;
const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.h2`
  ${({ theme }) => theme.typography["body1-2"]};
`;

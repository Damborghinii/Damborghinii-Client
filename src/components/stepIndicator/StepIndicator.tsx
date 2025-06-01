import styled from "@emotion/styled";
import theme from "../../styles/theme";

type StepIndicatorProps = {
  currentStep: number;
  totalSteps?: number;
};

const StepIndicator = ({ currentStep, totalSteps = 4 }: StepIndicatorProps) => {
  const getMiddleNumber = () => {
    if (currentStep <= 1) return 1;
    if (currentStep >= totalSteps) return totalSteps;
    return currentStep;
  };

  return (
    <Wrapper>
      {[0, 1, 2].map((offset) => {
        const stepNumber = getMiddleNumber() + offset - 1;
        const isCenter = offset === 1;
        const isValid = stepNumber >= 1 && stepNumber <= totalSteps;

        return (
          <Circle key={offset} active={isCenter && isValid}>
            {isCenter && isValid ? stepNumber : null}
          </Circle>
        );
      })}
    </Wrapper>
  );
};

export default StepIndicator;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Circle = styled.div<{ active?: boolean }>`
  width: ${({ active }) => (active ? "20px" : "10px")};
  height: ${({ active }) => (active ? "20px" : "10px")};
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? theme.color.neutral.B60 : theme.color.neutral.B10};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.typography["small1-2"].fontSize};
  font-weight: ${theme.typography["small1-2"].fontWeight};
  color: ${theme.color.neutral.white};
`;

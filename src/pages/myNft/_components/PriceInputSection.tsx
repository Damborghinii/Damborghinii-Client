import styled from "@emotion/styled";

export interface PriceSectionProps {
  title: string;
  priceAmount: number | string;
  description: string;
  subDescription?: string;
  isDisabled?: boolean;
  hasSubDescription?: boolean;
  calculatedPrice?: string;
  unitText?: string;
  isString?: boolean;
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PriceInputSection = ({
  title,
  priceAmount,
  description,
  isDisabled = false,
  isString = false,
  hasSubDescription = false,
  subDescription = "",
  unitText = "원",
  handleInputChange = () => {},
}: PriceSectionProps) => {
  return (
    <PriceInputWrapper>
      <SubText>{title}</SubText>
      <InputWrapper>
        {isString ? (
          <Input
            type="text"
            inputMode="numeric"
            value={priceAmount === 0 ? "" : priceAmount.toLocaleString()}
            onChange={handleInputChange}
            disabled={isDisabled}
          />
        ) : (
          <Input
            type="text"
            value={priceAmount}
            onChange={handleInputChange}
            disabled={isDisabled}
          />
        )}
        <UnitText>{unitText}</UnitText>
      </InputWrapper>
      {hasSubDescription && <SubBottomText>{subDescription}</SubBottomText>}
      <InputBottomText>{description}</InputBottomText>
    </PriceInputWrapper>
  );
};

const PriceInputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;

  width: 100%;
  padding-right: 2rem; /* '원'이 들어갈 공간 확보 */
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

const SubText = styled.h2`
  ${({ theme }) => theme.typography["body2-2"]};

  color: ${({ theme }) => theme.color.neutral.B40};
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

const SubBottomText = styled.h2`
  ${({ theme }) => theme.typography["small1-2"]};
  color: ${({ theme }) => theme.color.primary.P60};
  white-space: pre-line;
`;

const InputBottomText = styled.h2`
  ${({ theme }) => theme.typography["small1-2"]};

  color: ${({ theme }) => theme.color.neutral.B30};
`;

import styled from "@emotion/styled";
import theme from "@styles/theme";

type ClauseItemType = string | { text: string; subItems?: string[] };

type TextBoxProps = {
  title: string;
  items: ClauseItemType[];
  marker?: "number" | "star";
};

const ContractTextBox = ({ title, items, marker = "number" }: TextBoxProps) => {
  return (
    <PageContainer>
      <Title>{title}</Title>
      <ClauseList>
        {items.map((item, idx) =>
          typeof item === "string" ? (
            <ClauseItem key={idx}>{item}</ClauseItem>
          ) : (
            <ClauseItem key={idx}>
              {item.text}
              {item.subItems && (
                <SubClauseList marker={marker}>
                  {item.subItems.map((sub, subIdx) => (
                    <SubClauseItem marker={marker} key={subIdx}>
                      {sub}
                    </SubClauseItem>
                  ))}
                </SubClauseList>
              )}
            </ClauseItem>
          )
        )}
      </ClauseList>
    </PageContainer>
  );
};

export default ContractTextBox;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 26px;
`;

const Title = styled.div`
  font-size: ${theme.typography["body1-2"].fontSize};
  font-weight: ${theme.typography["body1-2"].fontWeight};
  color: ${theme.color.neutral.B70};
  margin-bottom: 24px;
`;

const ClauseList = styled.ol`
  display: flex;
  flex-direction: column;
  list-style-type: decimal;
  list-style-position: inside;
`;

const ClauseItem = styled.li`
  font-size: ${theme.typography["small1-3"].fontSize};
  font-weight: ${theme.typography["small1-3"].fontWeight};
  color: ${theme.color.neutral.B70};
`;

const SubClauseList = styled.ol<{ marker?: "number" | "star" }>`
  list-style: none;
  list-style-position: inside;
  counter-reset: sub;
`;

const SubClauseItem = styled.li<{ marker?: "number" | "star" }>`
  font-size: ${theme.typography["small1-3"].fontSize};
  font-weight: ${theme.typography["small1-3"].fontWeight};
  color: ${theme.color.neutral.B70};
  position: relative;

  ${({ marker }) =>
    marker === "number"
      ? `
        counter-increment: sub;
        padding-left: 16px;
        &::before {
          content: counter(sub) ")";
          position: absolute;
          left: 0;
          top: 0;
        }
      `
      : `
        padding-left:6px;
        &::before {
          content: "*";
          position: absolute;
          left: 0;
          top: 0;
        }
      `}
`;

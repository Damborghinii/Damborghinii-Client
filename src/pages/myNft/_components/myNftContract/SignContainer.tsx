import styled from "@emotion/styled";
import theme from "@styles/theme";

const SignContainer = () => {
  return <SignBox>SignContainer</SignBox>;
};

export default SignContainer;

const SignBox = styled.div`
  width: 100%;
  height: 124px;
  border-radius: 4px;
  border: 1px solid ${theme.color.neutral.B20};
  background-color: ${theme.color.neutral.white};
`;

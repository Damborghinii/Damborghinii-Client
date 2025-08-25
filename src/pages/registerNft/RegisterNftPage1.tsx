// import styled from "@emotion/styled";
// import theme from "../../styles/theme";
// import Button from "../../components/common/button/Button";
// import StepIndicator from "../../components/stepIndicator/StepIndicator";
// import { nftIcons } from "../../assets/icons";
// import NftTypeButton from "../../components/nftTypebutton/NftTypeButton";
// import { useNftForm } from "../../contexts/NftFormContext";
// import { isFormFilled } from "../../utils/isFormFilled";
// import { useNavigate } from "react-router-dom";

// const RegisterNftPage1 = () => {
//   const { formData, updateForm } = useNftForm();
//   const { digital_art: DigitalArt, music: Music } = nftIcons;
//   const navigate = useNavigate();
//   const handleNext = () => {
//     if (isFormFilled(formData, ["nftName", "nftType"])) {
//       navigate("/nft/register/music-basic");
//     }
//   };

//   return (
//     <PageContainer>
//       <ContentWrapper>
//         <ProgressIndicator>
//           <StepIndicator currentStep={1} />
//         </ProgressIndicator>
//         <Title>NFT 기본정보 입력</Title>
//         <InputSection>
//           <InputGroup>
//             <InputTitle>NFT명</InputTitle>
//             <Input
//               placeholder="NFT명을 입력해 주세요"
//               value={formData.nftName}
//               onChange={(e) => updateForm({ nftName: e.target.value })}
//             />
//             <Explaination>설명</Explaination>
//           </InputGroup>
//           <InputGroup>
//             <InputTitle>NFT 유형</InputTitle>
//             <TypeOptionsWrapper>
//               <NftTypeButton
//                 selected={formData.nftType === "art"}
//                 onClick={() => updateForm({ nftType: "art" })}
//                 icon={<DigitalArt />}
//                 label="디지털 아트"
//               ></NftTypeButton>
//               <NftTypeButton
//                 selected={formData.nftType === "music"}
//                 onClick={() => updateForm({ nftType: "music" })}
//                 icon={<Music />}
//                 label="음악"
//               ></NftTypeButton>
//             </TypeOptionsWrapper>
//           </InputGroup>
//         </InputSection>
//       </ContentWrapper>
//       <Button
//         children="다음"
//         size="big"
//         fullWidth
//         disabled={!isFormFilled(formData, ["nftName", "nftType"])}
//         onClick={handleNext}
//       />
//     </PageContainer>
//   );
// };

// const PageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   width: 100%;
//   height: calc(100vh - 48.8px);
//   padding: 32px 26px 24px 26px;
//   overflow-y: hidden;
// `;

// const ContentWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const ProgressIndicator = styled.div`
//   margin-bottom: 32px;
// `;

// const Title = styled.div`
//   font-size: ${theme.typography["title1-2"].fontSize};
//   font-weight: ${theme.typography["title1-2"].fontWeight};
//   margin-bottom: 32px;
//   text-align: center;
// `;

// const InputSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   width: 100%;
//   gap: 32px;
// `;

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;

// const InputTitle = styled.label`
//   font-size: ${theme.typography["body2-2"].fontSize};
//   font-weight: ${theme.typography["body2-2"].fontWeight};
//   color: ${theme.color.neutral.B40};
//   margin-bottom: 8px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 8px 0 8px 4px;
//   font-size: ${theme.typography["body1-2"].fontSize};
//   font-weight: ${theme.typography["body1-2"].fontWeight};
//   color: ${theme.color.neutral.B40};
//   border: none;
//   border-bottom: 1px solid ${theme.color.neutral.B20};
//   outline: none;
//   margin-bottom: 8px;
//   &::placeholder {
//     color: ${theme.color.neutral.B20};
//   }
// `;

// const TypeOptionsWrapper = styled.div`
//   display: flex;
//   gap: 12px;
// `;

// const Explaination = styled.label`
//   font-size: ${theme.typography["small1-3"].fontSize};
//   font-weight: ${theme.typography["small1-3"].fontWeight};
//   color: ${theme.color.neutral.B30};
// `;

// export default RegisterNftPage1;

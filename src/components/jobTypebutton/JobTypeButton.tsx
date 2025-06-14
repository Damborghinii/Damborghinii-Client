import styled from "@emotion/styled";
import theme from "@styles/theme";
import { useState } from "react";
import { JobType, useSignUpForm } from "src/contexts/SignUpFormContext";

const JOB_LABEL_TO_TYPE: Record<string, JobType> = {
  회사원: "COMPANY",
  자영업: "SELF_EMPLOYED",
  프리랜서: "FREELANCER",
  군인: "SOLDIER",
  공무원: "PUBLIC_OFFICIAL",
  전업주부: "HOMEMAKER",
  전문직: "PROFESSIONAL",
  학생: "STUDENT",
  무직: "UNEMPLOYED",
  기타: "OTHER",
};

const JOB_TYPES = Object.keys(JOB_LABEL_TO_TYPE);

const JobTypeButton = () => {
  const [selectedJob, setSelectedJob] = useState<string>("");
  const { updateForm } = useSignUpForm();

  const handleSelect = (jobLabel: string) => {
    setSelectedJob(jobLabel);
    updateForm({ job: JOB_LABEL_TO_TYPE[jobLabel] });
  };

  return (
    <JobGrid>
      {JOB_TYPES.map((job) => (
        <JobButton
          key={job}
          isSelected={selectedJob === job}
          onClick={() => handleSelect(job)}
        >
          {job}
        </JobButton>
      ))}
    </JobGrid>
  );
};

export default JobTypeButton;

const JobGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const JobButton = styled.button<{ isSelected: boolean }>`
  text-align: center;
  padding: 10px 0;
  border-radius: 8px;
  background-color: ${({ isSelected }) =>
    isSelected ? theme.color.primary.P00 : theme.color.neutral.B00};
  color: ${({ isSelected }) =>
    isSelected ? theme.color.primary.P60 : theme.color.neutral.B60};
  border: 1px solid
    ${({ isSelected }) =>
      isSelected ? theme.color.primary.P40 : "transparent"};
  font-size: ${theme.typography["body2-2"].fontSize};
  font-weight: ${theme.typography["body2-2"].fontWeight};
  box-sizing: border-box;
`;

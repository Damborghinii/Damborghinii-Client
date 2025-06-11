import React from "react";

interface SpacerProps {
  height?: string;
  width?: string;
}

const Spacer: React.FC<SpacerProps> = ({ height = "0px", width = "100%" }) => {
  return (
    <div
      style={{
        display: "block",
        height: height,
        width: width,
      }}
    />
  );
};

export default Spacer;

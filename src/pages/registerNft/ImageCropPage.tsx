import styled from "@emotion/styled";
import { useNftForm } from "../../contexts/NftFormContext";
import { useEffect, useState } from "react";
import Cropper from "react-easy-crop";

const ImageCropPage = () => {
  const { formData } = useNftForm();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (formData.image) {
      const url = URL.createObjectURL(formData.image);
      setImageUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [formData.image]);

  return (
    <PageContainer>
      {imageUrl && (
        <Cropper
          image={imageUrl}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          showGrid={false}
          style={{
            containerStyle: {
              width: "100%",
              height: "calc(100vh - 48.8px",
              position: "absolute",
            },
            mediaStyle: {
              width: "100%",
              height: "100%",
              objectFit: "contain",
            },
          }}
        />
      )}
    </PageContainer>
  );
};

export default ImageCropPage;

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 48.8px);
  overflow: hidden;
  background-color: rgba(53, 53, 53, 0.6);
`;

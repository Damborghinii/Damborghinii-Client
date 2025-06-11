import styled from "@emotion/styled";
import { useNftForm } from "../../contexts/NftFormContext";
import { useCallback, useEffect, useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import { useNavigate } from "react-router-dom";
import getCroppedImg from "src/utils/getCroppedImg";
import { useConfirmButton } from "src/contexts/ConfirmButtonContext";
import { fileToBase64 } from "src/utils/fileConverter";

const ImageCropPage = () => {
  const { formData, updateForm } = useNftForm();
  const { setOnConfirmClick } = useConfirmButton();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const source = formData.image;
    if (source && typeof source.size === "number" && source.size > 0) {
      const url = URL.createObjectURL(source);
      setImageUrl(url);

      return () => URL.revokeObjectURL(url);
    } else {
      console.warn("이미지가 없습니다.");
      setImageUrl(null);
    }
  }, [formData.image]);

  useEffect(() => {
    setOnConfirmClick(() => handleConfirm);

    return () => setOnConfirmClick(undefined);
  }, [imageUrl, croppedAreaPixels]);

  const handleCropComplete = useCallback((_: Area, croppedArea: Area) => {
    setCroppedAreaPixels(croppedArea);
  }, []);

  const handleConfirm = async () => {
    if (!imageUrl || !croppedAreaPixels) return;

    const croppedBlob = await getCroppedImg(imageUrl, croppedAreaPixels);
    const croppedFile = new File(
      [croppedBlob],
      formData.image?.name || "cropped.jpg",
      {
        type: "image/jpeg",
      }
    );
    const previewBase64 = await fileToBase64(croppedFile);

    updateForm({
      image: croppedFile,
      croppedImage: croppedFile,
      croppedBase64: previewBase64,
    });
    navigate(-1);
  };

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
          onCropComplete={handleCropComplete}
          showGrid={false}
          restrictPosition={false}
          style={{
            containerStyle: {
              width: "100%",
              height: "calc(100vh - 48.8px)",
              position: "absolute",
            },
            mediaStyle: {
              width: "100%",
              objectFit: "cover",
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

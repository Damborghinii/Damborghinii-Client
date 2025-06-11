const mimeToExtension = (mime: string): string => {
  const map: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/jpg": "jpg",
    "application/pdf": "pdf",
  };
  return map[mime] || "bin";
};

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("FileReader 결과가 문자열이 아님"));
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
};

export const base64ToFile = (
  base64: string,
  filename: string,
  fallbackMimeType = "application/octet-stream"
): File => {
  const arr = base64.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1] || fallbackMimeType;
  const bstr = atob(arr[1]);
  const u8arr = new Uint8Array(bstr.length);
  for (let i = 0; i < bstr.length; i++) u8arr[i] = bstr.charCodeAt(i);

  const ext = mimeToExtension(mime);
  const hasExt = filename.includes(".");
  const finalFilename = hasExt ? filename : `${filename}.${ext}`;

  return new File([u8arr], finalFilename, { type: mime });
};

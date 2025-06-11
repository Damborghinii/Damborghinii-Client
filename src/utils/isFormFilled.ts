export const isFormFilled = (
  formData: Record<string, unknown>,
  requiredFields: string[]
) => {
  return requiredFields.every((key) => {
    const value = formData[key];
    if (typeof value === "string") {
      return value.trim() !== "";
    }

    if (Array.isArray(value)) {
      return (
        value.length > 0 &&
        value.every((v) => typeof v === "string" && v.trim() !== "")
      );
    }
    return value !== null && value !== undefined;
  });
};

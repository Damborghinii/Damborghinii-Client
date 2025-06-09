export const isFormFilled = (
  formData: Record<string, unknown>,
  requiredFields: string[]
) => {
  return requiredFields.every((key) => {
    const value = formData[key];
    return value !== null && value !== undefined && value !== "";
  });
};

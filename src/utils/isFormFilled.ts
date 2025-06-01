export const isFormFilled = <T extends Record<string, unknown>>(
  formData: T,
  keys: (keyof T)[]
): boolean => {
  return keys.every((key) => !!formData[key]);
};

export const getContrastColor = (hex) => {
  // Remove '#' if present
  const color = hex.charAt(0) === '#' ? hex.substring(1) : hex;

  // Convert HEX to RGB
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  // Calculate luminance
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  // Return white for dark colors, black for light colors
  return luminance > 186 ? '#000000' : '#FFFFFF';
};

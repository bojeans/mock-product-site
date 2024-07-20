/**
 * Formats a number to a price string with two decimal places.
 * @param amount - The amount to format.
 * @returns The formatted price string.
 */
export const formatPrice = (amount: number): string => {
  return amount.toFixed(2);
};

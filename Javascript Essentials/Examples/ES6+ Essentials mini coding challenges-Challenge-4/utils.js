export const formatPrice = (amount) => `Rs. ${amount.toFixed(2)}`;
export const applyDiscount = (price, percent) => price - (price * percent) / 100;
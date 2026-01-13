import {formatPrice, applyDiscount} from './utils.js';

formatPrice(100);
const Discount = applyDiscount(1000, 25);
console.log(`Discounted price:$${Discount}`);

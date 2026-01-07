//Challenge # 01 : 
//From the products list, filter out items where price >= 500 and then map to only their names.
const products = [
  { id: 1, name: "Laptop", price: 900 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];

const filterItems = products.filter((product)=> product.price >=500);
//console.log(filterItems);
const filterNames = filterItems.map((productname)=> productname.name)
console.log(filterNames);
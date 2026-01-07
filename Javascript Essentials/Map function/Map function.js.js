
const orders = [
  {
    id: 'ORD001',
    customer: 'Alice Smith',
    total: 149.99,
    createdAt: '2025-05-18T10:30:00Z',
    status: 'pending'
  },
  {
    id: 'ORD002',
    customer: 'Bob Johnson',
    total: 89.50,
    createdAt: '2025-05-17T15:45:00Z',
    status: 'shipped'
  },
  {
    id: 'ORD003',
    customer: 'Charlie Brown',
    total: 249.00,
    createdAt: '2025-05-16T09:15:00Z',
    status: 'delivered'
  }
];

//accessing single value in an object
/*
const Customers = orders.map(order => (
    order.customer
    ))
console.log(Customers);
*/

//accessing muliple values in an object

const Customers = orders.map(order => ({
    customer:order.customer,
    date:order.createdAt}))
console.log(Customers);


//Format date object
/*
const Customers = orders.map(order => ({
    customer:order.customer,
    date:new Date(order.createdAt).toLocaleDateString('en-PK',
        {
            year: 'numeric',
            month: 'numeric',
            day:'numeric'

        }
    )}))
console.log(Customers);
*/



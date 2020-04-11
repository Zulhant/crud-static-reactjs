const array = [
  {
    id: 1,
    product_name: "Shampo",
    qty: 1,
    price: 2000,
    status: "terjual"
  },
  {
    id: 2,
    product_name: "Indomie",
    qty: 2,
    price: 2500,
    status: "keranjang"
  }
];

const newArray = array.sort((a, d) => d.qty - a.qty);
console.log(newArray);

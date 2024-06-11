import ProductCard from "./product-card";

const products = [
  { id: 0, title: "دستگاه فلان", price: 30000 },
  { id: 1, title: "دستگاه فلان", price: 31000 },
  { id: 2, title: "دستگاه فلان", price: 32000 },
  { id: 3, title: "دستگاه فلان", price: 33000 },
  { id: 3, title: "دستگاه فلان", price: 33000 },
  { id: 3, title: "دستگاه فلان", price: 33000 },
  { id: 3, title: "دستگاه فلان", price: 33000 },
  { id: 3, title: "دستگاه فلان", price: 33000 },
  { id: 3, title: "دستگاه فلان", price: 33000 },
  { id: 4, title: "دستگاه فلان", price: 34000 },
];

export default function ProductsList() {
  return (
    <ul className="mt-6 grid grid-cols-2 lg:grid-cols-6 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} />
      ))}
    </ul>
  );
}

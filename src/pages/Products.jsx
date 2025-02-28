import { useEffect, useState } from "react";
import axios from "axios";
import ProductTable from "../components/ProductTable";

const Products = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/products")
  //     .then((response) => setProducts(response.data))
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);

  // const handleDelete = (id) => {
  //   axios
  //     .delete(`http://localhost:5000/api/products/${id}`)
  //     .then(() => {
  //       setProducts(products.filter((product) => product._id !== id));
  //     })
  //     .catch((error) => console.error("Error deleting product:", error));
  // };
  // Dummy array of products
  const dummyProducts = [
    {
      _id: "1",
      name: "Strawberry",
      category: "Fruits",
      quantity: 120,
      price: 5.99,
    },
    {
      _id: "2",
      name: "Banana",
      category: "Fruits",
      quantity: 100,
      price: 3.49,
    },
    {
      _id: "3",
      name: "Carpbones",
      category: "Electronics",
      quantity: 80,
      price: 199.99,
    },
    {
      _id: "4",
      name: "Sunglasses",
      category: "Accessories",
      quantity: 60,
      price: 49.99,
    },
    {
      _id: "5",
      name: "Macbook Pro",
      category: "Electronics",
      quantity: 40,
      price: 2499.99,
    },
  ];

  // Use the dummy array as the initial state
  const [products, setProducts] = useState(dummyProducts);

  // Function to handle product deletion
  const handleDelete = (id) => {
    // Remove the product from the local state
    setProducts(products.filter((product) => product._id !== id));
    console.log(`Product with ID ${id} deleted`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductTable products={products} onDelete={handleDelete} />
    </div>
  );
};

export default Products;

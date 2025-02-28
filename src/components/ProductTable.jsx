const ProductTable = ({ products, onDelete, onEdit }) => {
  return (
    <table className="min-w-full bg-white rounded-lg overflow-hidden">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Category</th>
          <th className="p-3 text-left">Quantity</th>
          <th className="p-3 text-left">Price</th>
          <th className="p-3 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id} className="border-b hover:bg-gray-50">
            <td className="p-3">{product.name}</td>
            <td className="p-3">{product.category}</td>
            <td className="p-3">{product.quantity}</td>
            <td className="p-3">${product.price}</td>
            <td className="p-3">
              <button
                onClick={() => onEdit(product._id)}
                className="bg-secondary text-white px-3 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(product._id)}
                className="bg-[#8f0f0f] text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;

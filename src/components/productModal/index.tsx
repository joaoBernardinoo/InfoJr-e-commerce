// EditProductPopup.tsx
import { useState, useEffect } from 'react';
import { Product } from '@/types/products';

interface EditProductPopupProps {
  product: Product;
  onClose: () => void;
  onSave: (editedProduct: Product) => void;
}

const EditProductPopup: React.FC<EditProductPopupProps> = ({ product, onClose, onSave }) => {
  const [editedProduct, setEditedProduct] = useState<Product>(product);

  useEffect(() => {
    // Reset o estado quando o produto muda
    setEditedProduct(product);
  }, [product]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedProduct);
    onClose();
  };
  console.log(product)

  return (
    <div className="edit-product-popup">
      <label>Name:</label>
      <input type="text" name="name" value={editedProduct.name} onChange={handleInputChange} />

      <label>Current Price:</label>
      <input type="number" name="current_price" value={editedProduct.current_price} onChange={handleInputChange} />

      <label>Old Price:</label>
      <input type="number" name="old_price" value={editedProduct.old_price} onChange={handleInputChange} />

      <label>Available Quantity:</label>
      <input type="number" name="available_quantity" value={editedProduct.available_quantity} onChange={handleInputChange} />

      <label>Size:</label>
      <input type="text" name="size" value={editedProduct.size.join(', ')} onChange={handleInputChange} />

      <label>Product Description:</label>
      <textarea name="product_description" value={editedProduct.product_description} onChange={handleInputChange} />

      <label>Tags:</label>
      <input type="text" name="tags" value={editedProduct.tags.join(', ')} onChange={handleInputChange} />


      <button onClick={handleSave}>Salvar</button>
      <button onClick={onClose}>Cancelar</button>
    </div>
  );
};

export default EditProductPopup;

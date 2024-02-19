import React, { useState } from "react";
import { data } from "@/app/data";
import { BookModal } from "./BookModal";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onAddProduct = (product) => {
    const existingProductIndex = allProducts.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex >= 0) {
      // Si el producto ya existe, incrementamos la cantidad.
      const newAllProducts = [...allProducts];
      newAllProducts[existingProductIndex].quantity += 1;
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      return setAllProducts(newAllProducts);
    }
    // Si el producto es nuevo, lo añadimos al array con cantidad inicial de 1.
    const newProduct = { ...product, quantity: 1 };
    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
    setAllProducts([...allProducts, newProduct]);
  };

  return (
    <div className="container-items">
      {data.map((product) => (
        <div className="item" key={product.id}>
          <figure onClick={() => openModal(product)}>
            <img src={product.urlImage} alt={product.title} />
          </figure>
          <div className="info-product">
            <h2>{product.title}</h2>
            <p className="price">${product.price}</p>
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      ))}
      {showModal && selectedBook && (
        <BookModal book={selectedBook} closeModal={closeModal} />
      )}
    </div>
  );
};

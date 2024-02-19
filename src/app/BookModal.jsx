import React from "react";

export const BookModal = ({ book, closeModal }) => {
    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>{book.title}</h2>
          <p>Resumen: {book.summary}</p>
          <button onClick={closeModal}>Cerrar</button>
        </div>
      </div>
    );
  };
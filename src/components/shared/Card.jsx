import React from "react";

const Card = ({ img, description, prices, inventory }) => {
  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
      <img
        src={img}
        alt="Product"
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
      />
      <p className="text-xl">{description}</p>
      <div className="flex flex-col gap-1">
        <span className="text-gray-400">Venta en Cima: {prices.ventaCima}</span>
        <span className="text-gray-400">Venta Fría: {prices.ventaFria}</span>
        <span className="text-gray-400">Venta Particular: {prices.ventaParticular}</span>
      </div>
      <p className="text-gray-600">{inventory} disponibles</p>
    </div>
  );
};

export default Card;

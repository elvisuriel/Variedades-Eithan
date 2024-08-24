import React from "react";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";

const Card = ({ showOrder, setShowOrder }) => {
  // Simulación de productos agregados
  const products = [
    {
      id: 1,
      name: "Aguila Light * 16 Unid (Canasta)",
      price: 68000,
      quantity: 1,
      image: "https://res.cloudinary.com/dybws2ubw/image/upload/v1724541525/corona_w7sgxn.webp",
    },
    {
      id: 2,
      name: "Aguila Original * 16 Unid (Canasta)",
      price: 71000,
      quantity: 1,
      image: "https://res.cloudinary.com/dybws2ubw/image/upload/v1724542604/aguila_zvwoan.webp",
    },
    {
      id: 3,
      name: "Poker * 16 Unid (Canasta)",
      price: 68300,
      quantity: 1,
      image: "https://res.cloudinary.com/dybws2ubw/image/upload/v1724541525/corona_w7sgxn.webp",
    },
    {
      id: 4,
      name: "Costeña * 16 Unid (Canasta)",
      price: 45000,
      quantity: 1,
      image: "https://res.cloudinary.com/dybws2ubw/image/upload/v1724541525/corona_w7sgxn.webp",
    },
    {
      id: 5,
      name: "Tecate * 16 Unid (Canasta)",
      price: 43000,
      quantity: 1,
      image: "https://res.cloudinary.com/dybws2ubw/image/upload/v1724541525/corona_w7sgxn.webp",
    },
    {
      id: 6,
      name: "Budweiser * 24 Unid (Lata)",
      price: 49600,
      quantity: 1,
      image: "https://res.cloudinary.com/dybws2ubw/image/upload/v1724541525/corona_w7sgxn.webp",
    },
    {
      id: 7,
      name: "Corona Lata 269 CM * 24 Unid",
      price: 75400,
      quantity: 1,
      image: "https://res.cloudinary.com/dybws2ubw/image/upload/v1724541525/corona_w7sgxn.webp",
    },
    {
      id: 8,
      name: "Club Colombia Dorada Lata 330 * 24 Unid",
      price: 75400,
      quantity: 1,
      image: "https://res.cloudinary.com/dybws2ubw/image/upload/v1724541525/corona_w7sgxn.webp",
    },
  ];


  const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2);

  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${showOrder ? "right-0" : "-right-full"
        }`}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4">Orden #15</h1>

        {/* Pills */}
        <div className="flex items-center gap-4 flex-wrap mb-8">
          <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
            Pedido
          </button>
          <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            Inventario
          </button>
          <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            Cliente
          </button>
        </div>

        {/* Cart */}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-3">Producto</h5>
            <h5 className="col-span-2" >Cantidad</h5>
            <h5 className="col-span-1">Precio</h5>
          </div>

          {/* Products */}
          <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">
            {products.map((product) => (
              <div key={product.id} className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-4">
                  {/* Product description */}
                  <div className="col-span-4 flex items-center gap-3">
                    <img
                      src={product.image}
                      className="w-10 h-10 object-cover"
                      alt={product.name}
                    />
                    <div>
                      <h5 className="text-sm">{product.name}</h5>
                      <p className="text-xs text-gray-500">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                  {/* Qty */}
                  <div>
                    <span>{product.quantity}</span>
                  </div>
                  {/* Price */}
                  <div>
                    <span>${(product.price * product.quantity).toFixed(2)}</span>
                  </div>
                </div>
                {/* Note */}
                <div className="grid grid-cols-6 items-center">
                  <form className="col-span-5">
                    <input
                      type="text"
                      className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                      placeholder="Order note..."
                    />
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit payment */}
        <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Descuento</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div>
            <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
              Realizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

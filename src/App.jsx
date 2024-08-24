import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
// Components
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  // Array de productos
  const productos = [
    {
      presentacion: "Canasta",
      producto: "Aguila Light * 16 Unid",
      ventaCima: "$ 68,000",
      ventaFria: "$ 70,000",
      ventaParticular: "$ 73,000",
    },
    {
      presentacion: "Canasta",
      producto: "Aguila Original * 16 Unid",
      ventaCima: "$ 71,000",
      ventaFria: "$ 73,000",
      ventaParticular: "$ 76,000",
    },
    {
      presentacion: "Canasta",
      producto: "Poker * 16 Unid",
      ventaCima: "$ 68,300",
      ventaFria: "$ 70,300",
      ventaParticular: "$ 73,300",
    },
    {
      presentacion: "Canasta",
      producto: "Costeña * 16 Unid",
      ventaCima: "$ 45,000",
      ventaFria: "$ 47,400",
      ventaParticular: "$ 50,500",
    },
    {
      presentacion: "Canasta",
      producto: "Tecate * 16 Unid",
      ventaCima: "$ 43,000",
      ventaFria: "$ 45,000",
      ventaParticular: "$ 47,500",
    },
    // Agrega los demás productos aquí
  ];

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Productos disponibles</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Ver más
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {productos.map((producto, index) => (
              <Card
                key={index}
                img="https://res.cloudinary.com/dybws2ubw/image/upload/v1724542604/aguila_zvwoan.webp"
                description={producto.producto}
                prices={{
                  ventaCima: producto.ventaCima,
                  ventaFria: producto.ventaFria,
                  ventaParticular: producto.ventaParticular,
                }}
                inventory="N/A" // Ajusta esto según lo que desees mostrar
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

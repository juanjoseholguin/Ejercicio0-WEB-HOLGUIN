import "./App.css";
import { Card } from "./components/Card/Card";

const App = () => {
  const productos = [
    {
      nombre: "Notebook 15 pulgadas",
      precio: "$1.250.000",
      descripcion: "Laptop con procesador Intel Core i5, 8 GB RAM y disco SSD 256 GB. Ideal para estudio y trabajo.",
      imagen: "https://picsum.photos/id/1/400/240",
    },
    {
      nombre: "Zapatillas running",
      precio: "$189.900",
      descripcion: "Calzado deportivo ligero, suela antideslizante y tejido transpirable. Tallas del 38 al 44.",
      imagen: "https://picsum.photos/id/21/400/240",
    },
    {
      nombre: "Mochila impermeable",
      precio: "$75.000",
      descripcion: "Capacidad 25 L, compartimento para laptop, correas acolchadas y diseño urbano.",
      imagen: "https://picsum.photos/id/22/400/240",
    },
    {
      nombre: "Reloj inteligente",
      precio: "$320.000",
      descripcion: "Monitor de ritmo cardíaco, notificaciones y resistencia al agua. Batería hasta 7 días.",
      imagen: "https://picsum.photos/id/27/400/240",
    },
    {
      nombre: "Cargador inalámbrico",
      precio: "$45.000",
      descripcion: "Base de carga rápida compatible con Qi. Incluye cable USB-C y adaptador.",
      imagen: "https://picsum.photos/id/30/400/240",
    },
  ];

  return (
    <main className="app">
      <h1 className="app__titulo">Productos destacados Holguinstore :D</h1>
      <div className="cards">
        {productos.map((p) => (
          <Card
            key={p.nombre}
            nombre={p.nombre}
            precio={p.precio}
            descripcion={p.descripcion}
            imagen={p.imagen}
          />
        ))}
      </div>
    </main>
  );
};

export default App;

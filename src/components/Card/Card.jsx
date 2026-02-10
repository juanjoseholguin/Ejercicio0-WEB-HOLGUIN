import "./Card.css";

export const Card = ({ nombre, precio, descripcion, imagen }) => {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p className="card-precio">{precio}</p>
      <p>{descripcion}</p>
    </div>
  );
};

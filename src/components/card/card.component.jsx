import "./card.styles.css";

const Card = ({ monsters }) => {
  const { name, email, id } = monsters;
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`Monster ${name}`}
      />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;

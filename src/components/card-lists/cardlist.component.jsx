import Card from "../card/card.component";

import "./cardlist.styles.css";

const CardList = ({ monster }) => (
  <div className="card-list">
    {monster.map((monster) => {
      return <Card monsters={monster} key={monster.id} />;
    })}
  </div>
);

export default CardList;

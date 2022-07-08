import { useState, useEffect } from "react";

import CardList from "./components/card-lists/cardlist.component";
import SearchBox from "./components/search-box/searchbox.component";

import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setMonsters(user))
      .catch((err) => console.log(err));
  }, []);

  const searchFieldValue = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monster-search-box"
        placeholder="Search monster..."
        onChangeHandler={searchFieldValue}
      />
      <CardList monster={filteredMonsters} />
    </div>
  );
};

// Same App using Class Component

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monster: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((user) =>
//         this.setState(() => {
//           return { monster: user };
//         })
//       )
//       .catch((err) => console.log(err));
//   }

//   searchFieldValue = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monster, searchField } = this.state;
//     const { searchFieldValue } = this;

//     const filteredMonsters = monster.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="monster-search-box"
//           placeholder="Search monster..."
//           onChangeHandler={searchFieldValue}
//         />
//         <CardList monster={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;

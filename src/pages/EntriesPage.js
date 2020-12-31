import Header from "../components/Header.js";
import Menu from "../components/Menu.js";
import Entries from "../components/Entries.js";
import { Link } from "react-router-dom";

export default function EntriesPage() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <main>
        <div className="add-entry">
          <Link to={"/"}>
            <button className="add-entry__btn">+</button>
          </Link>
          <p className="add-entry__text">Add Entry</p>
        </div>
        <Entries />
      </main>
    </div>
  );
}

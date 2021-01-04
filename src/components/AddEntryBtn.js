import { Link } from "react-router-dom";

export default function AddEntryBtn() {
  return (
    <div className="add-entry">
    <Link to={"/"}>
      <button className="add-entry__btn flex-column">
        <span className="flex-column">+</span>
      </button>
    </Link>
    <p className="add-entry__text">Add Entry</p>
  </div>
  );
}

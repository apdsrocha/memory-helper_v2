import React, { useState, useEffect } from "react";
import { ReactReduxContext } from "react-redux";
import { Link } from "react-router-dom";
import { saveState } from "../services/localStorage";

const Entries = () => {
  const [entryList, setLista] = useState();
  const { store } = React.useContext(ReactReduxContext);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setLista(store.getState());
      saveState(entryList);
    });
    setLista(store.getState());
    saveState(entryList);

    unsubscribe();
  }, [entryList, store]);

  return (
    <ul className="list_entries">
      {!!entryList ? (
        entryList
          .map((item, index) => {
            if (index === 0) {
              return <li key={index}></li>;
            } else {
              return (
                <Link key={index} to={`/entry?id=${index}`}>
                  <li
                    key={index}
                    data-entry={index}
                    className="list_entry flex-space-between fadein"
                  >
                    <div>
                      <span className="list_entry__plus">+ </span>
                      <span>{item.keyword} </span>
                    </div>
                    <div>
                      <span className="list_entry__date">{item.date}</span>
                    </div>
                  </li>
                </Link>
              );
            }
          })
          .slice(0)
          .reverse()
      ) : (
        <div>No entries just yet :)</div>
      )}
    </ul>
  );
};

export default Entries;

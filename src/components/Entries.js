import React, { useState, useEffect } from "react";
import { ReactReduxContext } from "react-redux";
import { Link } from "react-router-dom";
import { saveState } from "../services/localStorage";
import { deleteEntries } from "../store/actions/action";
import trash from "../images/trash.png";

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

  const deleteBtn = (event) => {
   
    try {
      const unsubscribe = store.subscribe(() => store.getState());
      store.dispatch(
        deleteEntries(event.target.dataset.id)
      );
      setLista(store.getState())
      unsubscribe();

    } catch (e) {
      alert(e.message);
      console.error(e);
    }

    } 
  
  return (
    <ul className="list_entries">
      {!!entryList ? (
        entryList
          .map((item, index) => {
            if (index === 0) {
              return <li key={index}></li>;
            } else {
              return (
                <div key={index} className="flex-space-between">
                <Link key={index} to={`/entry?id=${index}`} className="list_entry__row">
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
                <button className="btn-erase" data-id={index} onClick={deleteBtn}><img src={trash} data-id={index} className="btn-erase__icon" alt='delete entry button'/></button>
                </div>
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

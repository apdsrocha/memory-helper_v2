import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactReduxContext } from "react-redux";
import { getEntries } from "../store/actions/action";
import { saveState } from "../services/localStorage";
import chevron from "../images/chevron.png";

export default function Entry(props) {
  const [entryList, setLista] = useState();
  const { store } = React.useContext(ReactReduxContext);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setLista(store.getState());
      saveState({
        totalEntries: store.getState().totalEntries,
      });
    });
    if (store.getState().length === 0) {
      store.dispatch(getEntries());
    } else {
      setLista(store.getState());
    }

    unsubscribe();
  }, [entryList, store]);

  return (
    <div className="card fadein">
      {!!entryList ? (
        <div>
          <div className="flex-space-between">
            <div className="flex-row">
              <Link to="/entries">
                <img
                  alt="icon to navigate back to previous page"
                  className=""
                  src={chevron}
                />
              </Link>
              <h2 className="card__title">{entryList[props.id].keyword}</h2>
            </div>
            <p>{entryList[props.id].date}</p>
          </div>
          <div className="card__weather flex-row">
            <div className="card__weather--icon">
              <img
                alt="weather icon"
                src={`http://openweathermap.org/img/wn/${
                  entryList[props.id].weather.weather[0].icon
                }.png`}
              />
            </div>
            <div className="card__weather--text">
              <p className="card__weather--temp">
                {(entryList[props.id].weather.main.temp).toFixed(1)} °C
              </p>
              <p className="card__weather--location">
                {entryList[props.id].location}
              </p>
            </div>
          </div>
          <p className="card__weather--description">
            {" "}
            {entryList[props.id].description}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

import React, { useContext, useRef } from "react";
import { saveEntry } from "../store/actions/action";
import { ReactReduxContext } from "react-redux";
import EntriesServices from "../services/EntriesService";

export default function Form(props) {
  let inputKeyword = useRef();
  let inputLocation = useRef();
  let inputDescription = useRef();
  let date = new Date().toLocaleDateString();
  let urlAddress = props.history;

  const { store } = useContext(ReactReduxContext);

  const handleForm = async (event) => {
    event.preventDefault();

    if (
      !!inputLocation.current.value &&
      !!inputKeyword.current.value &&
      !!inputDescription.current.value
    ) {
      try {
        const unsubscribe = store.subscribe(() => store.getState());
        const entries = await store.getState();
        const weatherData = await EntriesServices.getWeather(
          inputLocation.current.value.trim()
        );
        store.dispatch(
          saveEntry(
            inputLocation.current.value,
            inputKeyword.current.value,
            inputDescription.current.value,
            entries.length,
            weatherData,
            date
          )
        );

        unsubscribe();

        urlAddress.push("/entries");
      } catch (e) {
        alert(e.message);
        console.error(e);
      }
    } else {
      alert("Please fill out all of the fields");
    }
  };

  return (
    <section>
      <form className="form flex-column fadein">
        <label className="input__label" htmlFor="keyword">
          Your day in one word:
          <input
            name="keyword"
            className="input__box"
            placeholder="Happy? Cold? Tiresome?"
            type="text"
            ref={inputKeyword}
          />
        </label>

        <label className="input__label" htmlFor="location">
          Where are you?
          <input
            name="location"
            className="input__box"
            placeholder="Let me know the city"
            type="text"
            ref={inputLocation}
          />
        </label>

        <label className="input__label" htmlFor="description">
          Tell me more about today:
          <textarea
            name="description"
            className="input__box"
            type="text"
            ref={inputDescription}
          />
        </label>
        <button
          className="btn-keep-button shadow"
          type="button"
          onClick={handleForm}
        >
          KEEP IT
        </button>
      </form>
    </section>
  );
}

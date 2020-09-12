import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { topics, tags } from "../helpers/enumData";
import { addQuery } from "../helpers/api";
export default function Form({ onUpdate }) {
  const { register, handleSubmit } = useForm(); // for handling form submissions
  const [error, seterror] = useState({ error: false, message: "" });
  const addNewQuery = async (data) => {
    const newQuery = await addQuery(data); // send the query to the server
    console.log(newQuery);
    if (!newQuery.error) {
      seterror({ error: false, message: "" });
      onUpdate(); // update the state after adding a new query
    } else {
      seterror({ error: true, message: newQuery.message });
    }
  };

  const onSubmit = (data) => {
    addNewQuery(data);
  };
  let keyIndex = 0;
  return (
    <div className="Form">
      <h3>Submit a New Query</h3>

      <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="query__input"
          placeholder="Enter Your Query"
          name="query"
          ref={register}
          required
        />
        <div className="selections">
          <div className="field">
            <label htmlFor="topic"> Select a Topic </label>
            <select id="topic" name="topic" ref={register}>
              <option disabled selected></option>
              {topics.map((topic) => (
                <option value={topic} key={keyIndex++}>
                  {topic}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="tags">
              Choose Tags (Hold ctrl for selecting multiple tags){" "}
            </label>

            <select
              id="tags"
              className="multi-dropdown"
              name="tags"
              ref={register}
              multiple
              required
            >
              {tags.map((tag) => (
                <option value={tag} key={keyIndex++}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>
        <input className="btn" type="submit" />
        {error.error && <div className="error"> {error.message} </div>}
      </form>
    </div>
  );
}
